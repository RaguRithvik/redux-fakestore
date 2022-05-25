import { combineReducers } from 'redux';
import { productReducer, selectProductReducer } from './productReducer';
const reducer = combineReducers
({
    allProduct:productReducer,
    product:selectProductReducer,
});
export default reducer;
