import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const createStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
