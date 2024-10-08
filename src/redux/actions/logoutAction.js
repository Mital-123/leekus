import axios from "axios";




const srever = process.env.REACT_APP_SERVER_URL
export const logoutaction =(access)=>{
    let auth = {
        headers: {
          Authorization:
            `Bearer ${access}`,
        },
    };
   
    return(dispatch)=>{
        axios.post(`${srever}api/logout/`,{},auth).then((res)=>{
          
            dispatch()
        })
        
    }
}