import { useRef, useState } from 'react';

function SearchInput() {
  const [search, setSearch] = useState('');
  const [serachLog, setSearchLog] = useState([]);

  const input = useRef();

  const onChange = (event) => setSearch(event.target.value);
  const clickSearch = () => {
    setSearchLog((cur) => [...cur, search]);
  };
  const SearchLogDelete = (targetIndex) => {
    setSearchLog(serachLog.filter((item, index)=> targetIndex !== index));
  };

  const onReset = () => {
    input.current.focus();
    setSearch('');
  };

  return (
    <>
      <input type="text" onChange={onChange} value={search} ref={input} />
      <button type="button" onClick={onReset}>
        초기화
      </button>
      <button type="button" onClick={clickSearch}>
        검색
      </button>
      {serachLog ? (
        <div>
          <ul>
            {serachLog.map((item, index) => {
              return <li key={`${item}-${index}`}>
                {item}
                <a href="javascript:void(0)" onClick={()=>SearchLogDelete(index)}>X</a>
              </li>;
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default SearchInput;
