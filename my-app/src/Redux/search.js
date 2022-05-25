import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SearchCountryInfo = createAsyncThunk(
  "COVID19/COUNTRY_DETAILS",
  async (term) => {
    const url = `https://corona.lmao.ninja/v2/countries/${term}`;
    const response = await fetch(url);
    const covidCases = await response.json();
    const fetchCovidCases = {
      country_id: covidCases.countryInfo._id,
      country_name: covidCases.country,
      country_cases: covidCases.cases,
      country_flag: covidCases.countryInfo.flag,
      country_death: covidCases.deaths,
      country_continent: covidCases.continent
    };
    return fetchCovidCases
  }
);

export const SearchedCountryInfo = createSlice(
    {
        name: 'COVID19/COUNTRY_DETAILS',
        initialState: {},
        reducers: {},
        extraReducers: {
            [SearchCountryInfo.fulfilled]: (state, action) => action.payload
        }
    },
)

export default SearchedCountryInfo.reducer;

