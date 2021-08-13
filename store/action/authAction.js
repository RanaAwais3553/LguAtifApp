// import AsyncStorage from '@react-native-async-storage/async-storage'

import { AsyncStorage } from 'react-native'

export const LOGOUT = 'LOGOUT'

export const AUTHENTICATE = 'AUTHENTICATE'
let timer

export const authenticate = (email, userId, token, expiryTime) => {
  return (dispatch) => {
    dispatch(setLogoutTimer(expiryTime))
    dispatch({ type: AUTHENTICATE, email: email, userId: userId, token: token })
  }
}
export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAwwVy6TcMtOJZJWTSLQ1f5TOYpSuDoETo',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    )

    if (!response.ok) {
      const errorResData = await response.json()
      const errorId = errorResData.error.message
      let message = 'Some thing went wrong!!'
      if (errorId === 'EMAIL_EXISTS') {
        message = 'This email exists!!'
      }
      throw new Error(message)
    }

    const resData = await response.json()
    dispatch(
      authenticate(
        resData.email,
        resData.localId,
        resData.idToken,
        parseInt(resData.expiresIn) * 1000
      )
    )
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    )
    saveDataToStorage(
      resData.idToken,
      resData.email,
      resData.localId,
      expirationDate
    )
  }
}
export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwwVy6TcMtOJZJWTSLQ1f5TOYpSuDoETo',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    )

    if (!response.ok) {
      const errorResData = await response.json()
      const errorId = errorResData.error.message
      let message = 'Some thing went wrong!!'
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!!'
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This Password is not valid'
      }
      throw new Error(message)
    }

    const resData = await response.json()
    dispatch(
      authenticate(
        resData.email,
        resData.localId,
        resData.idToken,
        parseInt(resData.expiresIn) * 1000
      )
    )
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    )
    saveDataToStorage(
      resData.idToken,
      resData.email,
      resData.localId,
      expirationDate
    )
  }
}
export const logOut = () => {
  clearLogoutTimer()
  AsyncStorage.removeItem('userData')
  return { type: LOGOUT }
}
const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer)
  }
}
const setLogoutTimer = (expirationTime) => {
  return (dispatch) => {
    timer = setTimeout(() => {
      dispatch(logOut())
    }, expirationTime)
  }
}

const saveDataToStorage = (token, email, userId, expirationDate) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      email: email,
      token: token,
      userId: userId,
      expiryDate: expirationDate.toISOString(),
    })
  )
}
