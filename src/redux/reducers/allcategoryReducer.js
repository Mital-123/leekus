import { ALLCATEGORY } from "../types/type";

const defaultstate={
    allcategory:[],
   
}
export const allcategoryreducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case ALLCATEGORY:
         
            return{
                ...state,
                allcategory:action.data
            };        
       
        default:
            return state;
        }
    }