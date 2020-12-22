import store from '../store'
import * as actionType from './types'



export function Add(payload) {
  store.dispatch({type: actionType.ADD, value: payload})
}

export function Multiply(payload) {
  store.dispatch({type: actionType.MULTIPLY, value: payload})
}

export function getCurrentValue(state){
  return state.calc.value
}

export function resetValue() {
  store.dispatch({type: actionType.RESET_VALUE})
}