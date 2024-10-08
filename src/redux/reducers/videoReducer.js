import { VIDEO } from "../types/type";



const defaultstate={
    video:[],
   
}
export const videoReducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case VIDEO:
            
            return{
                ...state,
                video:action.data
            };        
       
        default:
            return state;
        }

}