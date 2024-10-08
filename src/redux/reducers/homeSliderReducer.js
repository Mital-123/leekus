import {  HOMESLIDER } from "../types/type";


const defaultstate={
    homeslider:[],
   
}
export const homeSliderReducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case HOMESLIDER:
           
            return{
                ...state,
                homeslider:action.data
            };        
       
        default:
            return state;
        }

}