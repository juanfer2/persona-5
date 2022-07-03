import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const Auth = createSlice({
  name: 'auth',
  initialState: { isAuth: false, token: null },
  reducers: {
    updateAuth: (state, action: PayloadAction<any>) => {
      state.isAuth = action.payload.isAuth;
      state.token = action.payload.token;
    }
  }
});

export const { updateAuth } = Auth.actions;
export default Auth.reducer;
