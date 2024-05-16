import {useState} from "react";
import {cn} from "@/lib/utils.js";

function RigCard({ rig, updateFilter,searchFilter }) {
    const [isHover, setIsOver] = useState(false)
    const energyIcon = rig.model?.energy === 'electric' ? <i className="fas fa-bolt"></i> : <i className="fas fa-gas-pump"></i>

    function handleLike(){
        console.log('Like button clicked');
    }

    function handleHoverOn(){
        setIsOver(true)
    }

    function handleHoverOff(){
        setIsOver(false)
    }

    return (
            <div className={`flex flex-col relative w-56 h-56 rounded-lg overflow-hidden`} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
                <img className='object-fill' src={`/images/rigs/${rig.image}`} alt={rig.name}/>

                <div className='absolute end-4 top-3 bg-muted/50 rounded-md px-1 backdrop-blur'>
                    {rig.like} <i className={`far fa-heart`} onClick={handleLike}/>
                </div>

                <div className={cn('flex flex-col flex-initial w-full absolute bottom-0 left-0 transition-all' , !isHover && 'translate-y-6' )}>
                    <div
                        className='absolute bottom-0 h-full w-full bg-bottom bg-[length:100%_100%]  bg-no-repeat bg-gradient-to-t from-slate-900 to-slate-900/40'>
                    </div>
                    <div className='px-1 z-10 py-3 px-2 '>
                        <span className='text-primary font-bold '>{rig.name}</span>
                        <span className='text-sm line-clamp-1'> {rig.model.brand.name} - {rig.model.name}</span>
                        <div className={cn('flex flex-row font-light text-xs gap-2 transition-all', !isHover && 'opacity-0' )}>
                            {rig.model.scale
                                && <span className='rounded bg-muted text-muted-foreground'
                                    // className={`${searchFilter.scale === rig.model.scale ?  : ''}`}
                                         onClick={() => updateFilter('scale', rig.model.scale)}>
                                        <i className="fas fa-ruler mr-1"></i>{rig.model.scale}
                                </span>
                            }
                            {rig.model.type
                                && <span className='rounded px-1 bg-muted text-muted-foreground'
                                    // className={` ${searchFilter.type === rig.model.type ? : ''}`}
                                         onClick={() => updateFilter('type', rig.model.type)}>
                                    <i className="fas fa-flag-checkered mr-1"></i> {rig.model.type}
                                </span>
                            }

                            {rig.model.energy
                                && <span className='rounded px-1 bg-muted text-muted-foreground'
                                         onClick={() => updateFilter('energy', rig.model.energy)}>
                                    {energyIcon} {rig.model.energy}
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default RigCard;