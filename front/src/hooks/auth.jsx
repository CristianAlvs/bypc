import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [ data, setData ] = useState({});
    const [ secondAccess, setSecondAccess ] = useState(false);

    async function signIn({ email, password}) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { token, user } = response.data;

            localStorage.setItem("@bypc:user", JSON.stringify(user));
            localStorage.setItem("@bypc:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ token, user });

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

    async function checkSecondAccess() {
        localStorage.setItem("@bypc:secondAccess", true);

        setSecondAccess(true);
    }

    useEffect(() => {
        const user = localStorage.getItem("@bypc:user");
        const token = localStorage.getItem("@bypc:token");

        if(user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }

        const secondAccess = localStorage.getItem("@bypc:secondAccess");

        if(secondAccess) {
            setSecondAccess(true);
        }

    }, []);

    return (
        <AuthContext.Provider value={{ checkSecondAccess, secondAccess, signIn, signOut, user: data.user }}> 
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context;
}

export { AuthProvider, useAuth };