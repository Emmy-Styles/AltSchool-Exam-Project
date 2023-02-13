import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import axios from "axios";
import { BsSearch } from "react-icons/bs"

const Home = ({ setUser }) => {
  const [searchInput, setSearchInput] = useState("");
  // const [userdata, setUserdata] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [filteredData, setFilteredData] = ([]);

  // const URL = "https://api.github.com/users";

  // const fetchUserData = () => {
  //   setLoading(true);
  //   axios
  //     .get(URL)
  //     .then((response) => {
  //       setUserdata(response.data);
  //     })
  //     .catch((error) => {
  //       if (error) {
  //         throw new Error("error!!");
  //       }
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // const handleChange = (handleInput, handleFilter) => event => {
  //   handleInput(event);
  //   handleFilter(event);
  // };

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  // const handleFilter = (e) => {
  //   const searchWord = e.target.value;
  //   const newFilter = userdata.filter((value) => {
  //     return value.login.includes(searchWord)
  //   }) 
  //   setFilteredData(newFilter);
  // }
  setUser(searchInput);

  return (
    <div className="search">
      <div > 
      <form className="searchInputs">
        <input
          type="text"
          placeholder="Github Username"
          value={searchInput}
          onChange={handleInput}
        />
        <Link to={searchInput ? "/Repos" : null} className="iconLink">
        <button type="submit" className="searchIcon"><BsSearch /></button>
        </Link>
        </form>
        
        
      </div>
      {/* {userdata.length !== 0 && (
        
        <div className="dataResult">
        {userdata.map((value, key) => {
          return <a className="dataItem" href={value.html_url} target="_blank" rel="noreferrer">
            {" "}
            {value.login}{" "} 
            </a>
        })}
        </div>
      )}    */}
      
    </div>
  );
};

export default Home;
