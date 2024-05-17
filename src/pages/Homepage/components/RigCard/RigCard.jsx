import {useState} from "react";
import {cn} from "@/lib/utils.js";
import {NavLink} from "react-router-dom";

function RigCard({ rig, updateFilter,searchFilter }) {
    const [isHover, setIsOver] = useState(false)

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
            <div className={`flex flex-col h-full relative  rounded-lg overflow-hidden 
                border border-accent aspect-square
                lg:w-1/5 md:w-1/3`}
                 onMouseEnter={handleHoverOn}
                 onMouseLeave={handleHoverOff}>
                <img className='h-full' src={`/images/rigs/${rig.image}`} alt={rig.name}/>

                <div className='absolute end-4 top-3 bg-muted/50 rounded-md px-1 backdrop-blur text-md md:text-sm lg:text-x'>
                    {rig.like} <i className={`far fa-heart`} onClick={handleLike}/>
                </div>

                <div className={cn('flex flex-col  w-full absolute bottom-0 left-0 transition-all' , !isHover && 'md:translate-y-3  lg:translate-y-6' )}>
                    <div
                        className='absolute bottom-0 h-full w-full bg-bottom bg-[length:100%_100%]  bg-no-repeat bg-gradient-to-t from-slate-900 to-slate-900/40'>
                    </div>
                    <div className='px-1 z-10 py-3 px-2 '>
                        <NavLink to={`/rig/${rig._id}`}>
                            <span className='text-primary font-bold '>{rig.name}</span>
                        </NavLink>
                        <span className='text-md md:text-sm lg:text-xs line-clamp-1'> {rig.model.brand.name} - {rig.model.name}</span>
                        <div className={cn('flex flex-row font-light text-xs gap-1', !isHover && 'md:opacity-0' )}>
                            {rig.model.scale
                                && <span className='rounded bg-muted text-muted-foreground'
                                         onClick={() => updateFilter('scale', rig.model.scale)}>
                                        {rig.model.scale}
                                </span>
                            }
                            {rig.model.type
                                && <span className='rounded px-1 bg-muted text-muted-foreground'
                                    // className={` ${searchFilter.type === rig.model.type ? : ''}`}
                                         onClick={() => updateFilter('type', rig.model.type)}>
                                    {rig.model.type}
                                </span>
                            }

                            {rig.model.energy
                                && <span className='rounded px-1 bg-muted text-muted-foreground'
                                         onClick={() => updateFilter('energy', rig.model.energy)}>
                                    {rig.model.energy}
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default RigCard;