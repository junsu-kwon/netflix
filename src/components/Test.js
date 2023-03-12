import produce from 'immer';

function Test() {
  const state = {
    number: 1,
    dontChangeMe: 2,
  };

  const nextState = produce(state, (draft) => {
    console.log(draft);
    draft.number += 1;
  });

  console.log(nextState);
  return <div>Test</div>;
}

export default Test;
