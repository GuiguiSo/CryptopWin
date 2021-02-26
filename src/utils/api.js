export const getUsers = async () => {
    let response = await fetch('http://localhost:3001/users', {
        method:'GET'
    })
    let users = response.json()
    return users
}   

export const postUser = async (user) => {
    let response = await fetch('http://localhost:3001/users',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    })
    let UserCreated = await response.json()
    return UserCreated
}


export const getCasinos = async () => {
    let response = await fetch('http://localhost:3001/casinos', {
        method:'GET'
    })
    let casinos = response.json()
    return casinos
}   

export const getCasinosid = async () => {
    let response = await fetch('http://localhost:3001/casinos/:id', {
        method:'GET'
    })
    let casinos = response.json()
    return casinos
}   

