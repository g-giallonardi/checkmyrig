const API_URL = '/api/parts'

// export async function createRigBaseBrand(brand){
//     try {
//         const response = await fetch(`${API_URL}/brand`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(brand)
//         })
//
//         if (response.ok) {
//             const newBrand = await response.json()
//             return newBrand
//         } else {
//             throw new Error('Oopsy! Something wrong happened...')
//         }
//     } catch (e){
//         throw new Error('Oopsy! Something wrong happened...')
//     }
// }

export async function fetchParts(){
    try {
        const response = await fetch(`${API_URL}`)

        if (response.ok) {
            const parts = await response.json()
            return parts
        } else {
            return('Oops! Something wrong happened...')
        }
    } catch (e){
        return('Oops! Something wrong happened...')
    }
}

export async function fetchOnePart(partId){
    try {
        const response = await fetch(`${API_URL}/${partId}`)

        if (response.ok) {
            const part = await response.json()
            return part
        } else {
            throw new Error('Oopsy! Something wrong happened...')
        }
    } catch (e){
        throw new Error('Oopsy! Something wrong happened...')
    }
}

export async function searchPartType(filterObj = {}){
    const filterArr = Array.isArray(filterObj) ? filterObj : [filterObj]
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
    try {
        const response = await fetch(`${API_URL}/type/search`, {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(filter[0])
            }
        )
        if (response.ok) {
            const parts = await response.json()
            return parts
        } else {
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
}

export async function createPart(part){
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(part)
        })

        if (response.ok) {
            const newPart = await response.json()
            return newPart
        } else {
            throw new Error('Oopsy! Something wrong happened...')
        }
    } catch (e){
        throw new Error('Oopsy! Something wrong happened...')
    }
}

export async function updatePart(part){
    const {id, ...updatedPart} = part
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPart)
    })
    if (response.ok) {
        const newModel = await response.json()
        return newModel
    } else {
        return ('Oops! Something wrong happened...')
    }
}

export async function deletePart(partId){
    try {
        const response = await fetch(`${API_URL}/${partId}`,
            {
                method:'DELETE'
            }
        )

        if (response.ok) {
            const part = await response.json()
            console.info(part)
            return part
        } else {
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
}