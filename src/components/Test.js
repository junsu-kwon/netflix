import { useReducer } from 'react';

function Test() {
  const [count, dispatch] = useReducer((prev, next) => {
    // prev 현재 상태
    // next dispatch에 의해 넘어온 새로운 상태
    return prev + next;
  }, 0);

  return (
    <>
      Count : {count}
      <button type="button" onClick={() => dispatch(1)}>
        +
      </button>
      <button type="button" onClick={() => dispatch(-1)}>
        -
      </button>
    </>
  );
}

export default Test;
