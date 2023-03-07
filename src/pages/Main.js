import { useReducer, useRef } from 'react';

function Main() {
  const initUsers = [
    {
      id: 1,
      name: '권준수',
      email: 'kjs940322@gmail.com',
      active: true,
    },
    {
      id: 2,
      name: '홍길동',
      email: 'hkd@gmail.com',
      active: true,
    },
  ];

  const nextId = useRef(3);

  // input 관리
  const [inputs, inputDispatch] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    { name: '', email: '' },
  );

  // 회원정보 관리
  const [users, userDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CREATE':
        const newUser = {
          id: nextId.current,
          name: inputs.name,
          email: inputs.email,
          active: true,
        };

        nextId.current += 1;
        return [...state, newUser];

      case 'DELETE':
        return state.filter((user) => action.id !== user.id);
      default:
        break;
    }
  }, initUsers);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="이름"
          onChange={(e) => inputDispatch({ name: e.target.value })}
          value={inputs.name}
        />
        <input
          type="text"
          placeholder="이메일"
          onChange={(e) => inputDispatch({ email: e.target.value })}
          value={inputs.email}
        />
        <button type="button" onClick={() => userDispatch({ type: 'CREATE' })}>
          등록
        </button>
      </div>
      <div>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id + user.name}>
                {user.id} {user.name} {user.email}
                <button
                  type="button"
                  onClick={() => userDispatch({ type: 'DELETE', id: user.id })}
                >
                  삭제
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Main;
