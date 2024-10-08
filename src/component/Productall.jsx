import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { colorAction, imagedataActionon } from '../redux/actions/imagedataAction';
import { wishlist } from '../redux/actions/wishlistAction';


const Productall = (props) => {

  const state = useSelector((state) => state);

  const [color, setColor] = useState(() => {
    const storedColor = localStorage.getItem(`heartColor_${props.path}`);
    return storedColor ? storedColor : 'regular';
  });

  const [currentImage, setCurrentImage] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [colorHover, setColorHover] = useState('')
const [colorid, setcolorid] = useState('')
const navigate = useNavigate()


  // wishlist 
  const toggle = (id) => {

const obj = {
        product_id: id,
        colour_id: colorid,
        user_id: state.user.users.id,
        status: true
    };


      if(!localStorage.getItem("token")){
        navigate('/login')
  }else{
    if (color === 'regular') {
      setColor('solid');
      setShowPopup(true); 
      setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
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
        title: "Added to wishlist successfully"
      });

       
      dispatch(wishlist(obj,state.user.users.id))

    } else {
      setColor('regular');
      setShowPopup(true); 
      setTimeout(() => setShowPopup(false), 2000); 
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
        icon: "error",
        title: "Removed From Wishlist"
      });
      const obj = {
        product_id: id,
        colour_id: colorid,
        user_id: state.user.users.id,
        status: false
    };
    dispatch(wishlist(obj,state.user.users.id))
    }
    const newColor = color === 'regular' ? 'solid' : 'regular';
      setColor(newColor);
  localStorage.setItem(`heartColor_${props.path}`, newColor);
  };
  }



  
useEffect(() => {
  if (props.colour_wise_image && props.colour_wise_image.length > 0) {
    setCurrentImage(props.colour_wise_image[0].image[0]);
    setColorHover(props.colour_wise_image[0].colour_name);
    setcolorid(props.colour_wise_image[0].colour_id);
   
  } 
}, [props.colour_wise_image]);
const dispatch = useDispatch()

  const addcardpath =(path)=>{
    const proid = `colour_id=${colorid}&product_id=${path}`
    dispatch(imagedataActionon(proid))


  }

  

  const handleMouseOver = (color) => {
    setTimeout(() => {
      props.colour_wise_image?.map((x)=>{
        if (x.colour_name === color){
            setCurrentImage(x.image[1])
  
        }
      })
    }, 200);
  };



  const handleMouseOut = (color) => {
   setTimeout(() => {
    props.colour_wise_image?.map((x)=>{
      if (x.colour_name === color){
          setCurrentImage(x.image[0])

      }
    })
   }, 200);
  
  };
;

  const filterImagesByColour = (colourName) => {

    const filteredImages = props.colour_wise_image.filter(
      (item) =>  item.colour_name === colourName
    );

    const filteredColourIds = filteredImages?.map((item) => item.colour_id);

    // Convert the array of ids to a string
    const filteredColourIdsString = filteredColourIds?.join(',');


    return filteredColourIdsString; // Return the string of colour_ids
};

  const changeImgOnColor = (target) => {
    setcolorid(filterImagesByColour(target))

    setColorHover(target)
    props.colour_wise_image.map((x)=>{
      if (x.colour_name === target){
        x.image.map((img)=>{
          setCurrentImage(img)
          

        })
      }
    })
   
  };



  return (
    <>
    <div className="col-6 col-sm-6 col-md-6 col-lg-3  mt-5 p-1">
    
    <div className="card border-0 procard">
    <Link to={`/productpurchase/${props.product_urlkey}/${props.path}/${colorid}` }  className='text-decoration-none  'onClick={()=>addcardpath(props.path)}>

        <img
          src={`${process.env.REACT_APP_IMAGE_URL}${currentImage}`}
          className="card-img-top img-fluid object-fit-cover "
          alt=""
          onMouseOver={()=>handleMouseOver(colorHover)}
          onMouseOut={()=>handleMouseOut(colorHover)}
        />
     </Link>
        <div className="position-absolute top-0 end-0">
          <i className={`fa-${color} fa-heart heart_icon fa-lg`} onClick={()=>toggle(props.path)}></i>
        </div>
        <div className="card-body text-center mt-1">
        <Link to={`/productpurchase/${props.title}/${props.path}/${colorid}` }  className='nav-link'onClick={()=>addcardpath(props.path)}>  <h6 className="card-title text-capitalize">{props.title}</h6> </Link>
          
        {props.product_old_price === null ? (
        <p className='card-text mt-2 mb-0 prisefont'>
          <i className="fa-solid fa-indian-rupee-sign "></i> {props.price}
        </p>
      ) : (
       <>
            <span className='text-decoration-line-through text-secondary prisefont pe-2'>
            ( <i className="fa-solid fa-indian-rupee-sign "></i> ){props.product_old_price}
            </span>
            <span className='card-text mt-2 mb-0 prisefont'>
          <i className="fa-solid fa-indian-rupee-sign "></i> {props.price}
        </span>
         
       </>
       
      )}
       
          <div className="d-flex justify-content-center">
          {props.colour_name?.map((color, index) => (
          <div
            key={index}
            className="mt-1 cursor"
            style={{
              backgroundColor: color,
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '5px',
              cursor: 'pointer'
            }}
            onClick={() => changeImgOnColor(color)}
          ></div>
        ))}
          </div>
        </div>
      </div>
    
    
      
    </div>
    {showPopup && ( 
        <div className='buttons_hover p-2' style={{position:"fixed" , left:"10px" , bottom:"10px"}}>
          {color === 'solid' ? ' Add to Wishlist' : ' Removed from Wishlist'}
        </div>
      )}
    </>
  );
};

export default Productall;
