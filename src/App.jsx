import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import {createContext, Suspense, useState} from "react";
import {randomCarName} from "./assets/datas/randomCarName.js";
import {randomRigModel} from "./assets/datas/randomRigModel.js";
import {createRig} from "./apis/apiRigs.jsx";
import Login from "./pages/Login/Login.jsx";
import {useUser} from "./hooks/useUser.jsx";
import { UserAuth} from "./appContext.js";
import Rig from "@/pages/Rig/Rig.jsx";

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
            <Header />
            <div className={`flex flex-col bg-background align-items-center min-h-screen h-full`}>
                <div className='flex flex-col lg:max-w-5xl md:max-w-4xl sm:max-w-md max-w-md mx-8' >
                    <Suspense fallback={'Loading...'}>
                        <Outlet context={ {appAuth, setAppAuth} }/>
                    </Suspense>
                </div>
            </div>
        </UserAuth.Provider>
    )
}

export default App
