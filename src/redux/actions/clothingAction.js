import axios from "axios";
import {  CLOTHIG, COLLECTION } from "../types/type";


export const clothingdata=()=>{
    const srever = process.env.REACT_APP_SERVER_URL

    return async (dispatch) => {
        try {
            const res = await axios.get(`${srever}api/category-data-filter/?category_name=Clothing`);            
            dispatch({ type: CLOTHIG, data: res.data });
       
        } catch (error) {
           
           
        }
    };
}


export const alldatacategory=(category)=>{
    const srever = process.env.REACT_APP_SERVER_URL
    
    return async (dispatch) => {
        try {
            const res = await axios.get(`${srever}api/category-data-filter/?category_name=${category}`);            
            dispatch({ type: COLLECTION, data:res.data });
            
        } catch (error) {
           
          
        }
    };
}





