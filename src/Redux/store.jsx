import {legacy_createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";


import { otherReducer } from "./Product/reducers";

// const combinedReducer = combinedReducer({
//     otherReducer,
// })

export const store = legacy_createStore(
    otherReducer,(applyMiddleware(thunk))

)