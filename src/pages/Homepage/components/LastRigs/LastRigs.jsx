import RigCard from "../RigCard/RigCard.jsx";

function LastRigs({rigs}){
    return (
        <div>
            <h2>Last rigs</h2>
            <div className={`d-flex flex-row flex-fill p-20 `}>
                {rigs.map((rig) => <RigCard key={rig._id} rig={rig}/>)}
            </div>
        </div>
    )
}

export default LastRigs