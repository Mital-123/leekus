import axios from "axios";
import { VIDEO } from "../types/type";

export const videoAction =(proid)=>{
    const srever = process.env.REACT_APP_SERVER_URL
   
    return(dispatch)=>{
        axios.get(`${srever}api/get-about-page-information/`).then((res)=>{
            dispatch({type:VIDEO,data:res.data})
          
        })
    
    }}
