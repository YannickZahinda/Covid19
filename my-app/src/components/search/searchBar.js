import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "./search.css";

const SearchBar = () => {
    const dispatch = useDispatch();
    const countrySearch = useSelector(state => state.search);
  return (
    <div>
      <form>
        <input className="input-search" type="text" placeholder="search..." />
      </form>
    </div>
  );
};

export default SearchBar;
