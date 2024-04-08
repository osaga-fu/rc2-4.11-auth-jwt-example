import {createContext, useState, useContext} from "react";


class AuthService {
    login(user, password) {
        return Promise.resolve({
            user: user,
            password: password,
            loggedIn: true
        })
    }
}


const AuthenticationContext = createContext();

export const AuthenticationProvider = ({children}) => {

    const [session, setSession] = useState({loggedIn: false});

    const login = async (user, password) => {
        const authService = new AuthService();

        const newSession = await authService.login(user, password);
        setSession(newSession);
        return true;
    }

    const logout = () => {
        setSession({loggedIn: false});
    }

    const getAuthenticationHeader = () => {
        if (!session || !session.user || !session.password) {
            return "";
        } else {
            return `Basic ${btoa(`${session.user}:${session.password}`)}`;
        }
    }

    const isLoggedIn = () => session.loggedIn

    const value = {
        login,
        logout,
        isLoggedIn,
        getAuthenticationHeader
    }

    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
}

export const useAuthenticationContext = () => useContext(AuthenticationContext);