import { ADD, LOGIN, LOGIN_ERROR, MOUNTDATA } from "../types/type";


const defaultstate={
    users:[],
    loginuser:[],
    error:' ',
}

export const createReducer = (state=defaultstate,action)=>{
    switch (action.type) {  
        case ADD:
          
            return{
                ...state,
                users:action.data
            };
        case MOUNTDATA:
       
          
            return{
                ...state,
                users:action.data
            };
        case LOGIN:
          
            return{
                ...state,
                loginuser:action.data,
                error: ''
            };
         case LOGIN_ERROR:
                return {
                    ...state,
                    error: action.error 
                };
       
            
        default:
            return defaultstate;
        }
    }   