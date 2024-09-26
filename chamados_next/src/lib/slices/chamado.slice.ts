import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import chamadoService from "../services/chamado.service";

// First, create the thunk
export const postChamado = createAsyncThunk<
IProtocol,
{ chamado: IProtocol; token: string | undefined },
{ rejectValue: string }
>(
  "chamado/postChamado",
  async (
    { chamado, token },
    thunkAPI
  ) => {
    const response = await chamadoService.postChamado(chamado, token);

    if (response.message) return thunkAPI.rejectWithValue(response.message);

    return response;
  }
);



interface ChamadosState {
  chamado?: IProtocol;
  chamados: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;

}

const initialState = {
  chamado: undefined,
  chamados: [],
  loading: "idle",
  error: undefined,

} satisfies ChamadosState as ChamadosState;

// Then, handle actions in your reducers:
const chamadoSlice = createSlice({
  name: "chamado",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reset: (state) => {
      state.chamado = undefined;
      state.chamados = [];
      state.loading = "idle";
      state.error = undefined;

    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(postChamado.fulfilled, (state, action) => {
      // Add user to the state array
      state.chamado = action.payload;
      state.loading = "succeeded";
      state.error = undefined;

    });
    builder.addCase(postChamado.pending, (state, action) => {
      // Add user to the state array
      state.chamado = undefined;

      state.loading = "pending";
      state.error = undefined;

    });
    builder.addCase(postChamado.rejected, (state, action) => {
      // Add user to the state array
      state.chamado = undefined;
      state.loading = "failed";
      state.error = action.payload;

    });
    
  },
});

export const { reset } = chamadoSlice.actions;
export default chamadoSlice.reducer;
