import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import chamadoService from "../services/chamado.service";


export const getChamados = createAsyncThunk<
  [],
  string | undefined,
  { rejectValue: string }
>("chamado/getChamados", async (token, thunkAPI) => {
  const response = await chamadoService.getChamados(token);

  if (response.message) return thunkAPI.rejectWithValue(response.message);

  return response;
});

export const getChamadoId = createAsyncThunk<
  IProtocol,
  { id: number; token: string | undefined; role?: string },
  { rejectValue: string }
>("chamado/getChamadoId", async (data, thunkAPI) => {
  const response = await chamadoService.getChamadoId(
    data.id,
    data.token,
    data.role
  );

  if (response.message) return thunkAPI.rejectWithValue(response.message);

  return response;
});

export const postChamado = createAsyncThunk<
  IProtocol,
  { chamado: IProtocol; token: string | undefined },
  { rejectValue: string }
>("chamado/postChamado", async ({ chamado, token }, thunkAPI) => {
  const response = await chamadoService.postChamado(chamado, token);

  if (response.message) return thunkAPI.rejectWithValue(response.message);

  return response;
});

export const putChamado = createAsyncThunk<
  IProtocol,
  { chamado: IProtocol; token: string | undefined; role?: string, message?:string },
  { rejectValue: string }
>("chamado/putChamado", async ({ chamado, token, role, message }, thunkAPI) => {
  const response = await chamadoService.putChamado(chamado, token, role, message);

  if (response.message) return thunkAPI.rejectWithValue(response.message);

  return response;
});

export const deleteChamado = createAsyncThunk<
  number,
  { id: number; token: string | undefined },
  { rejectValue: string }
>("chamado/deleteChamado", async ({ id, token }, thunkAPI) => {
  const response = await chamadoService.deleteChamado(id, token);

  if (response.message) return thunkAPI.rejectWithValue(response.message);

  return id;
});

export const postReview = createAsyncThunk<
  IReview,
  { review: IReview; token: string | undefined },
  { rejectValue: string }
>("chamado/postReview", async ({ review, token }, thunkAPI) => {
  const response = await chamadoService.postReview(review, token);

  if (response.message) return thunkAPI.rejectWithValue(response.message);

  return response;
});

interface ChamadosState {
  chamado?: IProtocol;
  review?: IReview;
  chamados: IProtocol[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState = {
  chamado: undefined,
  review: undefined,
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
      state.review = undefined;
      state.chamados = [];
      state.loading = "idle";
      state.error = undefined;
    },
    resetLoading:(state) =>{
      state.loading= "idle";
    }
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
    builder.addCase(postReview.fulfilled, (state, action) => {
      state.review = action.payload;
      state.loading = "succeeded";
      state.error = undefined;
    });
    builder.addCase(postReview.pending, (state, action) => {
      // Add user to the state array
      state.review = undefined;
      state.loading = "pending";
      state.error = undefined;
    });
    builder.addCase(postReview.rejected, (state, action) => {
      // Add user to the state array
      state.review = undefined;
      state.loading = "failed";
      state.error = action.payload;
    });
    builder.addCase(getChamadoId.fulfilled, (state, action) => {
      state.chamado = action.payload;
      state.loading = "succeeded";
      state.error = undefined;
    });
    builder.addCase(getChamadoId.pending, (state, action) => {
      // Add user to the state array
      state.chamado = undefined;
      state.loading = "pending";
      state.error = undefined;
    });
    builder.addCase(getChamadoId.rejected, (state, action) => {
      // Add user to the state array
      state.chamado = undefined;
      state.loading = "failed";
      state.error = action.payload;
    });
    builder.addCase(getChamados.fulfilled, (state, action) => {
      if (state.chamados !== action.payload) state.chamados = action.payload;
    
      state.error = undefined;
    });
    builder.addCase(getChamados.pending, (state, action) => {
      // Add user to the state array
      // state.chamados = [];
    
      state.error = undefined;
    });
    builder.addCase(getChamados.rejected, (state, action) => {
      // Add user to the state array
      state.chamados = [];
 
      state.error = action.payload;
    });
    builder.addCase(deleteChamado.fulfilled, (state, action) => {
      state.chamados = state.chamados.filter(
        (chamado) => chamado.id !== action.payload
      );
      state.loading = "succeeded";
      state.error = undefined;
    });
    builder.addCase(deleteChamado.pending, (state, action) => {
      state.loading = "pending";
      state.error = undefined;
    });
    builder.addCase(deleteChamado.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
    builder.addCase(putChamado.fulfilled, (state, action) => {
      state.chamado = action.payload;
      state.chamados = state.chamados.map((chamado) =>
        chamado.id === action.payload.id
          ? {
              ...chamado,
              idStatus: chamado.idStatus + 1,
              status: {
                id: chamado.idStatus + 1,
                status:
                  chamado.idStatus + 1 === 2 ? "Em Atendimento" : "Finalizado",
              },
            }
          : chamado
      );
      state.loading = "succeeded";
      state.error = undefined;
    });
    builder.addCase(putChamado.pending, (state, action) => {

      state.loading = "pending";
      state.error = undefined;
    });
    builder.addCase(putChamado.rejected, (state, action) => {
    
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { reset, resetLoading } = chamadoSlice.actions;
export default chamadoSlice.reducer;
