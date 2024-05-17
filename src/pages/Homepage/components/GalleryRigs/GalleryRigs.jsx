import RigCard from "../RigCard/RigCard.jsx";

function GalleryRigs({ rigs, updateFilter,searchFilter }){

    return (
        <div className={`flex flex-row flex-wrap gap-3 justify-center`} >
            {rigs.map((rig) => <RigCard key={rig._id} rig={rig} updateFilter={updateFilter} searchFilter={searchFilter}  />)}
        </div>
    )
}

export default GalleryRigs