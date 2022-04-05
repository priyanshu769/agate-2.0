import axios from 'axios'

export const loginHandler = async (loggedInToken, email, password, dispatch, setWrongCredentials, navigate) => {
    if (!loggedInToken) {
        try{
            const loginResponse = await axios.post('https://api-agate.herokuapp.com/login', {email: email, password: password})
            console.log(loginResponse)
            if (loginResponse.data.success) {
                console.log('function working')
                dispatch({TYPE: 'set_user', PAYLOAD: loginResponse.data.user})
                dispatch({TYPE: 'set_loggedInToken', PAYLOAD: loginResponse.data.token})
                navigate('/')
            }
        } catch (error) {
            console.log('Login Failed!')
            setWrongCredentials(true)
        }
    }
}