import { ORDERDETAIL } from "../types/type";



const defaultstate={
orderdetail:[],
   
}
export const orderDetailReducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case ORDERDETAIL:
         
            return{
                ...state,
                orderdetail:action.data
            };        
       
        default:
            return state;
        }

}