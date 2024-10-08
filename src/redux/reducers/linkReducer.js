import {  LINK, SIMILAR } from "../types/type";


const defaultstate={
    linkdata:[],
    similar:[],
   
}
export const linkREducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case LINK:
           
            return{
                ...state,
                linkdata:action.data
            };        
        case SIMILAR:
           
            return{
                ...state,
                similar:action.data
            };        
       
        default:
            return state;
        }

}