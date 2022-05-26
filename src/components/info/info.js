import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { countryInfo } from '../../Redux/info';
import microbe from '../../assets/iconmicrobe.png';
import leftArrow from '../../assets/leftarrow.png';
import './info.css';

export default function Info() {
  const countryDetails = useSelector((state) => state.details);
  const { countryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryInfo(countryId));
  });
  return (
    <div className="country-details-container">
      <div className="detail-container">
        <Link to="/">
          <img
            className="back-left-img"
            src={leftArrow}
            width={30}
            height={30}
            alt="leftarrow"
          />
        </Link>
        <div>
          <img src={countryDetails.country_flag} alt="country-flag" />
        </div>
        <h2>{countryDetails.country_name}</h2>
        <ul className="country-details">
          <li>
            The country covid19 cases are :
            {' '}
            <span className="details">{countryDetails.country_cases}</span>
          </li>
          <li>
            The country number of deaths :
            {' '}
            <span className="details">{countryDetails.country_death}</span>
          </li>
          <li>
            The country belongs to
            {' '}
            <span className="details">{countryDetails.country_continent}</span>
            {' '}
            continent
          </li>
        </ul>
        <div className="animated-icon">
          <img src={microbe} width={50} height={50} alt="microbe-icon" />
        </div>
        <div className="animated-icon">
          <img src={microbe} width={50} height={50} alt="microbe-icon" />
        </div>
        <div className="animated-icon">
          <img src={microbe} width={50} height={50} alt="microbe-icon" />
        </div>
      </div>
    </div>
  );
}
