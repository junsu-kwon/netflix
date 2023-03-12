import React, { useContext, useRef } from 'react';
import useInput from '../hooks/useInput';
import { UserDispatch } from '../pages/Main';

function CreateUser() {
  console.log('render - createuser');

  const userDispatch = useContext(UserDispatch);
  const nextId = useRef(3);
  const [inputs, onChange, reset] = useInput({
    name: '',
    email: '',
  });

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={inputs.name}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={inputs.email}
      />
      <button
        type="button"
        onClick={() => {
          nextId.current += 1;
          reset();
          userDispatch({
            type: 'CREATE',
            data: {
              id: nextId.current,
              name: inputs.name,
              email: inputs.email,
              active: true,
            },
          });
        }}
      >
        등록
      </button>
    </div>
  );
}

export default React.memo(CreateUser);
