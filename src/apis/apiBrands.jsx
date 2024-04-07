const API_URL = '/api/brands'



export async function fetchOneBrand(brandId){
    try {
        const response = await fetch(`${API_URL}/${brandId}`)
        if (response.ok) {
            const brand = await response.json()
            return brand
        } else {
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
}

export async function searchBrand(filterObj){
    try {
        const response = await fetch(`${API_URL}/search`, {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(filterObj)
            }
        )
        if (response.ok) {
            const brands = await response.json()
            return brands
        } else {
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
}

export async function fetchBrands(){
    try {
        const response = await fetch(API_URL)
        if (response.ok) {
            const brands = await response.json()
            return brands
        } else {
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
}
export async function createBrand(brand){
    try {
        const response = await fetch(API_URL, {
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
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
 }
export async function updateBrand(brand){
    const {id, ...updatedBrand} = brand

    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBrand)
    })
    if (response.ok) {
        const newBrand = await response.json()
        return newBrand
    } else {
        return ('Oops! Something wrong happened...')
    }
}

export async function deleteBrand(brandId){
    try {
        const response = await fetch(`${API_URL}/${brandId}`,{
            method:'DELETE'
        })
        if (response.ok) {
            return true
        } else {
            return('Oopsy! Something wrong happened...')
        }
    } catch (e){
        return('Oopsy! Something wrong happened...')
    }
}