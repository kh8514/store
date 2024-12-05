import React, {createContext, useContext, useEffect, useState} from 'react';
import {LayoutSplashScreen} from "../../../pages/SplashScreen";
import * as authHelper from "../../../utils/AuthHelpers";

const initAUthContextPropsState = {
    auth: false,
    saveAuth: () => {},
    currentUser: undefined,
    setCurrentUser: () => {},
    logout: () => {}
}

const AuthContext = createContext(initAUthContextPropsState);

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    const saveAuth = (auth) => {
        setAuth(auth);
        if(auth) {
            authHelper.setAuth(auth);
        } else {
            authHelper.removeAuth();
        }
    }

    const logout = () => {
        saveAuth(undefined);
        setCurrentUser(undefined);
    }

    return (
        <AuthContext.Provider value={{auth, saveAuth, currentUser, setCurrentUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

const AuthInit = ({ children }) => {
    const {auth, currentUser, logout, setCurrentUser} = useAuth();
    const [showSPlashScrren, setShowSplashScreen] = useState(true);

    useEffect(() => {
        const requestUser = async (apiToken) => {
            try {
                if(!currentUser) {
                    const {body : data} = await getUserByToken(apiToken);
                    if(data) {
                      setCurrentUser(data);
                    }
                }
            } catch (error) {
                console.error(error);
                if (currentUser) {
                    logout()
                }
            } finally {
                setShowSplashScreen(false);
            }
        }
    }, []);

    return showSPlashScrren ? <LayoutSplashScreen /> : <>{children}</>;
}

export { AuthProvider, AuthInit, useAuth}
export default AuthContext;