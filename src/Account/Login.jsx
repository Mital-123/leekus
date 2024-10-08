import React, { useState } from "react";
import Hoc from "../component/Hoc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/createAction";
import Swal from "sweetalert2";

function Login() {
  const [obj, setobj] = useState({});
  const [errormsg, seterrormsg] = useState({});
  const [blankobj, setblankobj] = useState({});
  const dispatch = useDispatch();
  const navigte = useNavigate();

  const state = useSelector((state) => state);
  const user = state.user.users;

  const getdata = (e) => {
    obj[e.target.name] = e.target.value;
    blankobj[e.target.name] = "";

  

    if (e.target.name === "password") {
      if (e.target.value.length === 0) {
        errormsg.password = "password is required";
      } else if (e.target.value.length < 6) {
        errormsg.password = "password must be six character";
      } else if (e.target.value.length === 6) {
        errormsg.password = "";
      }
    }

    seterrormsg({ ...errormsg });
    setobj({ ...obj });
    setblankobj({ ...blankobj });
  };

  const savedata = () => {
    setobj({ ...obj });

    if (obj.user_identifier === "" || obj.user_identifier === undefined) {
      errormsg.user_identifier = "please enter your email";
    }

    if (obj.password === undefined || obj.password === "") {
      errormsg.password = "password is required";
    }

    if (Object.values(errormsg).every((x) => x === "")) {
      setobj({ ...obj });
      setobj({ ...blankobj });

      dispatch(loginUser(obj, navigte));
    }

    seterrormsg({ ...errormsg });
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3"></div>

          <div className="col-lg-6">
            <h3 className=" text-center mt-5">Login</h3>
            <p className="mt-2  text-center">
              {" "}
              Please enter your e-mail and password:
            </p>
            <span className="text-danger text-center d-block">
              {state.user.error}
            </span>

            <form action="" className="mt-5">
              <div className="row">
                <div className="mb-3 col-lg-12">
                  <input
                    type="text"
                    name="user_identifier"
                    value={obj.user_identifier}
                    className="form-control"
                    onChange={getdata}
                    placeholder="Email or Number"
                    id="exampleInputPassword2"
                    required
                  />
                  <span className="text-danger">
                    {errormsg.user_identifier}
                  </span>
                </div>

                <div className="mb-3 col-lg-12">
                  <input
                    type="password"
                    name="password"
                    value={obj.password}
                    className="form-control"
                    onChange={getdata}
                    id="exampleInputEmail1"
                    placeholder="Password"
                    aria-describedby="passwordHelp"
                    required
                  />
                  <span className="text-danger">{errormsg.password}</span>
                </div>
              </div>

              <button
                className=" w-100 text-center buttons_hover py-2 fw-medium "
                type="button"
                onClick={savedata}
              >
               LOGIN
              </button>
            </form>
            <div className="text-center mt-4">
              <h6>
                Don't have an account?{" "}
                <Link to={"/createuser"}> Create one</Link>
              </h6>
            </div>
          </div>

          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

export default Hoc(Login);
