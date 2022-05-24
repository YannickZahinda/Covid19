import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchedCases } from "../../Redux/home";
import "./home.css";
import icon from "../../assets/back-icon.jpeg";

const Home = () => {
  const dispatch = useDispatch();
  const allCases = useSelector((state) => state.covid);
  useEffect(() => {
    dispatch(fetchedCases());
  }, [dispatch]);
  return (
    <div className="country-container">
      {allCases.map((elt) => (
        <ul key={elt.country_name} className="country">
          <li>
            <Link to={`/Info/${elt.country_id}`}>
              <img
                className="back-img"
                src={icon}
                alt="back-icon"
                width={30}
                height={30}
              />
            </Link>
            <div className="country-image">
              <img src={elt.country_flag} alt="country-flag" />
            </div>
            <h2 className="country-name">{elt.country_name}</h2>
            <p className="total-cases">Total cases : {elt.country_cases}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
