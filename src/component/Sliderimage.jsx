import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { homesliderAction } from '../redux/actions/homeslider';
import { data } from 'jquery';

function Sliderimage() {
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(homesliderAction())
}, [])

  const state = useSelector(state => state)

const slider = state.homeslider.homeslider.data;

  return (
  <>
  <div id="carouselExampleDark" className="carousel carousel-fade slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slider?.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slider?.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="3500">
              <img src={`${process.env.REACT_APP_IMAGE_URL}${slide.image}`} className="d-block w-100 img-fluid" alt={slide.description} />
              <div className="carousel-caption text-white">
                <h5>{slide.description}</h5>
                
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  
  
  
  
  
  
  </>
  )
}

export default Sliderimage