import React from 'react'

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

import { textChange } from '../../Redux/text/textActionCreators'
import { increment, decrement } from '../../Redux/count/countActionCreators'
import { reset } from '../../Redux/globalActionCreators'


const FlexibleController = (props) => {

  const text = useSelector(state => state.textReducer.text);

  const dispatch = useDispatch();

  const textController = (
    <>
        <p>Controlling text</p>
        <input
          type     = "text"
          value    = {text}
          onChange = {(event) => dispatch(textChange(event))}
        />
    </>
  )

  const countController = (
    <>
      <p>Controlling Count</p>
      <button onClick={() => dispatch(decrement())}>{'<'}</button>
      <button onClick={() => dispatch(increment())}>{'>'}</button>
    </>
  )

  return (
    <div className='component'>
      <p className="component__name">FlexibleController</p>
      {props.role === 'controlText' ? textController : countController}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}


export default FlexibleController;