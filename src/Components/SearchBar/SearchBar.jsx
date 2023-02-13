import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({setUser}) => {
  const [searchInput, setSearchInput] = useState("")

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  setUser(searchInput)

  return (
    <div className="contain">
      <input type="text" 
      placeholder="Github Username" 
      value={searchInput}
      onChange={handleChange}
      />
     <Link to={"/Repos"}><button>Search</button></Link> 
    </div>
  );
};

export default SearchBar;

