import RigCard from "../RigCard/RigCard.jsx";
import Search from "../Search/Search.jsx";

function GalleryRigs({ rigs, updateFilter,searchFilter }){

    return (
        <div >
            <div className={`flex flex-row flex-wrap gap-4 px-3`}>
                {rigs.map((rig) => <RigCard key={rig._id} rig={rig} updateFilter={updateFilter} searchFilter={searchFilter}  />)}
            </div>
        </div>
    )
}

export default GalleryRigs