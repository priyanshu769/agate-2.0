import axios from 'axios'

export const loginHandler = async (
  loggedInToken,
  email,
  password,
  authDispatch,
  appDispatch,
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
        authDispatch({ TYPE: 'set_user', PAYLOAD: loginResponse.data.user })
        authDispatch({
          TYPE: 'set_loggedInToken',
          PAYLOAD: loginResponse.data.token,
        })
        loadCart(loginResponse.data.token, appDispatch)
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
export const loadCart = async(userToken, appDispatch) => {
    try{
        const cartResponse = await axios.get('https://api-agate.herokuapp.com/cart/', {headers: {Authorization: userToken}})
        if (cartResponse.data.success) {
            console.log(cartResponse.data)
            appDispatch({TYPE: 'set_cart', PAYLOAD: cartResponse.data.cartProducts})
        }
    } catch (error) {
        console.log('Some Error Occured', error)
    }
}

// Buttons

export const wishListBtnStyle = (productId, user) => {
    const productInWishlist = user?.wishlist.find(item => item._id === productId)
    if (productInWishlist) {
        return true
    } else return false
}
