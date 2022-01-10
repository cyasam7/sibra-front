import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";
import { setToken, getToken, deleteToken } from "../Helpers/axiosHelper";

const ContextAuth = React.createContext(null);

export const AuthProvider: React.FC<any> = (props) => {
    const [User, setUser] = useState({});
    const [Auth, setAuth] = useState(false);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        async function initial() {
            const token = getToken();
            if (!token) {
                setAuth(false);
                setUser({});
                setLoading(false);
            } else {
                try {
                    const { data } = await axios.get("/auth/whoami");
                    setAuth(true);
                    setUser((prev) => ({ ...prev, ...data }));
                } catch (error) {
                    setAuth(false);
                    setUser({});
                    deleteToken();
                } finally {
                    setLoading(false);
                }
            }
        }
        initial();
    }, []);

    async function LogIn(email: string, password: string) {
        const { data } = await axios({
            url: "/auth/sign-in",
            method: "POST",
            data: {
                email: email.trim(),
                password,
            },
        });
        setToken(data.accessToken);
        setUser(data.user);
        setAuth(true);
        return data.user;
    }

    function LogOut() {
        setAuth(false);
        setUser({});
        deleteToken();
    }
    const value = useMemo(() => {
        return {
            User,
            Auth,
            Loading,
            LogIn,
            LogOut,
        };
    }, [User, Auth, Loading]);
    return <ContextAuth.Provider value={value} {...props} />;
};
export const useAuth = () => {
    const context = React.useContext(ContextAuth);
    if (!context) {
        throw new Error("Debe estar dentro del contexto Auth");
    }
    return context;
};
