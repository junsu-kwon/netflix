import { useCallback, useMemo, useReducer, useRef } from 'react';
import UserList from '../components/UserList';

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

  const onChange = useCallback((e) =>
    inputDispatch({ [e.target.name]: e.target.value }, []),
  );

  // 회원정보 관리
  const [users, userDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CREATE':
        return [...state, action.data];

      case 'DELETE':
        return state.filter((user) => action.id !== user.id);

      case 'UPDATE':
        return state.map((user) =>
          action.id === user.id ? { ...user, ...action.data } : user,
        );
      default:
        break;
    }
  }, initUsers);

  // 사용자 수 체크
  const activeCnt = useMemo(() => {
    return users.filter((user) => user.active).length;
  }, [users]);

  const onCreate = useCallback(() => {
    nextId.current += 1;
    userDispatch({
      type: 'CREATE',
      data: {
        id: nextId.current,
        name: inputs.name,
        email: inputs.email,
        active: true,
      },
    });
  }, [inputs]);

  const onDelete = useCallback(
    (user) => userDispatch({ type: 'DELETE', id: user.id }),
    [],
  );

  const onToggle = useCallback(
    (user) =>
      userDispatch({
        type: 'UPDATE',
        id: user.id,
        data: { active: !user.active },
      }),
    [],
  );
  return (
    <>
      <div>활성 사용자 수 : {activeCnt}</div>
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
        <button type="button" onClick={onCreate}>
          등록
        </button>
      </div>
      <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
    </>
  );
}

export default Main;
