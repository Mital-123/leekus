import axios from "axios"
import { GETADDRESS, GET_ADDRESS_ERROR } from "../types/type"
const server=process.env.REACT_APP_SERVER_URL;
const id = localStorage.getItem("user_id")

export const getAddress=()=>{
    const id = localStorage.getItem("user_id")
    return(dispatch)=>{
        axios.get(`${server}api/user-address/${id}/`).then((res)=>{
            dispatch({type:GETADDRESS,data:res.data})
        }).catch((error) => {
            // Handle error here, dispatch an action to update state with error message
            dispatch({ type: GET_ADDRESS_ERROR,  error: error.response.data });
        });
    }
}
export const addAddress=(obj)=>{
    return(dispatch)=>{
        axios.post(`${server}api/user-address/`,obj).then((res)=>{
           return dispatch(getAddress())
        }).catch((error) => {
            // Handle error here, dispatch an action to update state with error message
            dispatch({ type: GET_ADDRESS_ERROR,  error: error.response.data });
        });
    }
}
export const deleteAdress=(id,obj)=>{
    return(dispatch)=>{
        axios.put(`${server}api/user-address/${id}`,obj).then((res)=>{
           return dispatch(getAddress())
        }).catch((error) => {
            // Handle error here, dispatch an action to update state with error message
            dispatch({ type: GET_ADDRESS_ERROR,  error: error.response.data });
        });
    }
}
export const editAdress=(id,obj)=>{
    return(dispatch)=>{
        axios.put(`${server}api/user-address/${id}`,obj).then((res)=>{
           return dispatch(getAddress())
        }).catch((error) => {
            // Handle error here, dispatch an action to update state with error message
            dispatch({ type: GET_ADDRESS_ERROR,  error: error.response.data });
        });
    }
}