import {useLoaderData, useNavigate} from "react-router-dom";
import {useState} from "react";
import {CURRENT_USER} from "../../contexts/settings.jsx";
import {authUser} from "../../apis/index.js";

function AuthProvider( {children}){
    const loadedUser = useLoaderData()
    const [user, setUser]  = useState(loadedUser)
    const navigate = useNavigate()

    async function login(credentials){
        const verifiedUser = await authUser(credentials)
        setUser(verifiedUser)
    }

     async function logout(){
        setUser(null)
    }

    return (
        <CURRENT_USER.Provider value={{user,login, logout}}>
            {children}
        </CURRENT_USER.Provider>
    )
}

export default AuthProvider;