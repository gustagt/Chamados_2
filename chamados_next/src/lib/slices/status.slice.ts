import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import origemService from "../services/origem.service";
import statusService from "../services/status.service";

// First, create the thunk
export const getStatus = createAsyncThunk<
[],
{token: string | undefined; role?: string} ,
{ rejectValue: string }
>(
  "status/getStatus",
  async ({token, role}, thunkAPI) => {
    const response = await statusService.getStatus(token,role);

    if (response.message) return thunkAPI.rejectWithValue(response.message);

    return response;
  }
);

interface StatusState {
  status: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState = {
  status: [],
  loading: "idle",
  error: undefined,
} satisfies StatusState as StatusState;

// Then, handle actions in your reducers:
const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reset: (state) => {
      state.status = [];
      state.loading = "idle";
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getStatus.fulfilled, (state, action) => {
      // Add user to the state array
      state.status = action.payload;
      state.loading = "succeeded";
      state.error = undefined;

    });
    builder.addCase(getStatus.pending, (state, action) => {
      // Add user to the state array
      state.status = [];
      state.loading = "pending";
      state.error = undefined;

    });
    builder.addCase(getStatus.rejected, (state, action) => {
      // Add user to the state array
      state.status = [];
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { reset } = statusSlice.actions;
export default statusSlice.reducer;
