import { createSlice } from '@reduxjs/toolkit';
import { User, WithId, WithPhoto } from '../../app/types';

export interface UsersState {
  users: (User & WithId & WithPhoto)[];
  isUsersFetching: boolean;
  usersFetchingError: string | null;
  totalUsers: number;
  usersCount: number;
  usersPage: number;
}

const initialState: UsersState = {
  users: [],
  isUsersFetching: false,
  usersFetchingError: null,
  totalUsers: 0,
  usersCount: 2,
  usersPage: 0,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
