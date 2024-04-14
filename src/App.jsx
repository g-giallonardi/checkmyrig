import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import {createContext, Suspense, useState} from "react";
import {randomCarName} from "./assets/datas/randomCarName.js";
import {randomRigModel} from "./assets/datas/randomRigModel.js";
import {createRig} from "./apis/apiRigs.jsx";
import Login from "./pages/Login/Login.jsx";
import {useUser} from "./hooks/useUser.jsx";
import { UserAuth} from "./appContext.js";

function App() {
    // useEffect( () =>{
    //
    //     function buildRandomRig(){
    //         const idxNameRdm = Math.floor(Math.random() * (randomCarName.length-1));
    //         const idxRigRdm = Math.floor(Math.random() * (randomRigModel.length-1));
    //         const {brand, _id} = randomRigModel[idxRigRdm]
    //         const rig = {name: randomCarName[idxNameRdm], model: {_id}, brand }
    //         console.log(rig)
    //         createRig(rig)
    //     }
    //     console.log("Loading more data...");
    //     let i = 0;
    //     while (i < 50) {
    //         setTimeout(buildRandomRig,500)
    //
    //         i += 1;
    //     }
    //
    //     console.log("More data loaded!");
    // },[])

    const initState = {authenticated:false, user:{}}
    const [appAuth, setAppAuth] = useState(initState)

    return (
        <UserAuth.Provider value={ { appAuth, setAppAuth } } >
            <div className={`d-flex flex-fill justify-content-center appContainer `}>
                <Header />
                <div className={`d-flex flex-fill justify-content-center mainContainer`}>
                    <Suspense fallback={'Loading...'}>
                        <Outlet context={ {appAuth, setAppAuth} }/>
                    </Suspense>
                </div>
            </div>
        </UserAuth.Provider>
    )
}

export default App
