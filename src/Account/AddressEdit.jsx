import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import Hoc from "../component/Hoc";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  deleteAdress,
  editAdress,
  getAddress,
} from "../redux/actions/adressAction";
import Swal from "sweetalert2";

function AddressEdit() {
  const [obj, setobj] = useState({});
  const [array, setarray] = useState([]);
  const [blankobj, setblankobj] = useState({});
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [displayError, setDisplayError] = useState(false);
useEffect(() => {
 dispatch(getAddress())
}, [dispatch])
  const api = process.env.REACT_APP_SERVER_URL;

  let getdata = (e) => {
    obj[e.target.name] = e.target.value;
    blankobj[e.target.name] = "";
    setobj({ ...obj });
    setblankobj({ ...blankobj });
  };
  let savedata = () => {
    obj.phone_number = `+91${obj.phone_number}`;
    if (obj.id) {
      dispatch(editAdress(obj.id, obj));
    } else {
      obj.user = localStorage.getItem("user_id");
      dispatch(addAddress(obj));
    }
    setarray([...array]);
    setobj({ ...blankobj });
  };
  let editdata = (id) => {
    let b = state.useradress.address?.find((item) => item.id === id);
    setobj({ ...b });
  };

  let deletdata = (id, obj) => {
    obj.status = false;
    Swal.fire({
  title: "Are you sure?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    dispatch(deleteAdress(id, obj));
  }

});
  };
  const error = state.useradress?.error?.error
  const anyFieldHasValue = Object.values(state.useraddress || {}).some(field => field !== '');

  useEffect(() => {
    if (state.useradress?.error?.error && Object.keys(state.useradress.error.error).length > 0) {
      showErrorAlert(state.useradress.error.error);
    }
  }, [state.useradress?.error?.error]);

  const showErrorAlert = (error) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: Object.keys(error).map((key) => error[key].map((message) => `<span>${key}:<span> ${message}</p>`)).join(''),
      confirmButtonColor: '#d33',
    });
  };
  
  return (
    <>
      <div className="container py-5">
        <Link
          to={"/adress"}
          className="py-4 text-secondary text-decoration-none"
        >
          <span className="pe-1 ">
            <MdArrowBackIosNew />
          </span>
          Back To Account
        </Link>
        <div className="fs-4 fw-medium pt-3"> My Address</div>

        <button
          type="button"
          class=" buttons_hover p-2 px-4 my-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
        ADD A NEW ADDRESS
        </button>
   
        <div
          class="modal fade "
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable ">
            <div class="modal-content">
              <div class="text-end border-0">
                <button
                  type="button"
                  class="btn-close bg-secondary-subtle p-2 m-2 rounded-circle"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center">
                <div className="fs-4 fw-medium ">Add a new address</div>
                <div>Please fill in the information below:</div>
                <div className="container">
                  <form>
                    <div className="my-3">
                      <input
                        onChange={getdata}
                        value={obj?.first_name}
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        className="w-100 p-1"
                      />
                    </div>
                    <div className="my-3">
                      <input
                        onChange={getdata}
                        value={obj?.last_name}
                        type="text"
                        name="last_name"
                        placeholder="Last name"
                        className="w-100 p-1"
                      />
                    </div>
                    <div className="my-3">
                      <input
                        onChange={getdata}
                        value={obj?.company}
                        type="text"
                        name="company"
                        placeholder="Company"
                        className="w-100 p-1"
                      />
                    </div>
                    <div className="my-3">
                      <input
                        onChange={getdata}
                        value={obj?.phone_number}
                        type="text"
                        name="phone_number"
                        maxLength={10}
                        placeholder="Phone"
                        className="w-100 p-1"
                      />
                    </div>
                    <div className="my-3">
                      <input
                        onChange={getdata}
                        value={obj?.address_one}
                        type="text"
                        name="address_one"
                        placeholder="Address 1"
                        className="w-100 p-1"
                      />
                    </div>
                    <div className="my-3">
                      <input
                        onChange={getdata}
                        value={obj?.address_two}
                        type="text"
                        name="address_two"
                        placeholder="Address 2"
                        className="w-100 p-1"
                      />
                    </div>
                    <div className="my-3">
                      <input
                        onChange={getdata}
                        value={obj?.city}
                        type="text"
                        name="city"
                        placeholder="City"
                        className="w-100 p-1"
                      />
                    </div>
                    <div className="row m-0 p-0">
                      <div className="col-12 p-0 col-lg-6 col-md-6 pe-0 pe-lg-1">
                        <select
                          name="country"
                          id="Country"
                          value={obj?.country}
                          className="w-100 p-1 h-100"
                          onChange={getdata}
                        >
                          <option value="" disabled selected>
                            Country
                          </option>
                          <option value="India">India</option>
                        
                        </select>
                      </div>
                      <div className="col-12 p-0 col-lg-6 col-md-6 my-3 my-lg-0">
                        <div className="ps-0 ps-lg-1">
                          <input
                            type="text"
                            name="zip_code"
                            value={obj?.zip_code}
                            placeholder="Zip Code"
                            className="w-100 p-1"
                            onChange={getdata}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="my-0 my-lg-3">
                    <select
    name="state"
    value={obj?.state}
    className="w-100 p-2"
    onChange={getdata}
>
    <option value="" disabled selected>
        State
    </option>
    <option value="Andaman island">Andaman Island</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
    <option value="Daman and Diu">Daman and Diu</option>
    <option value="Delhi">Delhi</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Puducherry">Puducherry</option>
</select>

                    </div>
                    <div className="text-start my-3 my-lg-0">
                      <input type="checkbox" className="p-1" /> set as default
                      address
                    </div>
                    <div class="modal-footer border-0 w-100 p-0">
                      <button
                        type="button"
                        className="buttons_hover p-2 w-100 my-3"
                        onClick={savedata}
                        data-bs-dismiss="modal"
                      >
                        ADD A NEW ADDRESS
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0 p-0 g-4">
          {state.useradress.address?.map((x, i) => {
            return (
              <>
                <div className="col-12 col-lg-4" key={i}>
                  <div>
                    <div className="w-100 border-bottom border-1 py-2 text-secondary">
                      Address {i + 1}
                    </div>
                    <div className="py-3">{x.first_name}</div>
                    <div>{x.country}</div>
                    <div className="py-2">
                      <Link
                        to={"/"}
                        className="text-secondary px-2 ps-0"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => editdata(x.id)}
                      >
                        Edit
                      </Link>
                      <Link
                        className="text-secondary px-2"
                        onClick={() => deletdata(x.id, x)}
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Hoc(AddressEdit);
