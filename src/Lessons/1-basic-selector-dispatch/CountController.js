import React from 'react'

import {useDispatch} from 'react-redux/es/exports'

import { reset } from '../../Redux/globalActionCreators'
import { increment, decrement } from '../../Redux/count/countActionCreators'

const CountController = () => {

  // The 'connect' call and the mapDispatchToProps function are replaed by this
  const dispatch = useDispatch();

  return (
    <div className='component'>
      <p className="component__name">CountController</p>
      <button onClick={() => dispatch(decrement())}>{'<'}</button>
      <button onClick={() => dispatch(increment())}>{'>'}</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
  
export default CountController;

