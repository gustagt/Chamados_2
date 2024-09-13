import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sistemaService from "../services/sistema.service";


// First, create the thunk
export const getSistemas = createAsyncThunk(
  "sistema/getSistemas",
  async (token: string | undefined, thunkAPI) => {
    const response = await sistemaService.getSistemas(token);


    return response;
  }
);

interface SistemasState {
    sistemas: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  sistemas: [],
  loading: "idle",
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
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getSistemas.fulfilled, (state, action) => {
      // Add user to the state array
      state.sistemas = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getSistemas.pending, (state, action) => {
      // Add user to the state array
      state.sistemas = [];
      state.loading = "pending";
    });builder.addCase(getSistemas.rejected, (state, action) => {
      // Add user to the state array
      state.sistemas = [];
      state.loading = "failed";
    });
  },
});

export const { reset } = sistemaSlice.actions;
export default sistemaSlice.reducer;
