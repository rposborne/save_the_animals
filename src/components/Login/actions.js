export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const SENDING_REQUEST = 'SENDING_REQUEST'
export const APPLY_JWT = 'APPLY_JWT'
export const SET_AUTH = 'SET_AUTH'
export const REQUEST_ERROR = 'REQUEST_ERROR'

export function startLoginAction(credentials){
  return {
    type: LOGIN_REQUEST,
    credentials
  }
}

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export function sendingRequest (sending) {
  return {type: SENDING_REQUEST, sending}
}

/**
 * Sets the authentication state of the application
 * @param  {string} jwt JWT Token from server
 */
export function setAuthState (jwt) {
  return {type: SET_AUTH, jwt}
}

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError (error) {
  return {type: REQUEST_ERROR, error}
}