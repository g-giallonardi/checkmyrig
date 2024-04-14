import Cookies from 'js-cookie'
const API_URL = '/api/users'

export async function authUsers(user){
    try {
        const response = await fetch(`${API_URL}/auth`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (response.ok) {
            const result = await response.json()
            return {code: 200, result}
        } else {
            return {code: response.status, result: await response.json()}
        }
    } catch (e){
        return {code: 400, result: 'Oops! Something wrong happened...'}
    }
}

export async function checkAuth(){

    const response = await fetch(`${API_URL}/auth/me`,{
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })

    const auth = await response.json()
    return auth
}

export async function fetchUsers(){
    try {
        const response = await fetch(API_URL)

        if (response.ok) {
            const users = await response.json()
            return users
        } else {
            return('Oops! Something wrong happened...')
        }
    } catch (e){
        return('Oops! Something wrong happened...')
    }
}

export async function createUser(user){
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (response.ok) {
            let newUser = await response.json()
            newUser = {...newUser, code:200}
            return newUser
        }
        else if (response.status === 409) {
            return {code:response.status, error: 'User/e-mail already exists'}
        } else {
            throw new Error('Oopsy! Something wrong happened...')
        }
}