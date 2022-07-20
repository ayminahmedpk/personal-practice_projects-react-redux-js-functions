

import React from 'react'

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

import { reset } from '../../Redux/globalActionCreators'
import { textChange } from '../../Redux/text/textActionCreators'


const TextController = () => {

  const text = useSelector(state => state.textReducer.text);

  const dispatch = useDispatch();

  return (
    <div className='component'>
      <p className="component__name">TextController</p>
      <input
        type="text"
        value={text}
        onChange={(event) => dispatch(textChange(event))}
      />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}


export default TextController;