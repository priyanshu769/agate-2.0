export const InitialAuth = {
    user: null,
    loggedInToken: null
}

export const AuthReducer = (state, action) => {
    console.log('auth dispatch triggered')
    switch (action.TYPE) {
        case 'set_user':
            return {...state, user: action.PAYLOAD}
        case 'set_loggedInToken':
            return {...state, loggedInToken: action.PAYLOAD}
            default:
                break
    }
    return {state}
}