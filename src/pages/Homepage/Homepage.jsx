import {useLoaderData} from "react-router-dom";
import { useState} from "react";
import GalleryRigs from "@/pages/Homepage/components/GalleryRigs/GalleryRigs.jsx";

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
        <div className={` flex flex-col gap-4 py-3 mx-auto align-middle`}>
                <h2 className='mb-5 font-bold text-lg'>Featured rigs</h2>
                <GalleryRigs rigs={featuredRigs} updateFilter={updateFilter} searchFilter={searchFilter}/>

                {/*<h2 className='mb-5 font-bold text-lg'>Last rigs</h2>*/}
                {/*<GalleryRigs rigs={lastRigs} updateFilter={updateFilter} searchFilter={searchFilter}/>*/}
        </div>
    )
}

export default Homepage;