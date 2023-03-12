import React, { useContext } from 'react';
import { UserDispatch } from '../pages/Main';

function User({ id, name, email, active }) {
  console.log('render - user');
  const userDispatch = useContext(UserDispatch);

  const activeStyle = {
    fontWeight: 'bold',
    cursor: 'pointer',
    color: active === true ? 'green' : '',
  };

  return (
    <div>
      {id}
      <span
        style={activeStyle}
        onClick={() => {
          userDispatch({
            type: 'UPDATE',
            id: id,
            data: { active: !active },
          });
        }}
      >
        {name}
      </span>
      {email}
      <button
        type="button"
        onClick={() => userDispatch({ type: 'DELETE', id: id })}
      >
        삭제
      </button>
    </div>
  );
}

export default React.memo(User);
