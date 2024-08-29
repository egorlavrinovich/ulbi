import {
    createContext, FC, useEffect, useState,
} from 'react';
import { Theme, ThemeContext } from 'shared/config/theme/ThemeContext';
import { USER_TOKEN } from 'shared/constants/constants';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entites/User/model/selectors/getAuthData';

interface IUserAuth {
    isAuth: boolean,
    setIsAuth?: (auth: boolean) => void
}

const isAuth = !!localStorage.getItem(USER_TOKEN);

export const AuthContext = createContext<IUserAuth>({ isAuth });

const AuthProvider: FC = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const userAuth = useSelector(getAuthData);

    useEffect(() => {
        setIsAuth(!!userAuth || !!localStorage.getItem(USER_TOKEN));
    }, [userAuth]);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
