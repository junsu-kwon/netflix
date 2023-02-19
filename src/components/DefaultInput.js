import { useState } from 'react';

function DefaultInput({ label = '', value = '' }) {
  const [val, setVal] = useState(value);
  const onChange = (event) => setVal(event.target.value);
  return (
    <label>
      {label} <input type="text" onChange={onChange} value={val} />
    </label>
  );
}

export default DefaultInput;
