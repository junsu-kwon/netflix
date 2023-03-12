import React from 'react';
import User from './User';

function UserList({ users }) {
  console.log('render - userlist');
  return (
    <>
      {users.map((user) => (
        <User
          key={user.id + user.name}
          id={user.id}
          name={user.name}
          email={user.email}
          active={user.active}
        />
      ))}
    </>
  );
}

export default React.memo(UserList);
