import {createContext, useState, useContext} from "react";


class AuthService {
    login(user, password) {
        return Promise.resolve({
            user: user,
            loggedIn: true
        })
    }
}


const AuthenticationContext = createContext();

export const AuthenticationProvider = ({children}) => {

    const [session, setSession] = useState({loggedIn: false});

    const login = async ({user, password}) => {
        const authService = new AuthService();

        const newSession = await authService.login(user, password);
        setSession(newSession);
        return true;
    }

    const logout = () => {
        setSession({loggedIn: false});
    }

    const isLoggedIn = () => session.loggedIn

    const value = {
        login,
        logout,
        isLoggedIn
    }

    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
}

export const useAuthenticationContext = () => useContext(AuthenticationContext);