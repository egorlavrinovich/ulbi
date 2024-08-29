import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entites/User';
import { LoginSchema } from 'features/AuthByUserName';
import { AuthUser } from 'features/AuthByUserName/model/types/loginSchema';

type LoginByUserNameProps = Pick<LoginSchema, 'userName' | 'userPassword'>;

export const loginByUserName = createAsyncThunk(
    'login/loginByUserName',
    async (payload: LoginByUserNameProps, thunkAPI) => {
        try {
            const response = await axios.post<AuthUser>('http://localhost:8000/login', payload);
            const { id, userName } = response.data;
            thunkAPI.dispatch(userActions.setAuthData({ login: userName, id }));
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
