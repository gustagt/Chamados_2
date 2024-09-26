import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sistemaService from "../services/sistema.service";

// First, create the thunk
export const getSistemas = createAsyncThunk<
  [],
  string | undefined,
  { rejectValue: string }
>("sistema/getSistemas", async (token: string | undefined, thunkAPI) => {
  const response = await sistemaService.getSistemas(token);
  if (response.message) return thunkAPI.rejectWithValue(response.message);

  return response;
});

interface SistemasState {
  sistemas: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState = {
  sistemas: [],
  loading: "idle",
  error: undefined,
} satisfies SistemasState as SistemasState;

// Then, handle actions in your reducers:
const sistemaSlice = createSlice({
  name: "sistemas",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reset: (state) => {
      state.sistemas = [];
      state.loading = "idle";
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getSistemas.fulfilled, (state, action) => {
      // Add user to the state array
      state.sistemas = action.payload;
      state.loading = "succeeded";
      state.error = undefined;
    });
    builder.addCase(getSistemas.pending, (state, action) => {
      // Add user to the state array
      state.sistemas = [];
      state.loading = "pending";
      state.error = undefined;
    });
    builder.addCase(getSistemas.rejected, (state, action) => {
      // Add user to the state array
      state.sistemas = [];
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { reset } = sistemaSlice.actions;
export default sistemaSlice.reducer;
