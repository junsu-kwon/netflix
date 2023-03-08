import React from 'react';
import User from './User';

function UserList({ users, onDelete, onToggle }) {
  return (
    <>
      {users.map((user) => (
        <User
          key={user.id + user.name}
          id={user.id}
          name={user.name}
          email={user.email}
          active={user.active}
          onClick={() => onDelete(user)}
          onToggle={() => onToggle(user)}
        />
      ))}
    </>
  );
}

export default React.memo(UserList);
