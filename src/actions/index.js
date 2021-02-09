
export const actionTypes = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

export const increaseCount = () => ({
  type: actionTypes.INCREMENT
})

export const decreaseCount = () => ({
  type: actionTypes.DECREMENT
})
