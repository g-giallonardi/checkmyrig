import styles from "./Header.module.scss"
import logo from "../../assets/images/logo.png"
import {Navigate, NavLink} from "react-router-dom";

function Header() {
    return (
        <header onClick={() => Navigate({to:'/'}) } className={`${styles.header} d-flex flex-row align-items-center`}>

            <div className="flex-fill">
                <NavLink to={'/'} >
                    <img src={logo} alt="logo cookchef"/>
                </ NavLink>
            </div>
            <ul className={styles.headerList}>
                <NavLink to={'/admin'} >
                    <button className="btn btn-reverse-primary mr-5">
                        <i className="fas fa-plug mr-5"></i>
                        <span>Admin panel</span>
                    </button>
                </NavLink>
                <NavLink to={'/'} >
                    <button className="btn btn-primary mr-5">
                        <i className="fas fa-plus-circle mr-5"></i>
                        <span>Log out</span>
                    </button>
                </NavLink>

                <NavLink to={'/'} >
                    <button className="btn btn-primary">
                        <i className="fas fa-sign-in-alt mr-5"></i>
                        <span>Log in</span>
                    </button>
                </NavLink>
            </ul>
        </header>
    )
}

export default Header;