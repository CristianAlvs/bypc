import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [ data, setData ] = useState({});

    async function signIn({ email, password}) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@bypc:user", JSON.stringify(user));
            localStorage.setItem("@bypc:token", token);

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token });

            return user;
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar");
            }
        }
    }

    async function signOut() {
        localStorage.removeItem("@bypc:user");
        localStorage.removeItem("@bypc:token");

        setData({});
    }

    useEffect(() => {
        const user = localStorage.getItem("@bypc:user");
        const token = localStorage.getItem("@bypc:token");

        if(user && token) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({
                user: JSON.parse(user),
                token
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user }}> 
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context;
}

export { AuthProvider, useAuth };