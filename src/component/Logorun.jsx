import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from 'react-slick';
import { testiAction } from '../redux/actions/testiAction';
function Logorun() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2200,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4500,
        swipeToSlide: true,
        swipe: false, 
        arrows: false, 
        pauseOnHover: false, 
       
    };


    const state = useSelector(state => state)
  
    const data = state.testimonial.testimonial.data;

    const dispatch = useDispatch();
useEffect(() => {
  dispatch(testiAction())
}, [])


    


  return (
    <>
    <div className='bg-secondary-subtle pt-3 py-5 my-5 '>
<div className='container py-5 pt-0 h-100 logorun'>

<Slider {...settings}  >
{
data?.map((x,i)=>{
    return(
        <>
        <div className='text-center p-3 p-lg-5 pb-lg-2' key={i}> 
   
    <div className='pera_text py-3 logorun_textsize  m-auto h-auto  d-flex align-content-center align-items-center justify-content-center h-100'>
{x.description}
    </div>
</div>
        </>
    )
})
}
</Slider>
    </div>
</div>
    </>
  )
}

export default Logorun