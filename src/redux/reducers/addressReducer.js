import { GETADDRESS, GET_ADDRESS_ERROR } from "../types/type";

const defaultstate={
   address:[],
   error:null,
   
}
export const addressReducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case GETADDRESS:
        
            return{
                ...state,
                address:action.data
            };  
            case GET_ADDRESS_ERROR:
                return {
                    ...state,
                    error: action.error 
                }      
       
        default:
            return state;
        }

}