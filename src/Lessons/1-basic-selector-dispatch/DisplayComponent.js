import React from 'react'

import { useSelector } from 'react-redux/es/exports';

const DisplayComponent = () => {
  
  // The 'connect' call and the mapStateToProps function are replaed by this
  const count   = useSelector(state => state.countReducer.count);
  const text    = useSelector(state => state.textReducer.text);
  const loading = useSelector(state => state.usersReducer.loading);
  const users   = useSelector(state => state.usersReducer.users);
  const error   = useSelector(state => state.usersReducer.error);

  return (
    <div className='component'>
      <p className="component__name">DisplayComponent</p>
      <p>this.props.count = {count}</p>
      <p>this.props.text = {text}</p>
      <br />
      
      <p>User list:</p>
      
      {loading ? <p>Fetching users...</p> : ''}
      
      {
        users.length === 0 ?
        '<empty>' :
        users.map(user => <p key={user.id}>{user.name}</p>)
      }
      
      {error? `Error: ${error}:` : ''}
    </div>
  )
}

export default DisplayComponent;