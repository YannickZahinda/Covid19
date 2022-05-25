import { configureStore } from "@reduxjs/toolkit";
import casesReducer from '../Redux/home';
import detailReducer from '../Redux/info';
import searchReducer from '../Redux/search'

const store = configureStore({
    reducer: {
        covid: casesReducer,
        details: detailReducer,
        search: searchReducer
    },
});

export default store;