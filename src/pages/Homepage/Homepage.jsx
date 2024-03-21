import FeatureRigs from "./components/FeaturedRigs/FeatureRigs.jsx";
import {useLoaderData} from "react-router-dom";
import LastRigs from "./components/LastRigs/LastRigs.jsx";
import {useState} from "react";
import Search from "./components/Search/Search.jsx";

function Homepage(){
    const { featuredRigs, lastRigs }  = useLoaderData()
    const [ searchValue, setSearchValue ] =  useState('')
    return (
        <div className={` d-flex flex-fill justify-content-center`}>
            <Search setSearchValue={searchValue}/>
            <div className={`p-20 underlined underlinedActive`}>
                <FeatureRigs rigs={featuredRigs}/>
            </div>
            <div className={`p-20 underlined underlinedActive`}>
                <LastRigs rigs={lastRigs}/>
            </div>
        </div>
    )
}

export default Homepage;