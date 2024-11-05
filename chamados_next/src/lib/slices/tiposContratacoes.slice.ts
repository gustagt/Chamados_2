import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import tiposContratacoesService from "../services/tiposContratacoes.service";


// First, create the thunk
export const getTiposContratacoes = createAsyncThunk<
  [],
  { token: string | undefined; role?: string },
  { rejectValue: string }
>(
  "tiposContratacoes/getTiposContratacoes",
  async ({ token, role }, thunkAPI) => {
    const response = await tiposContratacoesService.getTiposContratacoes(
      token,
      role
    );

    if (response.message) return thunkAPI.rejectWithValue(response.message);

    return response;
  }
);

interface TiposContratacoesState {
  tiposContratacoes: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState = {
  tiposContratacoes: [],
  loading: "idle",
  error: undefined,
} satisfies TiposContratacoesState as TiposContratacoesState;

// Then, handle actions in your reducers:
const tiposContratacoesSlice = createSlice({
  name: "tiposContratacoes",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reset: (state) => {
      state.tiposContratacoes = [];
      state.loading = "idle";
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getTiposContratacoes.fulfilled, (state, action) => {
      // Add user to the state array
      state.tiposContratacoes = action.payload;
      state.loading = "succeeded";
      state.error = undefined;
    });
    builder.addCase(getTiposContratacoes.pending, (state, action) => {
      // Add user to the state array
      state.tiposContratacoes = [];
      state.loading = "pending";
      state.error = undefined;
    });
    builder.addCase(getTiposContratacoes.rejected, (state, action) => {
      // Add user to the state array
      state.tiposContratacoes = [];
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { reset } = tiposContratacoesSlice.actions;
export default tiposContratacoesSlice.reducer;
