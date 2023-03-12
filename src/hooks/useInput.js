import { useCallback, useReducer } from 'react';

function useInput(initialForm) {
  const [inputs, inputDispatch] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    initialForm,
  );

  const onChange = useCallback(
    (e) => inputDispatch({ [e.target.name]: e.target.value }, []),
    [],
  );

  const reset = useCallback(() => inputDispatch(initialForm), [initialForm]);

  return [inputs, onChange, reset];
}

export default useInput;
