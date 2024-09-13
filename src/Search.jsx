/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import cities from './cities.json';
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const filtered = cities.filter((city) => city.startsWith(searchQuery));
    setSuggestions(filtered);
    // console.log(suggestions);
  }, [searchQuery]);
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  }
  const hint = suggestions[0];
  return (
    <div className="input">
      <label htmlFor="input" >
        {hint}
      </label>
      <input
        type="text"
        id="input"
        value={searchQuery}
        
        onChange={handleChange}
      />
    </div>
  );
};

export default Search
