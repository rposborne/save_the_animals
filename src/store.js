import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {persistStore, autoRehydrate} from 'redux-persist'
// react-native
import {AsyncStorage} from 'react-native'


import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
  autoRehydrate(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

sagaMiddleware.run(rootSaga)

// begin periodically persisting the store
persistStore(store, {storage: AsyncStorage})

export default store
