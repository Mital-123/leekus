import axios from "axios";
import { ADD, LOGIN, LOGIN_ERROR, MOUNTDATA } from "../types/type";

import Swal from "sweetalert2";


const srever = process.env.REACT_APP_SERVER_URL

export const userAction =(obj,navigte)=>{
   
    return async (dispatch)=>{
       
      await  axios
        .post(`${srever}api/registeraccount/`, obj)
        .then((res) => {
             dispatch({type:ADD,data:res.data}) 
            if (res.status === 200) {
                navigte('/login')
            }
           
        })
        .catch((error) => {
        
            // Handle 400 error (credentials mismatch)
            if (error.response && error.response.status === 400) {
               
            
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "error",
                    title: "User with this email already exists."
                  });
            }else {
               
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'An error occurred during create',
                });
            }
        });
        
        
    }
}




export const loginUser =(obj,navigte)=>{

    return(dispatch)=>{
       axios.post(`${srever}api/login/`,obj).then((res)=>{
     
       localStorage.setItem("token",res.data.token.access)
           dispatch({type:LOGIN,data:res.data})
           
           if (res.status === 200) {
            navigte('/adress')
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Signed in successfully"
              });
           }
       })
       .catch((error) => {
        
        // Handle 400 error (credentials mismatch)
        if (error.response && error.response.status === 400) {
         
            dispatch({ type: LOGIN_ERROR, error: 'Invalid email or password' });
        
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "Invalid email or password"
              });
        } 
         else {
           
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'An error occurred during login',
            });
        }
    });
    }
   }

   export const mountData=()=>{
    let auth = {
      headers: {
        Authorization:
          `Bearer ${localStorage.getItem("token")}`,
      },
  };
    return(dispatch)=>{
      axios.get(`${srever}api/user-profile/`,auth).then((res)=>{
        dispatch({type:MOUNTDATA,data:res.data.user_data})
      })
    }
   }