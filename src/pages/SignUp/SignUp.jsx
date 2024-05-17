import styles from './SignUp.module.scss'
import signUpImage from '../../assets/images/signup.jpg'
import {NavLink, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form"
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {createUser} from "../../apis/apiUsers.jsx";
import {useState} from "react";

function SignUp(){

    const redirect = useNavigate()
    const [globalError, setGlobalError] = useState('')

    const initialValues = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    };

    const userSchema = Yup.object({
        username: Yup.string()
            .required("Required field"),
        email: Yup.string()
            .email('Please enter a valid e-mail address')
            .required("Required field"),
        password: Yup.string()
            .required("Required field")
            .min(8,'Password should contains at least 8 characters'),
        passwordConfirmation: Yup.string()
            .required("Required field")
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
        const { passwordConfirmation, ...newUserInfo} = data
        const response = await createUser(newUserInfo)
        response.code === 200 ? redirect('/') : setGlobalError(response.error)
    }

    return (
        <div className="flex flex-row justify-items-center align-items-center
                    rounded-lg border border-accent bg-muted my-8
                    bg-[url('/src/assets/images/signup.jpg')]
                    bg-cover
                    ">
            <div className='flex flex-col align-items-center backdrop-blur bg-muted/40 rounded-lg border border-accent m-10  p-5 '>
                <div className={`flex flex-col`}>
                    <span className='font-bold text-lg'> Sign Up</span>
                </div>
                <div className='flex flex-col mx-4 h-full'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {globalError && <p><small className={`error mb-20`}>{globalError}</small></p>}
                        <span className='font-light text-sm'>
                            Already have an account?
                            <NavLink to={`/login`}>
                                    <span className='text-primary'> ↗ Click here</span>
                            </NavLink>
                        </span>

                        <div className={`flex flex-col mt-4`}>
                            <div className={`mb-5 flex flex-col`}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id=' username' {...register("username")}/>
                                {errors?.username && <small className={`error`}>{errors.username.message}</small>}
                            </div>
                            <div className={`mb-5 flex flex-col`}>
                                <label htmlFor="email">E-mail</label>
                                <input type="text" id=' email' {...register("email")}/>
                                {errors?.email && <small className={`error`}>{errors.email.message}</small>}
                            </div>
                            <div className={`mb-5 flex flex-col`}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id=' password' {...register("password")}/>
                                {errors?.password && <small className={`error`}>{errors.password.message}</small>}
                            </div>
                            <div className={`mb-5 flex flex-col`}>
                                <label htmlFor="passwordConfirmation">Confirm your password</label>
                                <input type="password" id=' passwordConfirmation' {...register("passwordConfirmation")}/>
                                {errors?.passwordConfirmation &&
                                    <small className={`error`}>{errors.passwordConfirmation.message}</small>}
                            </div>
                            <div className={`mb-5 flex flex-col`}>
                                <button className={`rounded-md border-accent border-primary-foreground bg-primary text-primary-foreground mx-3`}>Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;