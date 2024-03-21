import styles from './RigCard.module.scss'

function RigCard({ rig }) {

    const energyIcon = rig.model?.energy === 'electric' ? <i className="fas fa-bolt"></i> : <i className="fas fa-gas-pump"></i>

    return (
        <div className={`d-flex flex-column flex-fill card ${styles.rigCard} mb-20 mr-15`}>
            <div className={`d-flex flex-row`}>
                <div>
                    <img src={`/uploads/${rig.image}`} alt={rig.name}/>
                    <div className={`${styles.rigCardShadow}`}></div>
                    <div className={`${styles.likeIcon}`}>
                        <small>{rig.like} </small> <i className={`far fa-heart`}> </i>
                    </div>

                </div>
                <div className={`d-flex flex-column flex-fill ${styles.rigCardHeader}`}>
                    <h3>{rig.name}</h3>
                    <h4>{rig.model.brand.name} - {rig.model.name}</h4>
                    <div className={`d-flex flex-row`}>
                        {rig.model.scale && <span className={styles.rigCardTag}><i className="fas fa-ruler"></i> {rig.model.scale}</span> }
                        {rig.model.type && <span className={styles.rigCardTag}><i className="fas fa-flag-checkered"></i> {rig.model.type}</span> }
                        {rig.model.energy && <span className={styles.rigCardTag}>{energyIcon} {rig.model.energy}</span>}

                    </div>
                </div>
            </div>


        </div>
    );
}

export default RigCard;