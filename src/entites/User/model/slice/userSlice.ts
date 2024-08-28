import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from 'entites/User/model/types/UserSchema';

const initialState: UserSchema = {
    authData: null,
};

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
