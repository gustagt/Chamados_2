import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import atendimentoService from "../services/atendimento.service";


// First, create the thunk
export const getAtendimentoOrigemID = createAsyncThunk(
  "atendimento/getAtendimentoOrigemID",
  async ({origem, token} : {origem:number, token: string | undefined}, thunkAPI) => {
    const response = await atendimentoService.getAtendiemntoOrigemID(origem,token);

    return response;
  }
);

interface AtendimentosState {
    atendimentos: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
    atendimentos: [],
  loading: "idle",
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
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAtendimentoOrigemID.fulfilled, (state, action) => {
      // Add user to the state array
      state.atendimentos = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getAtendimentoOrigemID.pending, (state, action) => {
      // Add user to the state array
      state.atendimentos = [];
      state.loading = "pending";
    });builder.addCase(getAtendimentoOrigemID.rejected, (state, action) => {
      // Add user to the state array
      state.atendimentos = [];
      state.loading = "failed";
    });
  },
});

export const { reset } = atendimentoSlice.actions;
export default atendimentoSlice.reducer;
