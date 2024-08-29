import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { userReducer } from 'entites/User';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

export const createStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {
        user: userReducer,
        login: loginReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
