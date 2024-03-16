import {Suspense, useEffect, useState} from "react";
import { Outlet} from "react-router-dom";
import Loading from "../../../../components/Loading/Loading.jsx";

function AdminRigModels(){

    return(
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20`}>Rigs models administration</h2>
            <div className={`p-30`}>
                <Suspense fallback={<Loading/>}>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
    )
}

export default AdminRigModels;