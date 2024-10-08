import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, getAddress } from "../redux/actions/adressAction";
import useRazorpay from "react-razorpay";
import axios from "axios";
import Swal from "sweetalert2";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";

const CheckOut = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState("Cash_on_delivery");
  const [selectedOption3, setSelectedOption3] = useState(null);
  const[price , setPrice] = useState(0);
  const [expressShiping, setExpressShiping] = useState('')
  const [obj, setobj] = useState({});
  const [array, setarray] = useState([]);
  const [blankobj, setblankobj] = useState({});
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [deliveryAdd, setDeliveryAdd] = useState('')
  const [Razorpay] = useRazorpay();
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    dispatch(getAddress(localStorage.getItem("user_id")))
   }, [dispatch])

  let getdata = (e) => {
    obj[e.target.name] = e.target.value;
    blankobj[e.target.name] = "";
    setobj({ ...obj });
    setblankobj({ ...blankobj });
  };

  let savedata = () => {
    obj.phone_number = `+91${obj.phone_number}`;
    if (obj.id) {
      // dispatch(editAdress(obj.id, obj));
    } else {
      obj.user = localStorage.getItem("user_id");
      dispatch(addAddress(obj));
    }
    setarray([...array]);
    setobj({ ...blankobj });
  };

  useEffect(() => {
    const totalPrice = state.addcart.addcart.data?.reduce((total, item) => total + item.product_rate , 0);
    setPrice(totalPrice);
}, [state.addcart.addcart.data]);

  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
    const ship = Number(event.target.value)
    if(typeof(ship) === "number"){
      setExpressShiping(ship)
    }else{
      setExpressShiping('')
    }
  };

  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.id);
  };
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const selecteDeleveryAdd=(obj,index)=>{
    setDeliveryAdd(obj)
    setSelectedAddressIndex(index);

  }

  

  const paymentMethod=async()=>{
    if(deliveryAdd && selectedOption2){
      let paymentObj={
        user:localStorage.getItem("user_id"),
        name:deliveryAdd.first_name,
        amount:price+expressShiping,
        address_id:deliveryAdd.id,
        cart:state.addcart.addcart.data,
        shipment_price:expressShiping,
        payment_type:selectedOption2
      }
      
    const response =await axios.post(`${process.env.REACT_APP_SERVER_URL}api/order-details/`,paymentObj)
    const data =  response;
    
    setOrderId(data.data.data.order_id);
    if(selectedOption2 === "Razor_pay"){
      var options = {
        key: "rzp_test_3seC5hn0lbL7kG",
        amount: (data.data.data.amount),
        currency: "INR",
        name: "Leekus",
        description: "Test Transaction",
        image: require("../assets/images/KP LOGO.png"),
        order_id: data.data.data.order_id,
        handler: async function (response) {
         
          verifyPayment(response);
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3399cc"
        }
      };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }else{
      if (data.data.data.status === 'SUCCESS') {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}api/add-to-cart/?user_id=`+localStorage.getItem("user_id")).then((res)=>{
          Swal.fire({
            title: "Your Order Success!",
            text: "You clicked the button!",
            icon: "success"
          });
          setTimeout(() => {
            window.location.href="/yourorder"
            
          }, 3000);
        })
      } else {
          Swal.fire({
            title: "Payment Failed!",
            text: data.data.message,
            icon: "error"
          });
      }
    }
    }else{
    
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Please select your Address"
      });
    }
  }
  const verifyPayment = async (response) => {
   
    // Send payment details to backend for verification
    const payload = {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature:response.razorpay_signature
    };
    const verifyResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}api/verify_payment/`,payload)
    const data = await verifyResponse;
    if (data.data.status === 'SUCCESS') {
      axios.delete(`${process.env.REACT_APP_SERVER_URL}api/add-to-cart/?user_id=`+localStorage.getItem("user_id")).then((res)=>{
        window.location.href="/yourorder"
      })
    } else {
        Swal.fire({
          title: "Payment Failed!",
          text: data.data.message,
          icon: "error"
        });
    }
};


// error shoew


useEffect(() => {
    // Display error using SweetAlert
    if (state.useradress?.error?.error && Object.keys(state.useradress.error.error).length > 0) {
      showErrorAlert(state.useradress.error.error);
    }
  }, [state.useradress?.error?.error]);

const error = state.useradress?.error?.error

const anyFieldHasValue = Object.values(state.useraddress || {}).some(field => field !== '');

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
     <div className="checkoutbg">
     <div className="container ">
        <h1 className="text-center"><img src={require('../assets/images/KP LOGO.png')} className="img-fluid" style={{width:'200px',height:''}} alt="" /></h1>
        <div>
          <Link to={'/cartadd'}><button  className="btn text-secondary border-black">Back To Cart</button></Link>
        </div>
        <div className="row ">
          <div className="col-lg-6 mt-5 border border-black rounded-2 bg-white">
 <div>
              <h4>Delivery  <CiDeliveryTruck className="fs-1"/></h4>
              <button
          type="button"
          class=" buttons_hover p-2 px-4 my-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          ADD A NEW ADDRESS
        </button>
              {state.useradress.address.map((x, i) => (
        <div className={`mb-5 border border-1 p-2 overflow-hidden `} style={{backgroundColor: selectedAddressIndex === i ? "var(--checkout)":''}} key={i}>
          <div className="row">
            <div className="col-auto">
              <input
                className="form-check-input"
                style={{ cursor: 'pointer' }}
                type="radio"
                name="selectaddress"
                id={`Check${i}`}
                onChange={() => selecteDeleveryAdd(x, i)}
              />
            </div>
            <div className="col-9">
              <label className="form-check-label ps-2" htmlFor={`Check${i}`} style={{ cursor: 'pointer' }}>
                <span className="fw-bold">{x.first_name}</span>&nbsp;
                <span className="fw-bold">{x.last_name}</span>
                <p className="m-0 fw-bold prisefont">{x.phone_number}</p>
                <address>
                  {x.address_one},
                  {x.address_two},
                  {x.city},
                  {x.zip_code},
                  {x.state},
                  {x.country},
                </address>
              </label>
            </div>
          </div>
        </div>
      ))}
            </div>

            <div className="mb-3 ">
              <h6>Shipping Method <LiaShippingFastSolid className='fs-2' />  </h6>
              <div style={{ border: "1px solid whitesmoke" }}>
                <div
                  className="p-3 "
                  style={{
                    border:
                      selectedOption === "flexRadioDefault1"
                        ? "1px solid black"
                        : "1px solid whitesmoke",
                    backgroundColor:
                      selectedOption === "flexRadioDefault1"
                        ? "var(--checkout)"
                        : "transparent",
                  }}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input me-3 "
                      style={{ cursor: "pointer" }}
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onChange={handleOptionChange}
                      value={""}
                    />
                    <label
                      className="form-check-label d-flex justify-content-between"
                      style={{ cursor: "pointer" }}
                      htmlFor="flexRadioDefault1"
                    >
                      Free Shipping (Cash on Delivery)
                      <span className="me-2 ms-sm-2 ms-2">Free</span>
                    </label>
                  </div>
                </div>
                <div
                  className="p-3"
                  style={{
                    border:
                      selectedOption === "flexRadioDefault2"
                        ? "1px solid black"
                        : "1px solid whitesmoke",
                    backgroundColor:
                      selectedOption === "flexRadioDefault2"
                        ? "var(--checkout)"
                        : "transparent",
                  }}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input me-3 mt-3"
                      style={{ cursor: "pointer" }}
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      onChange={handleOptionChange}
                      value={""}
                    />
                    <label
                      className="form-check-label d-flex justify-content-between"
                      style={{ cursor: "pointer" }}
                      htmlFor="flexRadioDefault2"
                    >
                      Free Shipping (4-5 working days) <br />
                      This shipping option is eligible for Cash on Delivery.
                      <span className="me-2 ms-sm-2 ms-2">Free</span>
                    </label>
                  </div>
                </div>
                <div
                  className="p-3"
                  style={{
                    border:
                      selectedOption === "flexRadioDefault3"
                        ? "1px solid black"
                        : "1px solid whitesmoke",
                    backgroundColor:
                      selectedOption === "flexRadioDefault3"
                        ? "var(--checkout)"
                        : "transparent",
                  }}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input me-3 "
                      style={{ cursor: "pointer" }}
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      onChange={handleOptionChange}
                      value={"200"}
                    />
                    <label
                      className="form-check-label d-flex justify-content-between"
                      style={{ cursor: "pointer" }}
                      htmlFor="flexRadioDefault3"
                    >
                      Express Shipping (2-3 working days)
                      <span className="me-2 ms-sm-2 ms-2 prisefont">₹200.00</span>
                    </label>
                  </div>
                </div>
                <div
                  className="p-3"
                  style={{
                    border:
                      selectedOption === "flexRadioDefault4"
                        ? "1px solid black"
                        : "1px solid whitesmoke",
                    backgroundColor:
                      selectedOption === "flexRadioDefault4"
                        ? "var(--checkout)"
                        : "transparent",
                  }}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      style={{ cursor: "pointer" }}
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      onChange={handleOptionChange}
                      value={"600"}
                    />
                    <label
                      className="form-check-label d-flex justify-content-between"
                      style={{ cursor: "pointer" }}
                      htmlFor="flexRadioDefault4"
                    >
                      Next Day Delivery (Within 48 hrs)
                      <span className="me-2 ms-sm-2 ms-2 prisefont">₹600.00</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <h4>Payment <MdOutlinePayment className="fs-2" /></h4>
              <p>All transactions are secure and encrypted.</p>
              <div style={{ border: "1px solid whitesmoke" }}>
                <div
                  className="p-3"
                  style={{
                    cursor: "pointer",
                    border: "1px solid whitesmoke",
                    backgroundColor:
                      selectedOption2 === "Razor_pay"
                        ? "var(--checkout)"
                        : "transparent",
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <div
                    className="form-check"
                    style={{
                      padding: "30px",
                      border:
                        selectedOption2 === "Razor_pay"
                          ? "1px solid black"
                          : "1px solid white",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                  >
                    <input
                      className="form-check-input me-3 mt-3 "
                      style={{ cursor: "pointer" }}
                      type="radio"
                      name="payment"
                      id="flexRadioDefault7"
                      value={"Razor_pay"}
                      checked={selectedOption2 === "Razor_pay"}
                      onChange={handleOptionChange2}
                    />
                    <label
                      className="form-check-label d-flex justify-content-between "
                      style={{ cursor: "pointer" }}
                      htmlFor="flexRadioDefault7"
                    >
                      Cashfree Payment <br />
                      (UPI,Cards,Wallets,NetBanking)
                      <span className="me-2 ms-sm-2 ms-2">Free</span>
                    </label>
                  </div>
                  <div
                    style={{
                      display:
                        selectedOption2 === "Razor_pay"
                          ? "block"
                          : "none",
                    }}
                  >
                    <p className="text-center">
                      After clicking “Pay now”, you will be redirected to
                      Cashfree Payment (UPI,Cards,Wallets,NetBanking) to
                      complete your purchase securely.
                    </p>
                  </div>
                </div>

                <div
                  className="p-3"
                  style={{
                    cursor: "pointer",
                    border: "1px solid whitesmoke",
                    backgroundColor:
                      selectedOption2 === "Cash_on_delivery"
                        ? "var(--checkout)"
                        : "transparent",
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <div
                    className="form-check"
                    style={{
                      padding: "30px",
                      border:
                        selectedOption2 === "Cash_on_delivery"
                          ? "1px solid black"
                          : "1px solid white",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                  >
                    <input
                      className="form-check-input me-3"
                      style={{ cursor: "pointer" }}
                      type="radio"
                      name="payment"
                      id="flexRadioDefault8"
                      value={"Cash_on_delivery"}
                      checked={selectedOption2 === "Cash_on_delivery"}
                      onChange={handleOptionChange2}
                    />
                    <label
                      className="form-check-label d-flex justify-content-between"
                      style={{ cursor: "pointer" }}
                      htmlFor="flexRadioDefault8"
                    >
                      Cash on Delivery (COD)
                    </label>
                  </div>
                  <p
                    className="text-center"
                    style={{
                      display:
                        selectedOption2 === "Cash_on_delivery"
                          ? "block"
                          : "none",
                    }}
                  >
                    Not available on custom-made orders. <br />
                    Not available on Same Day Delivery and Next Day Delivery.
                    <br />
                    Not available on international orders.
                  </p>
                </div>
              </div>
            </div>
            <button
              className=" text-center w-100 mb-3 buttons_hover rounded-3 text-white border-2 mt-3 d-lg-block d-none"
              style={{ height: "60px", backgroundColor: "var(--checkout)" }}
              onClick={paymentMethod}
            >
              {selectedOption2 === "Razor_pay"?"Pay Now":"Order Now"}
             
            </button>
          </div>

          <div
            className="col-lg-6 mt-5 position-sticky top-0 shadow-lg rounded-3 border border-1 border-black bg-white"
            style={{ backgroundColor: "", height: "100vh" }}
          >
            {
              state.addcart.addcart.data?.map((x,i)=>{
                return(
            <div className="row mt-5" key={i}>
              <div className="col-lg-1  "> </div>

              <div className="col-lg-2 ">
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}${x.colour_info.image[0]}`}
                  style={{
                    height: "94px",
                    width: "94px",
                    border: "1px solid black",
                    borderRadius: "3px",
                  }}
                  className="object-fit-cover"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="col-6 mt-lg-0 mt-4 ps-lg-4">
                <h6>{x.product_info.product_name}</h6>
                <p>{x.size_info.size_name}/{x.size_info.select_size}</p>
              </div>
              <div className="col-3 d-flex align-items-center prisefont">
                <h6>₹{x.product_rate}</h6>
              </div>
              <hr className="mt-5"/>
            </div>
          
        )
      })
}
            <div className="row mt-5">
              <div className="col-lg-1"></div>
              <div className="col-lg-11">
                <div className="row">
                  
                  <div className="col-lg-6 col-6">
                    <p>Subtotal :-</p>
                    <p>Shipping :-</p>
                    <h5>Total :-</h5>
                    <p>Including All Taxes</p>
                  </div>
                  <div className="col-lg-5 col-6 d-flex flex-column align-items-end">
                    <h6 className="prisefont"><strong> ₹ {price}</strong></h6>
                    
                    <p className="ms-sm-3 ms-0 mt-2 ">{expressShiping ? expressShiping :"Free shipping"}</p>
                    
                    <p>
                      <span className="shadow-lg" style={{ fontWeight: "bold", fontSize: "20px" }}>
                        <p className="prisefont"><strong>Total: ₹ {price + expressShiping}</strong></p>
                      </span>{" "}
                    </p>
                    <button
              className=" text-center w-100 mb-3 buttons_hover rounded-3 text-white border-2 mt-3 d-lg-none d-block"
              style={{ height: "60px", backgroundColor: "var(--checkout)" }}
              onClick={paymentMethod}
            >
             Pay Now
            </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
      <div>
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
                        required
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
                        placeholder="Phone"
                        className="w-100 p-1"
                        maxLength={10}
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
                          <option value="" selected>
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
                        ADD ADDRESS
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
