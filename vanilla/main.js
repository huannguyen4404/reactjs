const { createStore } = window.Redux

const initState = JSON.parse(localStorage.getItem('hobby_list')) || []

const hobbyReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      const newList = [...state]
      newList.push(action.payload)
      return newList
    default:
      return state
  }
}

const store = createStore(hobbyReducer)

const renderHobbyList = (hobbyList) => {
  if (!Array.isArray(hobbyList) || hobbyList.length === 0) return

  const ulElement = document.querySelector('#hobbyListId')
  if (!ulElement) return

  // clear list
  ulElement.innerHTML = ''

  for (const hobby of hobbyList) {
    const liElement = document.createElement('li')
    liElement.textContent = hobby

    ulElement.appendChild(liElement)
  }
}

// Render init hobby list
const initHobbyList = store.getState()
console.log(initHobbyList)
renderHobbyList(initHobbyList)

// Handle submit
const hobbyFormElement = document.querySelector('#hobbyFormId')
if (hobbyFormElement) {
  const handleFormSubmit = (e) => {
    // prevent reload page
    e.preventDefault()

    const hobbyTextEl = hobbyFormElement.querySelector('#hobbyTextId')
    if (!hobbyTextEl) return

    const action = {
      type: 'ADD_HOBBY',
      payload: hobbyTextEl.value,
    }
    store.dispatch(action)

    // clear input
    hobbyFormElement.reset()
  }

  hobbyFormElement.addEventListener('submit', handleFormSubmit)
}

store.subscribe(() => {
  const newList = store.getState()
  renderHobbyList(newList)

  localStorage.setItem('hobby_list', JSON.stringify(newList))
})
