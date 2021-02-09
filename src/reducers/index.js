import { actionTypes } from '../actions'

export const counterReducer = (state, action) => {

  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        count: state.count + 1
      }

    case actionTypes.DECREMENT:
      return {
        count: state.count - 1
      }

    default:
      return state
  }
  
}
