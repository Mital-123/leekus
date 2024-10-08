import {  DATA_FETCH_ERROR,  SUBSLIDER } from "../types/type";


const defaultstate={
    subslider:[],
    error:null
}
export const subsliderReducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case SUBSLIDER:
         
            return{
                ...state,
                subslider:action.data
            };        
            case DATA_FETCH_ERROR:
                return {
                    ...state,
                    error: action.error 
                }      
        default:
            return state;
        }

}