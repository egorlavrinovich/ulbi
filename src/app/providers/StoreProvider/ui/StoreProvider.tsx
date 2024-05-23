import { FC } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

interface StoreProviderProps {
    initialState?: StateSchema
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
