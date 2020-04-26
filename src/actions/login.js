export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (nickname) => {
    return {
        type: LOGIN,
        payload: nickname
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: ''
    }
}