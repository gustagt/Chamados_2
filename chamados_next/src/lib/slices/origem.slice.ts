import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import origemService from "../services/origem.service";

// First, create the thunk
export const getOrigens = createAsyncThunk<
[],
{token: string | undefined; role?: string} ,
{ rejectValue: string }
>(
  "origem/getOrigens",
  async ({token, role}, thunkAPI) => {
    const response = await origemService.getOrigens(token,role);

    if (response.message) return thunkAPI.rejectWithValue(response.message);

    return response;
  }
);

interface OrigensState {
  origens: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState = {
  origens: [],
  loading: "idle",
  error: undefined,
} satisfies OrigensState as OrigensState;

// Then, handle actions in your reducers:
const origemSlice = createSlice({
  name: "origem",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reset: (state) => {
      state.origens = [];
      state.loading = "idle";
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getOrigens.fulfilled, (state, action) => {
      // Add user to the state array
      state.origens = action.payload;
      state.loading = "succeeded";
      state.error = undefined;

    });
    builder.addCase(getOrigens.pending, (state, action) => {
      // Add user to the state array
      state.origens = [];
      state.loading = "pending";
      state.error = undefined;

    });
    builder.addCase(getOrigens.rejected, (state, action) => {
      // Add user to the state array
      state.origens = [];
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { reset } = origemSlice.actions;
export default origemSlice.reducer;
