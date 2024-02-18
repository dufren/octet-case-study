import { SessionStorageHelper } from '@helpers/sessionStorage';
import { createSlice } from '@reduxjs/toolkit';
import { AuthEnum } from '../../types/globals';

export type AuthSliceType = {
  user: null | string;
  isAuthenticated: boolean;
};

const initialState: AuthSliceType = {
  user: SessionStorageHelper.getSessionStorageItem(AuthEnum.USER) ?? null,
  isAuthenticated:
    SessionStorageHelper.getSessionStorageItem(AuthEnum.IS_AUTHENTICATED) ??
    false,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      SessionStorageHelper.setSessionStorageItems(
        [AuthEnum.USER, AuthEnum.IS_AUTHENTICATED],
        [action.payload, true]
      );
    },
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
