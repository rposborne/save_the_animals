import { delay } from 'redux-saga'
import { put, takeEvery, all, take, race, call } from 'redux-saga/effects'
import {
  LOGIN_REQUEST,
  setAuthState
} from './actions'

const Auth = {
  login: (credentials) => {

    const request = new Request("http://localhost:3000/api/auth.json", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(credentials)
    });

    return fetch(request)
      .then(function(response) {
        // Convert to JSON
        return response.json();
      })
  }
}


/**
 * Log in saga
 */
export function *loginFlow () {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    let request = yield take(LOGIN_REQUEST)
    console.log('request', request);

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    let winner = yield race({
      auth: call(Auth.login, request.credentials)
      // logout: take(LOGOUT)
    })

    // If `authorize` was the winner...
    console.log('winner', winner);

    if (winner.auth) {
      // ...we send Redux appropiate actions
      yield put(setAuthState(winner.auth.jwt_token)) // User is logged in (authorized)
    }
  }
}