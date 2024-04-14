import RigCard from "../RigCard/RigCard.jsx";
import Search from "../Search/Search.jsx";

function FeatureRigs({ rigs, updateFilter,searchFilter }){

    return (
        <div >
            <Search updateFilter={updateFilter} searchFilter={searchFilter}/>
            <h2 className={`mb-20`}><i className="fas fa-star"></i> Featured rigs</h2>
            <div className={`d-flex flex-row flex-fill flex-wrap`}>
                {rigs.filter((r)=>{
                    if(searchFilter.scale) return r.model.scale === searchFilter.scale
                    else return true
                }).filter((r)=>{
                    if(searchFilter.type) return r.model.type === searchFilter.type
                    else return true
                }).filter((r)=>{
                    if(searchFilter.energy) return r.model.energy === searchFilter.energy
                    else return true
                })
                    .map((rig) => <RigCard key={rig._id} rig={rig} updateFilter={updateFilter} searchFilter={searchFilter}  />)}
            </div>
        </div>
    )
}

export default FeatureRigs