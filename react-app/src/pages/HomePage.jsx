import React from 'react'
// import { shallowEqual } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import HobbyList from '../components/Home/HobbyList'
import { addNewHobby, setActiveHobby } from '../actions/hobby'

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage(props) {
  /* strict comparison vs shallow comparison */
  const hobbyList = useSelector((state) => state.hobby.list)
  const activeId = useSelector((state) => state.hobby.activeId)

  /** NOT RECOMMENDED, need shallowEqual */
  // const hobbyState = useSelector(
  //   (state) => ({
  //     hobbyList: state.hobby.list,
  //     activeId: state.hobby.activeId,
  //   }),
  //   shallowEqual
  // )

  const dispatch = useDispatch()

  const handleAddClick = () => {
    const newRandId = randomNumber()
    const newHobby = {
      id: newRandId,
      title: `Hobby ${newRandId}`,
    }

    const action = addNewHobby(newHobby)
    dispatch(action)
  }

  const handleActiveHobby = (hobby) => {
    const action = setActiveHobby(hobby)
    dispatch(action)
  }

  return (
    <div className="home-page">
      <h1>REDUX HOOKS - Home Pages</h1>
      <button onClick={handleAddClick}>Random hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleActiveHobby}
      />
    </div>
  )
}

export default HomePage
