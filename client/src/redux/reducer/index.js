/*
    index.js
    Micheal Herring
    Documented on 10/06/2022
    
    Description:
        Holds the Redux reducers.
    
    Documentation:
        No documentation provided.
*/

import handleCart from './handleCart'
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,
})
export default rootReducers