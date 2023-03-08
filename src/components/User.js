import React from "react";

function User({ id, name, email, active, onClick, onToggle }) {
  const activeStyle = {
    fontWeight: 'bold',
    cursor: 'pointer',
    color: active === true ? 'green' : '',
  };

  return (
    <div>
      {id}
      <span style={activeStyle} onClick={onToggle}>
        {name}
      </span>
      {email}
      <button type="button" onClick={onClick}>
        삭제
      </button>
    </div>
  );
}

export default React.memo(User);
