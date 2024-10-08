import React, { useEffect, useState } from 'react'
import Hoc from '../component/Hoc'
import { userAction } from '../redux/actions/createAction';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import OTPInput from 'react-otp-input';
import { toast, Toaster } from "react-hot-toast";
import { auth,firebase} from "../component/firebase";

function CreateUser() {
    const [obj, setobj] = useState({});
    const [errormsg, seterrormsg] = useState({});
  const [blankobj, setblankobj] = useState({});
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [showCaptcha, setshowCaptcha] = useState(true)
  const [showverify, setshowverify] = useState(true)
  const [enablebtn, setEnablebtn] = useState(true)
  const dispatch = useDispatch();
  const navigte = useNavigate();

  const [user, setUser] = useState(null);


 
  

  const getdata = (e)=>{
    obj[e.target.name] = e.target.value;
    blankobj[e.target.name] = "";
     // first_name validation

     if (e.target.name === "first_name") {
        if (e.target.value?.length <= 0) {
          errormsg.first_name = "First name is requird";
        } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
          errormsg.first_name = "name must be in alphabets characters";
        } else {
          delete errormsg.first_name;
        }
      }
  

     // lastname validation

     if (e.target.name === "last_name") {
        if (e.target.value?.length <= 0) {
          errormsg.last_name = "Last name is requird";
        } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
          errormsg.last_name = "name must be in alphabets characters";
        } else {
          delete errormsg.last_name;
        }
      }
  
      // email validation
      if (e.target.name === "email") {
        if (obj.email?.length <= 0) {
          errormsg.email = "email is required";
        } else if (
          !(
            obj.email?.includes("@gmail.com") || obj.email?.includes("@yahoo.com")
          )
        ) {
          errormsg.email = "email is not valid";
        } else {
          errormsg.email = "";
        }
      }

      
    // password validation

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
     
  }
  const savedata = ()=>{
    setobj({...obj})
    

    if (obj.first_name === "" || obj.first_name === undefined) {
        errormsg.first_name = "please enter your First name";
      }


    if (obj.last_name === "" || obj.last_name === undefined) {
        errormsg.last_name = "please enter your last name";
      }

    if (obj.phone_number === "" || obj.phone_number === undefined) {
        errormsg.phone_number = "please enter your number";
      }


      if (obj.email === "" || obj.email === undefined) {
        errormsg.email = "please enter your email";
      }

      if (obj.password === undefined || obj.password === "") {
        errormsg.password = "password is required";
      }
      if (Object.values(errormsg).every((x) => x === "")) {
        setobj({ ...obj });
          setobj({ ...blankobj });
          dispatch(userAction(obj,navigte));
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
            title: "Create User successfully"
          });
         
      
      }


seterrormsg({ ...errormsg });

}

const [show, setshow] = useState(false);
	const [final, setfinal] = useState("");
const signin = () => {

  if (obj.phone_number === "" || obj.phone_number?.length < 10) return;

  let verify = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );

  auth.signInWithPhoneNumber(obj.phone_number, verify)
    .then((result) => {
      setfinal(result);
  setShowOTPInput(true)
  setshowCaptcha(false)
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Otp Send successfully"
  });
  
      setshow(true);
      setshowverify(false)
    })
    .catch((err) => {
      alert(err);
      window.location.reload();
    });
};




const [otp, setOtp] = useState('');




const verifyOTP =  () => {
  setShowOTPInput(false);
  if (otp === null || final === null) return;
		final
			.confirm(otp)
			.then((result) => {
        setEnablebtn(false)
        setshowverify(false)
        const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Verify Mobile successfully"
  });
			
			})
			.catch((err) => {
        setShowOTPInput(true)
				alert("Wrong code");
			});
}
  return (
   <>
   
   <div className="container mb-5">
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <h3 className=' text-center mt-5'>Register</h3>
                <p className='mt-2 text-center'> Please fill in the information below:</p>
                <form className='mt-5'>
                <div className="row">
                    <div className="mb-3 col-lg-12">
                        <input type="text" name='first_name' value={obj.first_name} className="form-control" onChange={getdata} placeholder='First Name' id="exampleInputPassword1" required/>
                        <span className="text-danger">{errormsg.first_name}</span>
                    </div>
                    <div className="mb-3 col-lg-12">
                        <input type="text" name='last_name' value={obj.last_name} className="form-control" onChange={getdata}  placeholder='Last Name' id="exampleInputPassword2" required/>
                        <span className="text-danger">{errormsg.last_name}</span>
                    </div>
                  <div className="mb-3 col-lg-12">
            <div className="input-group">
                <input type="text" name='phone_number' value={obj.phone_number  || '+91'} className="form-control" onChange={getdata} placeholder='Mobile No' id="number" required/>
                <span className="input-group-btn">
                {showverify && (
                    <button className="btn  buttons_hover"  type="button" onClick={signin}>Verify</button>
                  )}
                </span>
            </div>
            {showOTPInput && (
   <div className='mt-3'>
   <OTPInput
      value={otp}
      onChange={(e) => {
        
        setOtp(e);
      }}
      numInputs={6}
      renderSeparator={<span>-</span>}
      className="otp-input"
      inputStyle={{
        width: '50px', 
        height: '50px', 
        fontSize: '1.2em', 
        margin: '0 5px', 
        textAlign: 'center', 
        borderRadius: '5px', 
        border: '1px solid #ccc',
        
      }}
      renderInput={(props) => <input {...props} />}
    />
     <button className="btn btn-primary mt-3" onClick={verifyOTP}>
                  Verify OTP
                </button>
   </div>
    )}
    <div style={{
						display: !show ? "block" : "none",
					}}>

   <div id="recaptcha-container"></div>
    </div>
            <span className="text-danger">{errormsg.phone_number}</span>
        </div>
                    <div className="mb-3 col-lg-12">
                        <input type="email" name='email' value={obj.email} className="form-control" onChange={getdata} id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" required/>
                        <span className="text-danger">{errormsg.email}</span>
                       </div>
                </div>
                <div className="mb-3 ">
                        <input type="password" value={obj.password} name='password' className="form-control" onChange={getdata} placeholder='password' id="exampleInputPassword1" required/>
                        <span className="text-danger">{errormsg.password}</span>
                </div>
 <button className='w-100 btn text-center buttons_hover py-2 fw-medium' disabled={enablebtn} type='button'  onClick={savedata} style={{letterSpacing:'0.2em'}}>CREATE MY ACCOUNT</button>
                </form>
               <div className='d-flex justify-content-center mt-3 mb-4'>
               <h6>Already have an account? <Link to={'/login'}>Login</Link></h6>
               </div>
            </div>
            <div className="col-lg-3"></div>  
        </div>
      </div>
   
   </>
  )
}

export default Hoc(CreateUser)