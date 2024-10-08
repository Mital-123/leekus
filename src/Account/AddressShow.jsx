import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hoc from '../component/Hoc'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutaction } from '../redux/actions/logoutAction';
import { TbShoppingCartCopy } from "react-icons/tb";
import { getAddress } from '../redux/actions/adressAction';

function AddressShow() {
 
  const dispatch = useDispatch();
    const state = useSelector((state) => state);
    useEffect(() => {
      dispatch(getAddress())
     }, [dispatch])
    const userid = state.user.users.id;
   const usid =  localStorage.setItem("user_id", userid)    
    const access = state.user.users.token?.access;
const logout = ()=>{
  localStorage.clear()
  dispatch(logoutaction(access))   
}
  return (
    <>
   <div className='container py-5'>
   <button className='btn border-black'> <Link to={"/"} className="py-4 text-secondary text-decoration-none" onClick={logout}>Logout</Link></button>
    <div className='fs-4 fw-medium pt-3'> My Account</div>
    <div className='py-1'> Welcome Back, {state.user.users.user_email}</div>
   
       <div className='text-center mt-3'>
       <Link to={"/cartadd"} className='text-secondary bg-secondary-subtle p-2 px-5 fs-5'> Go To Cart</Link>
       </div>
   <div className='row m-0 p-0 g-4'>
<div className='col-12 col-lg-9'>
    <div>
        <div className='w-100 border-bottom border-1 py-2 text-secondary'>My Orders</div>
        <div className='py-3'> <button className='btn border border-dark'><Link to={'/yourorder'} className='nav-link'>Your Order <TbShoppingCartCopy className='fs-3'/></Link></button></div>
    </div>
</div>
<div className='col-12 col-lg-3'>
    <div>
        <div className='w-100 border-bottom border-1 py-2 text-secondary'>My Address</div>
        <div className='py-3'>{state.useradress.address[0]?.first_name}</div>
        <div >{state.useradress.address[0]?.state}</div>
      <div className='my-4'>
      <Link to={"/adressedit"} className='buttons_hover p-2 px-4 text-decoration-none'>MANAGE ADDRESS</Link>
      </div>
    </div>
</div>
   </div>
   </div>
    </>
  )
}

export default Hoc(AddressShow)