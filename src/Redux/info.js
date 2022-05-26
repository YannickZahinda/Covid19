import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const countryInfo = createAsyncThunk(
  'COVID19/COUNTRY_DETAILS',
  async (id) => {
    const url = `https://corona.lmao.ninja/v2/countries/${id}`;
    const response = await fetch(url);
    const covidCases = await response.json();
    const fetchCovidCases = {
      // eslint-disable-next-line no-underscore-dangle
      country_id: covidCases.countryInfo._id,
      country_name: covidCases.country,
      country_cases: covidCases.cases,
      country_flag: covidCases.countryInfo.flag,
      country_death: covidCases.deaths,
      country_continent: covidCases.continent,
    };
    return fetchCovidCases;
  },
);

export const fetchedCountryInfo = createSlice(
  {
    name: 'COVID19/COUNTRY_DETAILS',
    initialState: {},
    reducers: {},
    extraReducers: {
      [countryInfo.fulfilled]: (state, action) => action.payload,
    },
  },
);

export default fetchedCountryInfo.reducer;
