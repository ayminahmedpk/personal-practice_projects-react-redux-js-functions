import React from 'react'

import { useDispatch } from 'react-redux/es/hooks/useDispatch'

import { makeRequest } from '../../Redux/users/usersActionCreators'


const FetchController = () => {

  const dispatch = useDispatch()

  return (
    <div className="component">
      <div className="component__name">FetchController</div>
      <button onClick={() => dispatch(makeRequest())}>Make Request</button>
    </div>
  )
}

export default FetchController;