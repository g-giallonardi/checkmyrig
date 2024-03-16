const API_URL = '/api/users'

export async function fetchUsers(){
    try {
        const response = await fetch(API_URL)

        if (response.ok) {
            const users = await response.json()
            return users
        } else {
            throw new Error('Oopsy! Something wrong happened...')
        }
    } catch (e){
        throw new Error('Oopsy! Something wrong happened...')
    }
}
export async function createUser(user){
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (response.ok) {
            const newUser = await response.json()
            return newUser
        } else {
            throw new Error('Oopsy! Something wrong happened...')
        }
    } catch (e){
        throw new Error('Oopsy! Something wrong happened...')
    }
}