import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { userReducer } from 'entites/User';

export const createStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {
        user: userReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
