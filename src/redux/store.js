import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
import    { rootReducer }  from './calc'

// const isDevelopment = process.env.REACT_APP_ENV === 'development'
// let store
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

// if (isDevelopment) {
//   store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// } else {
//   store = createStore(rootReducer, applyMiddleware(thunk))
// }

const store = createStore(rootReducer, composeEnhancers())

export default store