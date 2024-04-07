import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import {Suspense, useEffect, useState} from "react";
import {randomCarName} from "./assets/datas/randomCarName.js";
import {randomRigModel} from "./assets/datas/randomRigModel.js";
import {createRig} from "./apis/apiRigs.jsx";

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
    //         // setTimeout(buildRandomRig,2000)
    //
    //         i += 1;
    //     }
    //
    //     console.log("More data loaded!");
    // },[])

    return (
        <div className={`d-flex flex-fill justify-content-center appContainer `}>
            <Header/>
            <Suspense fallback={'Loading...'} >
                    <Outlet/>
            </Suspense>
            {/*<Footer/>*/}
        </div>
    )
}

export default App
