import { ActionType } from '../constant/ActionType';

//set product
export const setproduct = (products) =>{
        return{
            type: ActionType.SET_PRODUCT,
            payload: products
        }
}
// select product
export const selectproduct = (product) =>{
    return{
        type: ActionType.SELECTED_PRODUCT,
        payload: product
    }
}
// Remove Product
export const removeproduct = () =>{
    return{
        type: ActionType.REMOVE_SELECTED_PRODUCT,
    }
}