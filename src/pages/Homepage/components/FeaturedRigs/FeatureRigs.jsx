import RigCard from "../RigCard/RigCard.jsx";

function FeatureRigs({ rigs }){

    return (
        <div>
            <h2>Featured rigs</h2>
            <div className={`d-flex flex-row flex-fill p-20 `}>
                {rigs.map((rig) => <RigCard key={rig._id} rig={rig}/>)}
            </div>
        </div>
    )
}

export default FeatureRigs