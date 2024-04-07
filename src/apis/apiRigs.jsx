import rigFormLoader from "../loaders/rigFormLoader.jsx";

const API_URL = '/api/rigs'

function formatFilter(filterObj){
    const filterArr = Array.isArray(filterObj) ? filterObj : [filterObj]
    console.log(Object.keys(filterObj))
    const filter = filterArr.map(
        f => {
            const keys = Object.keys(f)
            const fl = {}
            keys.forEach(key => {
                fl[key] = {$regex: f[key]}
                if(typeof f[key] === 'string'){
                    fl[key] = {...fl[key], $options: 'i'}
                }
            })
            return fl
        }
    )

    return filter
}

async function pushRigImage(image, rig){
    const uniqueFileName = 'rig_1_'+rig._id+'.'+image.name.split('.').slice(-1)
    const formData = new FormData();
    formData.append("file", image, uniqueFileName);
    try {
        const response = await fetch(`${API_URL}/image`, {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            console.log({...rig, image:uniqueFileName})
            const response = await fetch(`${API_URL}/${rig._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...rig, image:uniqueFileName})
            })
            if (response.ok) {
                return uniqueFileName
            } else {
                console.error('Error while updating rig')
                return false
            }

        } else {
            console.error('Error while updating image')
            return false
        }
    } catch (e) {
        console.error('Error:', e)
        return false
    }
}

export async function fetchRigs(searchParam = {} ){
    try {
        let URLsearchParam = null
        URLsearchParam = new URLSearchParams()
        if (Object.keys(searchParam).length > 0) {
            Object.keys(searchParam).map(
                (param) => URLsearchParam.append(param, searchParam[param] )
            )
        }

        let finalURL =  ''
        searchParam.toString() ? finalURL=API_URL+'?'+URLsearchParam.toString() : finalURL=API_URL

        const response = await fetch(`${finalURL}`)

        if (response.ok) {
            const rigs = await response.json()
            return rigs
        } else {
            return('Oops! Something wrong happened...')
        }
    } catch (e){
        return('Oops! Something wrong happened...')
    }
}

export async function fetchOneRig(rigId){
    try {
        const response = await fetch(`${API_URL}/${rigId}`)

        if (response.ok) {
            const rig = await response.json()
            return rig
        } else {
            return('Oops! Something wrong happened...')
        }
    } catch (e){
        return('Oops! Something wrong happened...')
    }
}

export async function createRig(rig){
    const { image } = rig
    const bodyPayload = {...rig, image:image && true}
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyPayload)
        })

        if (response.ok) {
            let newRig = await response.json()
            if( image && typeof image === 'object') {
                const pushedImage = pushRigImage(image[0], {...newRig,model:{_id:rig.model._id},brand:{_id:rig.brand._id}})
                if (pushedImage) {
                    return {...newRig, image:pushedImage}
                } else {
                    return ('Something bad happened while uploading image')
                }
            }
            return newRig
        } else {
            return ('Something bad happened while creating image')
        }
    } catch (e){
       return ('[ERROR]', e)
    }
}

export async function updateRig(rig){
    const {id, image, ...updatedRig} = rig
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...updatedRig,
            model :{_id: updatedRig.model}
        })
    })
    if (response.ok) {
        const newRig = await response.json()
        if( image && typeof image === 'object') {
                const pushedImage = pushRigImage(image[0], {
                    ...newRig,
                    _id:id,
                    model :{_id: updatedRig.model},
                    brand:{
                        _id:rig.brand._id
                    }
                })
                if (pushedImage) {
                    return {...newRig, image:pushedImage}
                } else {
                    return ('Something bad happened while uploading image')
                }
            }
            return newRig
    } else {
        return ('Oops! Something wrong happened...')
    }
}

export async function deleteRig(rigId){
    try {
        const response = await fetch(`${API_URL}/${rigId}`,
            {
                method:'DELETE'
            }
        )

        if (response.ok) {
            const rig = await response.json()
            return rig
        } else {
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
}

export async function searchRigModel(filterObj){
    const filter = formatFilter(filterObj)
    try {
        const response = await fetch(`${API_URL}/models/search`, {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(filter[0])
            }
        )
        if (response.ok) {
            const models = await response.json()
            return models
        } else {
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
}
export async function createRigBaseBrand(brand){
    try {
        const response = await fetch(`${API_URL}/brand`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(brand)
        })

        if (response.ok) {
            const newBrand = await response.json()
            return newBrand
        } else {
            throw new Error('Oopsy! Something wrong happened...')
        }
    } catch (e){
        throw new Error('Oopsy! Something wrong happened...')
    }
}

export async function fetchRigModels(){
    try {
        const response = await fetch(`${API_URL}/models`)

        if (response.ok) {
            const rigModels = await response.json()
            console.log('loader',rigModels)
            return rigModels
        } else {
            return('Oops! Something wrong happened...')
        }
    } catch (e){
        console.error(e)
        return('Oopsy! Something wrong happened...')
    }
}

export async function fetchOneRigModel(rigId){
    try {
        const response = await fetch(`${API_URL}/models/${rigId}`)

        if (response.ok) {
            const rigModel = await response.json()
            return rigModel
        } else {
            throw new Error('Oopsy! Something wrong happened...')
        }
    } catch (e){
        throw new Error('Oopsy! Something wrong happened...')
    }
}

export async function createRigModel(model){
    try {
        const response = await fetch(`${API_URL}/models`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        })

        if (response.ok) {
            const newModel = await response.json()
            return newModel
        } else {
            throw new Error('Oopsy! Something wrong happened...')
        }
    } catch (e){
        throw new Error('Oopsy! Something wrong happened...')
    }
}

export async function updateRigModel(model){
    const {id, ...updatedModel} = model
    const response = await fetch(`${API_URL}/models/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedModel)
    })
    if (response.ok) {
        const newModel = await response.json()
        return newModel
    } else {
        return ('Oops! Something wrong happened...')
    }
}

export async function deleteRigModel(rigId){
    try {
        const response = await fetch(`${API_URL}/models/${rigId}`,
            {
                method:'DELETE'
            }
        )

        if (response.ok) {
            const rigModel = await response.json()
            return rigModel
        } else {
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
}