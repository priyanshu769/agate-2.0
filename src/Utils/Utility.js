import axios from 'axios'

export const loginHandler = async (
  loggedInToken,
  email,
  password,
  dispatch,
  setWrongCredentials,
  navigate,
) => {
  if (!loggedInToken) {
    try {
      const loginResponse = await axios.post(
        'https://api-agate.herokuapp.com/login',
        { email: email, password: password },
      )
      console.log(loginResponse)
      if (loginResponse.data.success) {
        localStorage.setItem(
          'loggedInAgate',
          JSON.stringify({ token: loginResponse.data.token }),
        )
        dispatch({ TYPE: 'set_user', PAYLOAD: loginResponse.data.user })
        dispatch({
          TYPE: 'set_loggedInToken',
          PAYLOAD: loginResponse.data.token,
        })
        navigate('/')
      }
    } catch (error) {
      console.log('Login Failed!', error)
      setWrongCredentials(true)
    }
  }
}

export const loadUser = async (userToken, authDispatch) => {
  try {
    const userResponse = await axios.get(
      'https://api-agate.herokuapp.com/user',
      { headers: { Authorization: userToken } },
    )
    if (userResponse.data.success) {
      authDispatch({ TYPE: 'set_user', PAYLOAD: userResponse.data.user })
    }
  } catch (error) {
    console.log('Error Occured', error)
  }
}

// Buttons

export const wishListBtnStyle = (productId, user) => {
    const productInWishlist = user?.wishlist.find(item => item._id === productId)
    if (productInWishlist) {
        return true
    } else return false
}
