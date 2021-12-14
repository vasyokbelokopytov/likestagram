import { createSlice } from '@reduxjs/toolkit';
import { User, WithId, WithPhoto } from '../../app/types';

export interface AuthState {
  account: (User & WithId & WithPhoto) | null;
}

const initialState: AuthState = {
  account: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
