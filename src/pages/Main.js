import React, { useMemo, useReducer } from 'react';
import CreateUser from '../components/CreateUser';
import UserList from '../components/UserList';

export const UserDispatch = React.createContext(null);

function reducer(state, action) {
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
}

function Main() {
  console.log('render - main');
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

  // 회원정보 관리
  const [users, userDispatch] = useReducer(reducer, initUsers);

  // 사용자 수 체크
  const activeCnt = useMemo(() => {
    console.log('cal - active cnt');
    return users.filter((user) => user.active).length;
  }, [users]);

  return (
    <UserDispatch.Provider value={userDispatch}>
      <div>활성 사용자 수 : {activeCnt}</div>
      <hr />
      <CreateUser />
      <hr />
      <UserList users={users} />
      <hr />
    </UserDispatch.Provider>
  );
}

export default Main;
