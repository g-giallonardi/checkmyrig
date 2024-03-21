import {Outlet} from "react-router-dom";
import AdminMenu from "./components/AdminMenu/AdminMenu.jsx";
import AdminBrands from "./components/AdminBrands/AdminBrands.jsx";
import styles from './Admin.module.scss'
import {Suspense} from "react";
function Admin(){
    return (
        <div className={`d-flex flex-row flex-fill  ${styles.adminContent} `}>
            <div className={`d-flex flex-fill p-30 ${styles.adminPanel} mr-15`}>
                <AdminMenu />
            </div>
            <div className={`d-flex flex-fill m-20`}>
                <Suspense fallback={'Loading...'} >
                    <Outlet/>
                </Suspense>
            </div>
        </div>
    )
}

export default Admin;