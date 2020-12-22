import { combineReducers } from 'redux'
import * as actionType from './types'

const initialState = {
  value: 0
}

function calcReducer(state = initialState, action) {
  switch(action.type) {
    case actionType.ADD:
      return {
        ...state,
        value: state.value + action.value
      }
    case actionType.MULTIPLY:
      return {
        ...state,
        value: state.value * action.value
      }
    case actionType.RESET_VALUE:
      return {
        ...state,
        value: 0
      }
    default:
      return state
  }
}


export const rootReducer = combineReducers({
  calc: calcReducer
})

// export default {
//   Add,
//   Multiply
// }
