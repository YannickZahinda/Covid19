import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchedCases = createAsyncThunk('sth/FETCH_CASES', async () => {
  const url = 'https://corona.lmao.ninja/v2/countries';
  const response = await fetch(url);
  const covidCases = await response.json();
  const fetchCovidCases = covidCases.map((item) => ({
    // eslint-disable-next-line no-underscore-dangle
    country_id: item.countryInfo._id,
    country_name: item.country,
    country_cases: item.cases,
    country_flag: item.countryInfo.flag,
  }));
  return fetchCovidCases;
});

export const casesSlice = createSlice({
  name: 'sth/Case',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchedCases.fulfilled]: (state, action) => action.payload,
  },
});
export const { updateDetails } = casesSlice.actions;
export default casesSlice.reducer;
