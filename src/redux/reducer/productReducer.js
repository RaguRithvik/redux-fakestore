import {ActionType} from '../constant/ActionType';
const intialSate = {products:[]};

export const productReducer = (state = intialSate, {type, payload}) =>{
    switch (type) {
        case ActionType.SET_PRODUCT:    
        return {...state, products:payload};
        default:
        return state;
    }
};
export const selectProductReducer = (state={}, {type, payload}) =>{
    switch (type) {
        case ActionType.SELECTED_PRODUCT:    
        return {...state, ...payload}
        case ActionType.REMOVE_SELECTED_PRODUCT:    
        return {}
        default:
        return state;
    }
};
