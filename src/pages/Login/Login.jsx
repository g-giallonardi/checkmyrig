import styles from './Login.module.scss'
import loginImage from '../../assets/images/login.png'
import {NavLink, useNavigate, useOutletContext} from "react-router-dom";
import { useForm } from "react-hook-form"
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {authUsers} from "../../apis/apiUsers.jsx";
import { useState} from "react";

function Login(){

    const redirect = useNavigate()
    const [globalError, setGlobalError] = useState('')
    const { setAppAuth } = useOutletContext()

    const initialValues = {
        username: "",
        password: "",
    };

    const userSchema = Yup.object({
        username: Yup.string()
            .required("Required field"),
        password: Yup.string()
            .required("Required field")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: initialValues
    })

    const onSubmit = async (data) => {
        // eslint-disable-next-line no-unused-vars
        const response = await authUsers(data)
        if (response.code === 200) {
            setAppAuth({authenticated:true, user: await response.result.user})
            redirect('/')
        } else{
            setGlobalError(response.result)
        }
    }

    return (
        <div className={`d-flex flex-row  ${styles.loginCard} justify-content-center align-items-center`}>
            <div className={`d-flex flex-column ${styles.loginForm} `}>
                <div className={`d-flex flex-column`}>
                    <h2>Sign In</h2>
                </div>
                <div className={`d-flex flex-column`}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {globalError && <p><small className={`error mb-20`}>{globalError}</small></p>}
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <small className={`mb-20`}>Don't have account yet?  <NavLink to={`/signup`}>Click here</NavLink></small>

                        <div className={`d-flex flex-column`}>
                            <div className={`mb-20 d-flex flex-column`}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id='username' {...register("username")}/>
                                {errors?.username && <small className={`error`}>{errors.username.message}</small>}
                            </div>
                            <div className={`mb-20 d-flex flex-column`}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' {...register("password")}/>
                                {errors?.password && <small className={`error`}>{errors.password.message}</small>}
                            </div>
                            <div className={`mb-20 d-flex flex-column`}>
                                <button className={`btn btn-reverse-primary `}>Logout</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`d-flex ${styles.loginImage}`}>
                <img src={loginImage} alt="Logout"/>
            </div>
        </div>
    );
}

export default Login;