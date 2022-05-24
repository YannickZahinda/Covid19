import { configureStore } from "@reduxjs/toolkit";
import casesReducer from '../Redux/home';
import detailReducer from '../Redux/info'

const store = configureStore({
    reducer: {
        covid: casesReducer,
        details: detailReducer
    },
});

export default store;