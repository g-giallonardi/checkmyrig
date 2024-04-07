function SignUp(){
    return (
        <div>
            <h3>Sign Up</h3>
            <form>
                <div className={`d-flex flex-column`}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username'/>

                    <label htmlFor="email">E-mail</label>
                    <input type="text" id='email'/>

                    <label htmlFor="password">Password</label>
                    <input type="text" id='password'/>

                    <label htmlFor="passwordConfirmation">Confirm your password</label>
                    <input type="text" id='passwordConfirmation'/>
                </div>
            </form>
        </div>
);
}

export default SignUp;