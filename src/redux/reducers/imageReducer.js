import { IMAGE } from "../types/type";


const defaultstate={
    imagedata:[],
    colorId:{}
   
}
export const imageReducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case IMAGE:
          
            return{
                ...state,
                imagedata:action.data
            };             
       
        default:
            return state;
        }

}