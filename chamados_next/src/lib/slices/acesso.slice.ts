import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import acessoService from "../services/acesso.service";


// First, create the thunk
export const getAcessos = createAsyncThunk<[], string | undefined, {rejectValue: string}>(
  "acesso/getAcessos",
  async (token, thunkAPI) => {
    const response = await acessoService.getAcessos(token+'dsadssa');

    if (response.message)return thunkAPI.rejectWithValue(response.message)

    return response;
  }
);

interface AcessosState {
  acessos: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState = {
  acessos: [],
  loading: "idle",
  error: undefined,
} satisfies AcessosState as AcessosState;

// Then, handle actions in your reducers:
const acessoSlice = createSlice({
  name: "acesso",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reset: (state) => {
      state.acessos = [];
      state.loading = "idle";
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAcessos.fulfilled, (state, action) => {
      // Add user to the state array
      state.acessos = action.payload;
      state.loading = "succeeded";
      state.error = undefined;
    });
    builder.addCase(getAcessos.pending, (state, action) => {
      // Add user to the state array
      state.acessos = [];
      state.loading = "pending";
      state.error = undefined;
    });
    builder.addCase(getAcessos.rejected, (state, action) => {
      // Add user to the state array
      state.acessos = [];
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { reset } = acessoSlice.actions;
export default acessoSlice.reducer;
