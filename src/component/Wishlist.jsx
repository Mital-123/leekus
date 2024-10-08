import React, { useEffect, useState } from 'react'
import { wishlist, wishlistdata } from '../redux/actions/wishlistAction';
import { addCartData } from '../redux/actions/addCartAction';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Hoc from './Hoc';

function Wishlist() {


        const state = useSelector(state => state)
     
        const products = state.wish?.wish?.data
    
    
      
    const dispatch = useDispatch()
    useEffect(() => {
     
      if(localStorage.getItem("user_id")){
        dispatch(wishlistdata(localStorage.getItem("user_id")))
      }
      }, [localStorage.getItem("user_id")])
    
      
        
        const [sizeid, setsizeid] = useState()
    
        const addToCart = (product)=>{
           
             const obj = {
              product_id : product.product_info.product_id,
              size_id: sizeid || product.size_info?.at(0).id,
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
        
          setsizeid(selectedSize.id)
        }
     
    
    
  return (
    <>
     

<div className='container'>
<div>
        <h2 className='borderbottom mx-auto' style={{width:'fit-content'}}>Wishlist</h2>
     </div>

        {/* {/ <!-- Wishlist tab content --> /} */}
          <div style={{width: "100%" , overflowX: "auto"}}>
          <table style={{ minWidth: "900px" }} className='cart-watch'>
      <thead>
        <tr>
          <th>Product</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Size</th>
          <th>Action</th>
          <th></th>
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
            <td className='prisefont'>₹ {selectedSizes[index] ? product.size_info.find(size => size.size_name === selectedSizes[index]).product_price : product.size_info[0].product_price}</td>
            <td>
              {/* Render select dropdown */}
              <select className="form-select w-75" aria-label= "Default select example" onChange={(e) => handleSizeChange(index, e.target.value)}>
                {product.size_info.map((size, index) => (
               
                  <option key={index} value={size.size_name}>{size.size_name}</option>
                ))}
              </select>
            </td>
            <td><a onClick={()=>removewish(product)} className="text-dark link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Remove</a></td>
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
    
    
    
    </>
  )
}

export default Hoc(Wishlist)