import React from "react";
import Slider from "react-slick";

function Testimonial() {
  let carddata = [
    {
      img: require("../assets/images/QUA1170_400x.webp"),
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, culpa?",
      name: "Dipali Gupta",
      status: "Camera Consultant ",
    },
    {
      img: require("../assets/images/QUA1170_400x.webp"),
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, culpa?",
      name: "Dipali Gupta",
      status: "Camera Consultant ",
    },
    {
      img: require("../assets/images/banner_1.webp"),
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, culpa?",
      name: "Dipali Gupta",
      status: "Camera Consultant ",
    },
    {
      img: require("../assets/images/QUA1170_400x.webp"),
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, culpa?",
      name: "Dipali Gupta",
      status: "Camera Consultant ",
    },
    {
      img: require("../assets/images/banner_1.webp"),
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, culpa?",
      name: "Dipali Gupta",
      status: "Camera Consultant ",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container py-4 p-0  my-5">
       
      <div className="fs-5 text-center">Testimonial</div>
          <Slider {...settings}>
            {carddata?.map((x, i) => {
              return (
                <>
              <div className=" card testimonial border-0 m-5 rounded-4" key={i}>
                <div className="row m-0 d-flex align-content-center align-items-center justify-content-center">
                  <div className="col-5 col-lg-4 p-0" style={{height:"250px"}}>
                    <img src={x.img} alt="" className="img-fluid h-100 w-100 object-fit-cover" />
                  </div>
                  <div className="col-7 col-lg-8  text-center">
                    <div className=" testimonial_data text-secondary">{x.data}</div>
                    <div className="testimonial_name fw-medium py-2">{x.name}</div>
                    <div className="testmonial_text">{x.status}</div>
                  </div>
                </div>
              </div>
                </>
              );
            })}
          </Slider>
        </div>
    </>
  );
}

export default Testimonial;
