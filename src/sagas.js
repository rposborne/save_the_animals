import { put, takeEvery, all , fork} from 'redux-saga/effects'
import {loginFlow} from './components/Login/sagas.js'
export default function * root () {
  yield fork(loginFlow)
}