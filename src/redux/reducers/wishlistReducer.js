import {   WISH } from "../types/type";


const defaultstate={
    wish:[],
   
}
export const wishlistReducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case WISH:
         
            return{
                ...state,
                wish:action.data
            };        
       
        default:
            return state;
        }

}