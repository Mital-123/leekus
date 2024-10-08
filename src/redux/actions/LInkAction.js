import { LINK, SIMILAR } from "../types/type";
import axios from "axios";

const server = process.env.REACT_APP_SERVER_URL;

export const LinkAction = (proidd) => {

  return (dispatch) => {
    axios.get(`${server}api/category-data-filter/?${proidd}`)
      .then((res) => {
        dispatch({ type: LINK, data: res.data });
      })
     
  };
};
export const SimilarproductAction = (proidd) => {

  return (dispatch) => {
    axios.get(`${server}api/category-data-filter/?${proidd}`)
      .then((res) => {
        dispatch({ type:SIMILAR, data:res.data });
      })
      
  };
};

