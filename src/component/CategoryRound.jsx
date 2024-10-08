import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

function CategoryRound() {
    const categary =[
        {
          img: require('../assets/images/about11.jpg'),
          categaryname: 'Top',
          path:'top'
         },
         {
          img: require('../assets/images/about11.jpg'),
          categaryname: 'Pant',
          path:'Pant'
         },
         {
          img: require('../assets/images/about11.jpg'),
          categaryname: 'Shirt',
          path:'shirt'
         },
         
      {
       img: require('../assets/images/about11.jpg'),
       categaryname: 'T-shirt',
       path:'T-shirt',
      
      },
      {
       img: require('../assets/images/about11.jpg'),
       categaryname: 'Blazer',
       path:'Blazer'
       
      },
      {
       img: require('../assets/images/about11.jpg'),
       categaryname: 'Co-ords-Sets',
       path:'top'
      },
      {
       img: require('../assets/images/about11.jpg'),
       categaryname: 'Skirt',
       path:'Skirt'
      },
      {
       img: require('../assets/images/about11.jpg'),
       categaryname: 'Dress',
       path:'Dress'
      },
      
       ]
       var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        swipe: true, 
        arrows: false, 
        pauseOnHover: false, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
        ],
      };

        const categarypath = ()=>{

        }
  return (
   <>
     <div className="d-flex justify-content-center py-5">
        <h3 className="borderbottom headingfont p-0 m-0 pb-1 mb-4">Popular Categories</h3>
      </div>

      <div className="container p-0 m-0  mx-auto w-100">
        <div className="row  d-flex justify-content-center p-0 m-0">
        <Slider {...settings} className='p-0 m-0'>
          {
            categary.map((x,i)=>{
              return(
            <>
            
            
            
            <div className=" ">
            <div className="categary text-center p-2" onClick={()=>categarypath(x.categaryname)}>
              <Link to={`/clothing/`+`${x.path}`} className="nav-link">
                <img
                  src={x.img}
                  className="img-fluid"
                  alt=""
                />
              </Link>
              <p className="category_texthigh  fw-bold text-center mt-1">
                <Link to={'/fabric'} className="nav-link text-center">{x.categaryname}</Link>
              </p>
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

export default CategoryRound