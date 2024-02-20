import styles from "./Header.module.scss"
import logo from "../assets/images/cookchef.png"
import {useState} from "react";
import HeaderMenuXs from "./HeaderMenuXs.jsx";

function Header() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>

            <div className="flex-fill">
                <img src={logo} alt="logo cookchef"/>
            </div>
            <ul className={styles.headerList}>
                <button className="mr-5 btn btn-reverse-primary">
                    <i className="fas mr-5 fa-bookmark"></i>
                <span>Wishlist</span>
                </button>
                <button className="btn btn-primary">
                    <i className="fas fa-sign-in-alt mr-5"></i>
                    <span>Log in</span>
                </button>
            </ul>
            <i onClick={() => setShowMenu(!showMenu)} className={`fas fa-bars ${styles.headerXs}`}></i>
            {showMenu &&
                <>
                    <div onClick={() => setShowMenu(!showMenu)} className='layer'></div>
                    <HeaderMenuXs/>
                </>
            }
        </header>
    )
}

export default Header;