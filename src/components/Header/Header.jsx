import logo from "../../assets/images/logo.png"
import {NavLink, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {useUser} from "../../hooks/useUser.jsx";
import {checkAuth} from "../../apis/apiUsers.jsx";
import { UserAuth } from "../../appContext.js";
import Cookies from "js-cookie";

function Header() {

    const { appAuth, setAppAuth } = useContext(UserAuth)
    const navigate = useNavigate();

    function logout(){
        setAppAuth({authenticated:false, user: {}})
        Cookies.remove('token')

        navigate('/login');
    }

    return (
        <header className={`sticky top-0 h-20 flex flex-row justify-between px-3 bg-background/90 shadow-md z-90 backdrop-blur`}>
            <div className="text-primary text-xl font-bold my-auto">
                <NavLink to={'/'} >
                    CHECK MY RIG
                </ NavLink>
            </div>
            <div className='my-auto'>
                {!appAuth.authenticated &&
                    <NavLink to={'/login'}>
                        <button className="text-sm bg-primary text-primary-foreground rounded px-3 py-1 hover:bg-primary/90">
                            <i className="fas fa-plug "></i>
                            <span>Log in</span>
                        </button>
                    </NavLink>
                }
                {appAuth?.authenticated &&
                    <button className="btn btn-primary" onClick={logout}>
                        <i className="fas fa-sign-in-alt mr-5"></i>
                        <span>Log out</span>
                    </button>
                }
                {(appAuth?.authenticated && appAuth?.user.admin)  &&
                    <NavLink to={'/admin'}>
                        <button className="btn btn-reverse-primary mr-5">
                            <i className="fas fa-plug mr-5"></i>
                            <span>Admin panel</span>
                        </button>
                    </NavLink>
                }

            </div>
        </header>
    )
}

export default Header;