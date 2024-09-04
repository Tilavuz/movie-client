import { UserInterface } from "@/interfaces/user-interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  loading: boolean,
  user: UserInterface | null,
  error: string | null
}

const initialState: UserState = {
  loading: false,
  user: null,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startAuth: (state) => {
      state.loading = true
    },
    userLogin: (state, action: PayloadAction<UserInterface>) => {
      state.loading = false
      state.user = action.payload
    }
  }
})



export const { startAuth, userLogin } = userSlice.actions;

export default userSlice.reducer;