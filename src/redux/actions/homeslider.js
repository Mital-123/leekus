import { HOMESLIDER } from "../types/type";
import axios from "axios";

const server = process.env.REACT_APP_SERVER_URL;

export const homesliderAction = (proidd) => {

  return (dispatch) => {
    axios.get(`${server}api/get-home-page-silder/`)
      .then((res) => {
        dispatch({ type: HOMESLIDER, data: res.data });
      })
   
  };
};
