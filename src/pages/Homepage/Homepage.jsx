import {useLoaderData} from "react-router-dom";
import { useState} from "react";
import styles from './Homepage.module.scss'
import FeatureRigs from "./components/FeaturedRigs/FeatureRigs.jsx";
import LastRigs from "./components/LastRigs/LastRigs.jsx";

function Homepage(){
    const { featuredRigs, lastRigs }  = useLoaderData()
    const [ searchFilter, setSearchFilter ] =  useState({scale:'', type:'', energy:''})

    console.log(featuredRigs)
    function updateFilter(type, value){
        const currentTypeValue = searchFilter[type]
        if(currentTypeValue === value) setSearchFilter(prevState => ({...prevState, [type]: '' }))
        else setSearchFilter(prevState => ({...prevState, [type]: value }))
    }

    return (
        <div className={` d-flex flex-column ${styles.container}`}>
            <div className={`p-20 underlined underlinedActive`}>
                <FeatureRigs rigs={featuredRigs} updateFilter={updateFilter} searchFilter={searchFilter}/>
            </div>
            <div className={`p-20 underlined underlinedActive`}>
                <LastRigs rigs={lastRigs} updateFilter={updateFilter} searchFilter={searchFilter}/>
            </div>
        </div>
    )
}

export default Homepage;