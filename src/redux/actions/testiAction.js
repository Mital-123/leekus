import {  BLOG, TESTI } from "../types/type"
import axios from "axios";

const srever = process.env.REACT_APP_SERVER_URL
export const testiAction =(proid)=>{
  
    return(dispatch)=>{
        axios.get(`${srever}api/get-crouser-page-information/`).then((res)=>{
            dispatch({type:TESTI,data:res.data})
        })
        .catch((error) => {
          

          });
    }}



export const blogAction =(proid)=>{

    return(dispatch)=>{
        axios.get(`${srever}api/get-blog-page-information/`).then((res)=>{
            dispatch({type:BLOG,data:res.data})
        })
      
    }}


