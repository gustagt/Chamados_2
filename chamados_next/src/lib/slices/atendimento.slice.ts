import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import atendimentoService from "../services/atendimento.service";

// First, create the thunk
export const getAtendimentoOrigemID = createAsyncThunk<
  [],
  { origem: number; token: string | undefined, role?: string },
  { rejectValue: string }
>("atendimento/getAtendimentoOrigemID", async (data, thunkAPI) => {
  const response = await atendimentoService.getAtendiemntoOrigemID(
    data.origem,
    data.token,
    data.role
  );

  if (response.message) return thunkAPI.rejectWithValue(response.message);

  return response;
});

interface AtendimentosState {
  atendimentos: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState = {
  atendimentos: [],
  loading: "idle",
  error: undefined,
} satisfies AtendimentosState as AtendimentosState;

// Then, handle actions in your reducers:
const atendimentoSlice = createSlice({
  name: "atendimento",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reset: (state) => {
      state.atendimentos = [];
      state.loading = "idle";
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAtendimentoOrigemID.fulfilled, (state, action) => {
      // Add user to the state array
      state.atendimentos = action.payload;
      state.loading = "succeeded";
      state.error = undefined;
    });
    builder.addCase(getAtendimentoOrigemID.pending, (state, action) => {
      // Add user to the state array
      state.atendimentos = [];
      state.loading = "pending";
      state.error = undefined;
    });
    builder.addCase(getAtendimentoOrigemID.rejected, (state, action) => {
      // Add user to the state array
      state.atendimentos = [];
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { reset } = atendimentoSlice.actions;
export default atendimentoSlice.reducer;
