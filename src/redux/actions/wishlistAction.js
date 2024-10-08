import { WISH } from "../types/type"
import axios from "axios";

const srever = process.env.REACT_APP_SERVER_URL
export const wishlist =(proid,id)=>{

  
    return(dispatch)=>{
        axios.post(`${srever}api/create-wishlist/`,proid).then((res)=>{
         
            dispatch(wishlistdata())
        }).catch((err)=>{
           
        })
        
    }

}


export const wishlistdata = ()=>{
    const userid = localStorage.getItem("user_id")
    return(dispatch)=>{
        axios.get(`${srever}api/create-wishlist/?user_id=${userid}`).then((res)=>{
            dispatch({type:WISH,data:res.data})
        })
    }
}