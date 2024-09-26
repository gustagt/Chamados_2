import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import setorService from "../services/setor.service";

// First, create the thunk
export const getSetores = createAsyncThunk<
[],
string | undefined ,
{ rejectValue: string }
>(
  "setor/getSetores",
  async (token: string | undefined, thunkAPI) => {
    const response = await setorService.getSetores(token);

    if (response.message) return thunkAPI.rejectWithValue(response.message);

    return response;
  }
);

interface SetoresState {
  setores: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState = {
  setores: [],
  loading: "idle",
  error: undefined,
} satisfies SetoresState as SetoresState;

// Then, handle actions in your reducers:
const setorSlice = createSlice({
  name: "setor",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reset: (state) => {
      state.setores = [];
      state.loading = "idle";
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getSetores.fulfilled, (state, action) => {
      // Add user to the state array
      state.setores = action.payload;
      state.loading = "succeeded";
      state.error = undefined;

    });
    builder.addCase(getSetores.pending, (state, action) => {
      // Add user to the state array
      state.setores = [];
      state.loading = "pending";
      state.error = undefined;

    });
    builder.addCase(getSetores.rejected, (state, action) => {
      // Add user to the state array
      state.setores = [];
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { reset } = setorSlice.actions;
export default setorSlice.reducer;
