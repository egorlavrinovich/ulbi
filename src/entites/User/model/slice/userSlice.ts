import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entites/User/model/types/UserSchema';
import { USER_TOKEN } from 'shared/constants/constants';

const initialState: UserSchema = {
    authData: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            localStorage.setItem(USER_TOKEN, JSON.stringify(Date.now()));
        },
        logOut: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_TOKEN);
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
