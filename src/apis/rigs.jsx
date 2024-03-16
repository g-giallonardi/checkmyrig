const API_URL = '/api/rigs'
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
            return rigModels
        } else {
            throw new Error('Oopsy! Something wrong happened...')
        }
    } catch (e){
        throw new Error('Oopsy! Something wrong happened...')
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
            console.info(rigModel)
            return rigModel
        } else {
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
}