import {createContext, useState, useContext} from "react";


class AuthService {
    login(user, password) {
        return fetch("http://localhost:8080/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user,
                password: password
            })
        })
            .then(response => response.json())
            .then(response => ({
                loggedIn: true,
                accessToken: response.accessToken
            }))

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

    const isLoggedIn = () => session.loggedIn

    const getToken = () => session.accessToken || "";

    const value = {
        login,
        logout,
        isLoggedIn,
        getToken
    }

    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
}

export const useAuthenticationContext = () => useContext(AuthenticationContext);