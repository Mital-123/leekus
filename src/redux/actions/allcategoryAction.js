import axios from "axios";
import { ALLCATEGORY } from "../types/type";



const srever = process.env.REACT_APP_SERVER_URL


export const categoryall = () => {

    return (dispatch) => {
        axios.get(`${srever}api/category-data-filter/`)
        .then((res) => {
            dispatch({ type: ALLCATEGORY, data: res.data });
        })
    
    };}




