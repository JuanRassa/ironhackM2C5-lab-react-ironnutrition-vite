import { useState } from 'react';
import { Divider, Input } from 'antd';

function SearchBar({ filteredQuery }) {
  const [query, setQuery] = useState('');

  const handleOnChange = e => {
    setQuery(e.target.vale);
    filteredQuery(e.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        name='search'
        value={query}
        type='text'
        onChange={e => {
          handleOnChange(e);
        }}
      />
    </>
  );
}

export default SearchBar;
