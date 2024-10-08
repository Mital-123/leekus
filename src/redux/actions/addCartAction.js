import { ADDTOCART } from "../types/type"
import axios from "axios";

const srever = process.env.REACT_APP_SERVER_URL
export const addCartData =(proid,id)=>{

    return(dispatch)=>{
        axios.post(`${srever}api/add-to-cart/`,proid).then((res)=>{
           
            dispatch(AddCartAction(id))
        })
        
    }

}


export const AddCartAction = (id)=>{
    const userid = localStorage.getItem("user_id")
 
    return(dispatch)=>{
        axios.get(`${srever}api/add-to-cart/?user_id=${userid}`).then((res)=>{
            dispatch({type:ADDTOCART,data:res.data})
        })
    }
}