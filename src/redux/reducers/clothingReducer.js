import { CLOTHIG, COLLECTION } from "../types/type";

const defaultstate={
    clothing:[],
    collection:[]
   
}
export const clothingReducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case CLOTHIG:
           
            return{
                ...state,
                clothing:action.data
            };        
       
        case COLLECTION:
           
            return{
                ...state,
                collection:action.data
            };        
       
        default:
            return state;
        }
    }