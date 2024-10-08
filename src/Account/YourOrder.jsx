import React, { useEffect } from 'react'
import Hoc from '../component/Hoc'
import { useDispatch, useSelector } from 'react-redux'
import { orderCancleAction, orderDetailAction } from '../redux/actions/oederDetailAction';
import axios from 'axios';
import { TbShoppingCartCopy } from "react-icons/tb";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function YourOrder() {
const state = useSelector(state => state)
 const dispatch = useDispatch();
useEffect(() => {
  dispatch(orderDetailAction())
}, [])

const cancleOrder=(id)=>{

  Swal.fire({
    title: "Are you sure?",
    text: "You want to cancel your order!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, cancel it!",
    cancelButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Cancelled!",
        text: "Your Order has been Cancelled.",
        icon: "success"
      });
      dispatch(orderCancleAction(id))
    }
  });
}


const formatDateTime = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
};

  return (
    <>
  <section className=" gradient-custom-2 ">
  <div className='d-flex justify-content-center pt-4'>
  <h2 className='' style={{borderBottom:'2px solid black',padding:"8px"}}><Link to={'/yourorder'} className='nav-link'>Your Order <TbShoppingCartCopy className='fs-2'/></Link></h2>
  </div>
      <div className="container py-3 ">
        <div className="row d-flex justify-content-center ">
        {
 state.orderdetail.orderdetail?.data_list?.map((order, index) => (
    <div className="col-md-10 col-lg-8 col-xl-6 mt-5 overflow-hidden" key={order.order_id}>
      <div className="card card-stepper" style={{ borderRadius: "16px" }}>
        <div className="card-header p-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="text-muted mb-2"> Order ID : <span className="fw-bold text-body">{order.order_id}</span></p>
             
              <p className="text-muted mb-0"> Order On : <span className="fw-bold text-body">{formatDateTime(order.date_time)}</span> </p>
            </div>
            <div>
             
            </div>
          </div>
        </div>
        <div className="card-body p-4">
       
          {order.cart_info.cart_info.map((product, idx) => (
          
            <div className="d-flex flex-row mb-4 pb-2" key={idx}>
              <div className="flex-fill">
                <h5 className="bold">{product.product_info.product_name}</h5>
                <p className="text-muted prisefont"> Qt: {product.quantity} item</p>
                <h4 className="mb-3 prisefont"> ₹ {product.product_rate} <span className="small text-muted"> via {order.payment_type === "Razor_pay" ? "(UPI)" : "(COD)"} </span></h4>
                <p className="text-muted">Tracking Status on: <span className="text-body">11:30pm, Today</span></p>
           <strong>Adress:</strong>
                <address>
                            {order.address.address_one},
                            {order.address.city},
                            {order.address.zip_code},
                            {order.address.state},
                            {order.address.country},
                        </address>
              </div>
              <div>
                <img className="align-self-center img-fluid object-fit-contain"
                  src={`${process.env.REACT_APP_IMAGE_URL}${product.colour_info.image[0]}`} style={{height:'250px'}} width="250" alt="Product" />
              </div>
            </div>
          ))}
          <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
         
            <li className={`step0 abs active`} id="step1"><span style={{ marginLeft: "22px", marginTop: "12px" }}>PLACED</span></li>
            <li className={`step0 ${order.delivery_status === "SHIPPED" || order.delivery_status === "DELIVERED" ? 'active':''}  text-center`} id="step2"><span>SHIPPED</span></li>
            <li className={`step0 ${order.delivery_status === "DELIVERED" && 'active'} text-muted text-end`} id="step3"><span style={{ marginRight: "22px" }}>DELIVERED</span></li>
          </ul>
        </div>
        <div className="card-footer p-4">
          <div className="d-flex justify-content-between">
            <h5 className="fw-normal mb-0"><a href="#!">Track</a></h5>
            <div className="border-start h-100"></div>
            <h5 className="fw-normal mb-0" onClick={()=>cancleOrder(order.id)}><a href="#!">Cancel</a></h5>
          </div>
        </div>
      </div>
    </div>
  ))
}         
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Hoc(YourOrder)