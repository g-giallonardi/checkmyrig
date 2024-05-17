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
        <div className="flex flex-row justify-items-center align-items-center
                    rounded-lg border border-accent bg-muted my-8
                    bg-[url('/src/assets/images/login.png')]
                    bg-cover
                    ">

            <div className='flex flex-col align-items-center backdrop-blur bg-muted/40 rounded-lg border border-accent m-10  p-5 '>
                <div>
                    <span className='font-bold text-lg'>Sign In</span>
                </div>
                <div className='flex flex-col mx-4 h-full'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {globalError && <p><small className={`error mb-20`}>{globalError}</small></p>}
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <span className='font-light text-sm'>
                            Don't have account yet?
                            <NavLink to={`/signup`}><span className='text-primary'> ↗ Click here</span></NavLink>
                        </span>

                        <div className={`flex flex-col mt-4`}>
                            <div className={`mb-5 flex flex-col`}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id='username' {...register("username")}/>
                                {errors?.username && <small className={`error`}>{errors.username.message}</small>}
                            </div>
                            <div className={`mb-5 flex flex-col`}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' {...register("password")}/>
                                {errors?.password && <small className={`error`}>{errors.password.message}</small>}
                            </div>
                            <div className={`mb-20 flex flex-col`}>
                                <button className={`rounded-md border-accent border-primary-foreground bg-primary text-primary-foreground mx-3`}>Log in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;