import { LOGIN, LOGOUT } from "../actions/login"


const initialState = {
    nickname: '',
    loggedIn: false
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case (LOGIN):
            return({
                nickname: action.payload,
                loggedIn: true
            })
            case (LOGOUT): 
            return (
                {
                    nickname: '',
                    loggedIn: action.payload
                }
            )

        default:
            return {
                state
            }
    }
}