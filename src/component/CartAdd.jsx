import React, { useEffect, useState } from 'react'
import Hoc from './Hoc';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { wishlist, wishlistdata } from '../redux/actions/wishlistAction';
import { AddCartAction, addCartData } from '../redux/actions/addCartAction';
import Swal from 'sweetalert2';
import { TbShoppingCartCopy } from "react-icons/tb";

function CartAdd() {
    const[number , setNumber] = useState(1)
    const[price , setPrice] = useState(0);

    const state = useSelector(state => state)
  
    const products = state.wish?.wish?.data


    const addtocart =state.addcart.addcart.data;
const dispatch = useDispatch()
useEffect(() => {
  if(localStorage.getItem("user_id")){
    dispatch(wishlistdata(localStorage.getItem("user_id")))
    dispatch(AddCartAction(localStorage.getItem("user_id")))
  }
  }, [localStorage.getItem("user_id")])

    useEffect(() => {
      setCartItems(addtocart);
    }, [addtocart]);
    
    const [sizeid, setsizeid] = useState([])

    const addToCart = (product)=>{
        
         const sizeiddata = product.size_info?.at(0).id
         const obj = {
          product_id : product.product_info.product_id,
          size_id: sizeid.length > 0 ? sizeid : [sizeiddata],
          colour_id: product.colour_info?.at(0).colour_id,
          user_id: localStorage.getItem("user_id"),
          quantity: 1,
         status : true
         }
       
         const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Added to Add To Cart successfully"
        });

        dispatch(addCartData(obj,localStorage.getItem("user_id")))
    }
   

    const removewish =(product)=>{
    
        const id = product.product_info.
        product_id;
        const colorid= product.colour_info[0].
        colour_id;
      const obj = {
        product_id: id,
        colour_id: colorid,
        user_id: localStorage.getItem("user_id"),
        status: false
    };
    dispatch(wishlist(obj))
    localStorage.removeItem(`heartColor_${id}`)
    }

  
   

    const [selectedSizes, setSelectedSizes] = useState({});
    const handleSizeChange = (index, size) => {
      setSelectedSizes({ ...selectedSizes, [index]: size });
    
      // Find the selected product from the products array based on the index
      const selectedProduct = products[index];
      // Find the size object from the selected product's size_info array based on the selected size name
      const selectedSize = selectedProduct.size_info.find(item => item.size_name === size);
      // Log the size ID to the console

      setsizeid([selectedSize.id])
    }


    // add to cart 
    const [cartItems, setCartItems] = useState(addtocart);
    useEffect(() => {
      const totalPrice = cartItems?.reduce((total, item) => total + item.product_rate , 0);
      setPrice(totalPrice);
  }, [cartItems]);
    
  const handleDecrement = (product) => {

 const obj = {
  product_id :product.product_info.product_id,
  size_id:[ product.size_info.id],
  colour_id:product.colour_info.colour_id,
  user_id: localStorage.getItem("user_id"),
 quantity:product.quantity-1 || 1,
 status : true
 }
 dispatch(addCartData(obj,localStorage.getItem("user_id")))

    const updatedCart = cartItems?.map(item => {
    
      if (item.product_info.product_id === product.product_info.product_id) {
        return {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity // Ensure quantity never goes below 1
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleIncrement = (product) => {
    if (product.quantity < 15) {
        const obj = {
            product_id: product.product_info.product_id,
            size_id: [product.size_info.id],
            colour_id: product.colour_info.colour_id,
            user_id: localStorage.getItem("user_id"),
            quantity: product.quantity + 1,
            status: true
        };
      
        dispatch(addCartData(obj, localStorage.getItem("user_id")));
        const updatedCart = cartItems?.map(item => {
            if (item.product_info.product_id === product.product_info.product_id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        setCartItems(updatedCart);
  
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Maximum Quantity Reached',
            text: 'You cannot add more than 15 items of this product to the cart.',
            timer: 1500,
            showConfirmButton: false,
        });
    }
};


  const removeAddtocart = (product)=>{
    const obj = {
      product_id :product.product_info.product_id,
      size_id: [product.size_info.id],
      colour_id:product.colour_info.colour_id,
      user_id: localStorage.getItem("user_id"),
     quantity:product.quantity ,
     status : false
     }
     dispatch(addCartData(obj,localStorage.getItem("user_id")))
  }


  return (
    <>
      
  <div className="container mt-4 mb-5 ">
     {/* <!-- Button trigger modal --> */}

 
    <div className="col-lg-12" >
    <button className='btn border border-dark'><Link to={'/yourorder'} className='nav-link'>Your Order <TbShoppingCartCopy className='fs-3'/></Link></button>

  <div className="row button_hover_color">
  

    <ul className="nav nav-pills mb-3 mt-5  d-flex justify-content-center   " id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <div >
          <button className="nav-link active  rounded-0   " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
            type="button" role="tab" aria-controls="pills-home" aria-selected="true">Cart ({addtocart?.length>0 ?addtocart?.length:0})</button></div>
        </li>
        <li className="nav-item  " role="presentation">
          <button className="nav-link  rounded-0   " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
            type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Wishlist ({products?.length>0?products?.length:0})</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
          tabindex="0">
          <div className="fs-5 mt-5 mb-5 text-center"> <strong>Your Cart</strong></div>
          <div>
            <div className="table-responsive" style={{width: "100%" , overflowX: "auto"}}>
              <table className="table" style={{minWidth: "500px"}}>
                <thead>
                  <tr>
                    <th scope="col" style={{color: "#939393"}} >Product</th>
                    <th scope="col" style={{color: "#939393"}} >Quantity</th>
                    <th scope="col" style={{color: "#939393"}}>Total</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider" style={{ color: "#939393" }}>
      {cartItems?.map(item => (
     
        <tr key={item.product_info.product_id}>
          <td >
            <div className="d-flex ">
         
              <img style={{ width: "6rem" }} src={`${process.env.REACT_APP_IMAGE_URL}${item.colour_info.image[0]}`} className="img-fluid  object-fit-cover" alt="..." />
              <span className="d-flex flex-column ms-4 mt-5">
                <span>{item.product_info.product_name}</span>
                <span className='text-dark'>{item.size_info.size_name}</span>
                <span className='prisefont text-dark' >₹ {item.size_info.product_price}</span>
              </span>
            </div>
          </td>
          <td >
            <div style={{ borderCollapse: "collapse" }} className="btn-group mt-3 " role="group" aria-label="Small button group">
              <button type="button" className="btn btn-outline-dark rounded-0" onClick={() => handleDecrement(item)}>-</button>
              <span type="bundle" className="btn btn-outline-white border-black rounded-0 prisefont text-dark">{item.quantity}</span>
              <button type="button" className="btn btn-outline-dark rounded-0" onClick={() => handleIncrement(item)}>+</button>
            </div><br />
            <div className="mt-4 ">
              <a className="text-dark link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover cursor" onClick={() => removeAddtocart(item)}>Remove</a>
            </div>
          </td>
          <td >
            <p className="mt-5 prisefont fs-5 text-dark">₹ {item.product_rate}</p>
          </td>
        </tr>
      ))}
    </tbody>
              </table>
            </div>
          </div><br/>
          <div className="text-end me-5">
            {addtocart?.length>0 && <p className='prisefont fs-5'><strong>Total: ₹ {price}</strong></p>}
            <p>Get 10% on your first order. Use code WELCOME10 at the checkout.</p>
            <p>Get free international delivery on orders above ₹10000. Use code FREEDEL at the checkout.</p>
            <p>Free shipping & incl. of taxes</p>
            <Link to={addtocart?.length>0?'/checkout':"#"}><button type="button" className="btn buttons_hover rounded-0">CHECKOUT</button></Link>
          </div><br/>
          <hr/>
          <div><br/>
            <h5>So simple to become Woman of Leekus. Did you know?</h5>
            <h5>7 days Free Returns & Exchanges</h5>
            <p className='text-dark'>We're here to make sure you're 100% satisfied with the purchase. If you'd
              like another size or design - just let us know!</p>
            <br/>
            <h5>Free Alterations</h5>
            <p className='text-dark'>Doesn't fit right? Just put in a request and get your clothes altered to
              the perfect size!</p>
          </div><br/>

        </div>

        {/* {/ <!-- Wishlist tab content --> /} */}
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <div style={{width: "100%" , overflowX: "auto"}}>
          <table style={{ minWidth: "900px" }} className='cart-watch'>
      <thead>
        <tr>
          <th>Product</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Size</th>
          <th></th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product, index) => (
          <tr key={index}>
            <td>
              {/* Render product image */}
              <img style={{ width: "6rem", height:'6rem' }} src={`${process.env.REACT_APP_IMAGE_URL}${product.colour_info[0].image[0]}`} className="img-fluid object-fit-cover" alt="..." />
            </td>
            <td><span>{product.product_info.product_name}</span></td>
            <td className='prisefont text-dark'>₹ {selectedSizes[index] ? product.size_info.find(size => size.size_name === selectedSizes[index]).product_price : product.size_info[0].product_price}</td>
            <td>
              {/* Render select dropdown */}
              <select className="form-select w-75" aria-label= "Default select example" onChange={(e) => handleSizeChange(index, e.target.value)}>
                {product.size_info.map((size, index) => (
                
                  <option key={index} value={size.size_name}>{size.size_name}</option>
                ))}
              </select>
            </td>
            <td><a onClick={()=>removewish(product)} className="text-dark link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover cursor">Remove</a></td>
            <td><Link to={'/cartadd'}><button type="button" className="btn  rounded-0 w-100 buttons_hover" onClick={()=>addToCart(product)}>ADD TO CART</button></Link></td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
          <div style={{marginTop:'100px'}}>
            <h5>So simple to become Woman of Leekus. Did you know?</h5>
            <h5 className='mt-2'>7 days Free Returns & Exchanges</h5>
            <h6 className='text-dark'>We're here to make sure you're 100% satisfied with the purchase. If you'd like another size or design - just let us know!</h6>

            <h5 className='mt-5'>Free Alterations</h5>
            <h6 className='text-dark'>Doesn't fit right? Just put in a request and get your clothes altered to the perfect size!</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Hoc(CartAdd)