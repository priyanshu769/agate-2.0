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
export const loadCart = async (userToken, appDispatch) => {
  try {
    const cartResponse = await axios.get(
      'https://api-agate.herokuapp.com/cart/',
      { headers: { Authorization: userToken } },
    )
    if (cartResponse.data.success) {
      appDispatch({ TYPE: 'set_cart', PAYLOAD: cartResponse.data.cartProducts })
    }
  } catch (error) {
    console.log('Some Error Occured', error)
  }
}

export const addTocartHandle = async (
  productId,
  userToken,
  appDispatch,
  navigate,
) => {
  try {
    if (userToken) {
      const addToCartResponse = await axios.post(
        `https://api-agate.herokuapp.com/cart/${productId}/add`,
        {},
        { headers: { Authorization: userToken } },
      )
      if (addToCartResponse.data.success) {
        loadCart(userToken, appDispatch)
      } else console.log('Unable to add to Cart.')
    } else navigate('/login')
  } catch (error) {
    console.log('Unable to add to Cart', error)
  }
}

export const removeFromCartHandle = async (
  productId,
  userToken,
  appDispatch,
  navigate,
) => {
  console.log('removeFromCartHandle fired 1')
  try {
    if (userToken) {
      console.log('removeFromCartHandle fired 2')
      const removeFromCartResponse = await axios.post(
        `https://api-agate.herokuapp.com/cart/${productId}/remove`,
        {},
        { headers: { Authorization: userToken } },
        )
        console.log(removeFromCartResponse.data)
        if (removeFromCartResponse.data.success) {
        console.log('removeFromCartHandle fired 3')
        loadCart(userToken, appDispatch)
      }
    } else navigate('/login')
  } catch (error) {
    console.log('Some Error Occured', error)
  }
}

// Buttons

export const wishListBtnStyle = (productId, user) => {
  const productInWishlist = user?.wishlist.find(
    (item) => item._id === productId,
  )
  if (productInWishlist) {
    return true
  } else return false
}

export const addToCarBtnStyle = (productId, cart) => {
  const productInCart = cart?.find((item) => item.product._id === productId)
  if (productInCart) {
    return 'Already in Cart'
  } else return 'Add To Cart'
}
