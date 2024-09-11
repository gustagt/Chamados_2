
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import setorService from "../services/setor.service";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";


// First, create the thunk
export const getSetores = createAsyncThunk(
  "setor/getSetores",
  async (token: string|undefined, thunkAPI) => {

    const response = await setorService.getSetores(token);
 
    return response;
  }
);

interface SetoresState {
  setores: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  setores: [],
  loading: "idle",
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
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getSetores.fulfilled, (state, action) => {
      // Add user to the state array
      state.setores = action.payload;
    });
  },
});

export const { reset } = setorSlice.actions;
export default setorSlice.reducer;
