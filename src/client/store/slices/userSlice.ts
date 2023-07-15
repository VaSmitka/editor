import { createAction, createAsyncThunk, createSlice, PrepareAction } from '@reduxjs/toolkit';
import { UserModel } from '@app/domain/UserModel';
import { persistUser, readUser } from '@app/services/localStorage.service';
import { removeStudent, updateUser } from '@app/api/auth.api';

export interface UserState {
  user: UserModel | null;
}

const initialState: UserState = {
  user: readUser(),
};

export const setUser = createAction<PrepareAction<UserModel>>('user/setUser', (newUser) => {
  persistUser(newUser);

  return {
    payload: newUser,
  };
});

export const doUpdateUser = createAsyncThunk('user/removeStudent', async ({id, ...userData}: any) => {
  updateUser(id, userData).then((res: any) => {
    console.log('Remove student by user id', res);
    return res;
  })
});

export const doRemoveStudent = createAsyncThunk('user/removeStudent', async (userId: number) => {
  removeStudent(userId).then((res: any) => {
    console.log('Remove student by user id', res);
    return res;
  })
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
