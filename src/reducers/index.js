import { combineReducers } from 'redux'
import jwt from '../components/Login/reducers'

const rootReducer = combineReducers({
  jwt
})

export default rootReducer