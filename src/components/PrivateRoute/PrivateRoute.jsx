import { Navigate } from "react-router-dom";
import {UserAuth} from "../../appContext.js";
import {useUser} from "../../hooks/useUser.jsx";

function PrivateRoute({ element }) {

    const {user, authenticated} = useUser()

    return authenticated ? (
        <UserAuth.Provide value={{user, authenticated}}>
            element
        </UserAuth.Provide>
    ) : (
        <UserAuth.Provide value={ {user, authenticated} }>
            <Navigate to="/login"/>
        </UserAuth.Provide>
    );

}

export default PrivateRoute