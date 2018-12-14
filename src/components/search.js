import React from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Dgite um nome de usuario'
      onKeyUp={handleSearch}
    />
  </div>
)

export default Search
