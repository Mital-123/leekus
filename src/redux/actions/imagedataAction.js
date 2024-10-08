import {  IMAGE } from "../types/type"
import axios from "axios";

const srever = process.env.REACT_APP_SERVER_URL
export const imagedataActionon =(proid)=>{
    
    return(dispatch)=>{
        axios.get(`${srever}api/get-product-colour-image/?${proid}`).then((res)=>{
            dispatch({type:IMAGE,data:res.data})
        })
        
    }

}