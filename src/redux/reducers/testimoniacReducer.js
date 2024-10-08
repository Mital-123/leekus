import {   BLOG, TESTI, VIDEO } from "../types/type";


const defaultstate={
    testimonial:[],
    blog:[],
    video:[],
   
}
export const testimonialReducer = (state=defaultstate,action)=>{
    switch (action.type) {
        case TESTI:
           
            return{
                ...state,
                testimonial:action.data
            };        
        case BLOG:
           
            return{
                ...state,
                blog:action.data
            };        
        case VIDEO:
           
            return{
                ...state,
                video:action.data
            };        
       
        default:
            return state;
        }

}