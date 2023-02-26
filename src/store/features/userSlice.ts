import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoginStructure, UserState } from "../../types";

const initialState: UserState = {
  username: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (
      currentState: UserState,
      action: PayloadAction<UserLoginStructure>
    ): UserState => ({
      ...currentState,
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
