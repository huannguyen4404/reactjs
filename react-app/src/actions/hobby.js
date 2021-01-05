export const addNewHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    payload: hobby,
  }
}

export const setActiveHobby = (hobby) => ({
  type: 'SET_ACTIVE_HOBBY',
  payload: hobby,
})
