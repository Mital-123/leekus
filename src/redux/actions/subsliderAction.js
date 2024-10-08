import {  DATA_FETCH_ERROR, SUBSLIDER } from "../types/type"
import axios from "axios";

const srever = process.env.REACT_APP_SERVER_URL
export const SubsliderAction =(proid)=>{
  
    return(dispatch)=>{
        axios.get(`${srever}api/get-silder-section-data/?${proid}`).then((res)=>{
            dispatch({type:SUBSLIDER,data:res.data})
        })
        .catch((error) => {

            dispatch({type:DATA_FETCH_ERROR,error: error.response.data})
            
          });
    }}
