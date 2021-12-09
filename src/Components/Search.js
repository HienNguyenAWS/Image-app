import React from 'react';

const Search = ({ inputValue, setInputValue, handleSearch}) => {

	return (
		<form onSubmit={handleSearch}>
			<input 
				type="text" 
				placeholder="Search"
				autoFocus
				value={inputValue}
				onChange={(e) => { setInputValue(e.target.value)}}
				/>
			<button type="submit">Search</button>
		</form>
	)
}

export default Search;