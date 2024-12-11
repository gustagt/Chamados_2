import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";



export const putUser = createAsyncThunk<
  IUser,
  { user: IUser; token: string | undefined; role?: string },
  { rejectValue: string }
>("user/putUser", async ({ user, token, role }, thunkAPI) => {
  const response = await userService.putUser(user, token, role);

  if (response.message) return thunkAPI.rejectWithValue(response.message);

  return response;
});




interface UsersState {
  user?: IUser;
  review?: IReview;
  users: IUser[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState = {
  user: undefined,
  review: undefined,
  users: [],
  loading: "idle",
  error: undefined,
} satisfies UsersState as UsersState;

// Then, handle actions in your reducers:
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reset: (state) => {
      state.user = undefined;
      state.review = undefined;
      state.users = [];
      state.loading = "idle";
      state.error = undefined;
    },
    resetLoading: (state)=> {
      state.loading = "idle";
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    
    builder.addCase(putUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = "succeeded";
      state.error = undefined;
    });
    builder.addCase(putUser.pending, (state, action) => {

      state.loading = "pending";
      state.error = undefined;
    });
    builder.addCase(putUser.rejected, (state, action) => {
    
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { reset, resetLoading} = userSlice.actions;
export default userSlice.reducer;
