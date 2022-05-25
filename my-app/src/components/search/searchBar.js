import React from "react";
import searchIcon from "../../assets/flatsearch.png";
import "./search.css";

const SearchBar = ({ handleOnChange, value }) => (
  <div className="searbar">
    <form >
      <input
        className="input-search"
        value={value}
        type="search"
        onChange={handleOnChange}
        placeholder="search a country..."
      />
      {/* <div>
        <button className="searchBtn" type="submit">
          <img className="search" src={searchIcon} alt="searchicon" />
        </button>
      </div> */}
    </form>
  </div>
);
export default SearchBar;
