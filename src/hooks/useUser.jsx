import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {checkAuth} from "../apis/apiUsers.jsx";

export function useUser() {
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserDetails() {
            const authResponse = await checkAuth()
            setUser(authResponse.user);
            setAuthenticated(authResponse.authenticated);
        }

        getUserDetails();
    }, []);

    return {user, authenticated};
}