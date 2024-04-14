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
        <div className={`d-flex flex-row  ${styles.signUpCard} justify-content-center align-items-center`}>
            <div className={`d-flex flex-column ${styles.signUpForm} `}>
                <div className={`d-flex flex-column`}>
                    <h2>Sign Up</h2>
                </div>
                <div className={`d-flex flex-column`}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {globalError && <p><small className={`error mb-20`}>{globalError}</small></p>}
                        <small className={`mb-20`}>Already have an account?  <NavLink to={`/login`}>Click here</NavLink></small>
                        <div className={`d-flex flex-column`}>
                            <div className={`mb-20 d-flex flex-column`}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id='username' {...register("username")}/>
                                {errors?.username && <small className={`error`}>{errors.username.message}</small>}
                            </div>
                            <div className={`mb-20 d-flex flex-column`}>
                                <label htmlFor="email">E-mail</label>
                                <input type="text" id='email' {...register("email")}/>
                                {errors?.email && <small className={`error`}>{errors.email.message}</small>}
                            </div>
                            <div className={`mb-20 d-flex flex-column`}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' {...register("password")}/>
                                {errors?.password && <small className={`error`}>{errors.password.message}</small>}
                            </div>
                            <div className={`mb-20 d-flex flex-column`}>
                                <label htmlFor="passwordConfirmation">Confirm your password</label>
                                <input type="password" id='passwordConfirmation' {...register("passwordConfirmation")}/>
                                {errors?.passwordConfirmation && <small className={`error`}>{errors.passwordConfirmation.message}</small>}
                            </div>
                            <div className={`mb-20 d-flex flex-column`}>
                                <button className={`btn btn-reverse-primary `}>Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`d-flex ${styles.signUpImage}`}>
                <img src={signUpImage} alt="Logout"/>
            </div>
        </div>
    );
}

export default SignUp;