import axios from "axios"
import { ORDERDETAIL } from "../types/type"



const srever = process.env.REACT_APP_SERVER_URL
export const orderDetailAction = ()=>{
    const userid = localStorage.getItem("user_id")
    return(dispatch)=>{
        axios.get(`${srever}api/order-details/?user_id=${userid}`).then((res)=>{
            dispatch({type:ORDERDETAIL,data:res.data})
        })
    }
}
export const orderCancleAction = (id)=>{
    return(dispatch)=>{
        axios.put(`${srever}api/order-details/${id}`).then((res)=>{
            dispatch(orderDetailAction())
        })
    }
}