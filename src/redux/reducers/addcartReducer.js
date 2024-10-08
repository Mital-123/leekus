import {   ADDTOCART, WISH } from "../types/type";


const defaultstate={
    addcart:[],
   
}
export const addtocartReducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case ADDTOCART:
        
            return{
                ...state,
                addcart:action.data
            };        
       
        default:
            return state;
        }

}