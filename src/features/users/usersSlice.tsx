import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Id, User, WithId, WithIsLiked, WithPhoto } from '../../app/types';
import { usersAPI } from './usersApi';

export interface UsersState {
  users: (User & WithId & WithPhoto & WithIsLiked)[] | null;
  isUsersFetching: boolean;
  usersFetchingError: string | null;
  totalUsers: number;
  usersCount: number;
  usersPage: number;
}

const initialState: UsersState = {
  users: [
    // {
    //   id: '1',
    //   description:
    //     ' gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga gagagagagaga',
    //   email: '1 User@gmail.om',
    //   photo: null,
    //   username: 'username 1',
    //   isLiked: false,
    //   first_name: 'vasya',
    //   last_name: 'belo',
    // },
    // {
    //   id: '2',
    //   description: '2 User',
    //   email: '2 User@gmail.om',
    //   photo: null,
    //   username: 'username 2',
    //   isLiked: false,
    //   first_name: 'pol',
    //   last_name: 'verz',
    // },
    // {
    //   id: '3',
    //   description: '3 User',
    //   email: '3 User@gmail.om',
    //   photo: null,
    //   username: 'username 3',
    //   isLiked: true,
    //   first_name: 'jhg',
    //   last_name: 'etur',
    // },
    // {
    //   id: '4',
    //   description: '4 User',
    //   email: '4 User@gmail.om',
    //   photo: null,
    //   username: 'username 4',
    //   isLiked: false,
    //   first_name: ';p;',
    //   last_name: 'kljk',
    // },
    // {
    //   id: '5',
    //   description: '5 User',
    //   email: '5 User@gmail.om',
    //   photo: null,
    //   username: 'username 5',
    //   isLiked: true,
    //   first_name: 'bvm',
    //   last_name: 'zxczx',
    // },
  ],
  isUsersFetching: false,
  usersFetchingError: null,
  totalUsers: 0,
  usersCount: 2,
  usersPage: 0,
};

export const getUsers = createAsyncThunk('users/fetch', async () => {
  const response = await usersAPI.getUsers();
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeIsLiked: (state, action: PayloadAction<Id>) => {
      const user = state.users?.find((u) => u.id === action.payload);
      if (user) {
        user.isLiked = !user.isLiked;
      }
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.isUsersFetching = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isUsersFetching = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isUsersFetching = false;
        state.usersFetchingError = action.error.message ?? null;
      }),
});

export const { changeIsLiked } = usersSlice.actions;

export default usersSlice.reducer;
