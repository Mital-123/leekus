import React, { useState } from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Hoc from './Hoc';
import FAQaccordion from './FAQaccordion';
import Testimonial from './Testiomonial';




function GiftCardOrderPage() {
    const [value, setValue] = useState(1);
    const [selectedValue, setSelectedValue] = useState("2,000");
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    const handleClick = (value) => {
      setSelectedValue(value);
    };

    const increment = () => {
      setValue(value + 1);
    };
  
    const decrement = () => {
      if (value > 1) {
        setValue(value - 1);
      }
    };

    const handleImageClick = () => {
        setIsImageZoomed(true);
    };

    const handleCloseZoom = () => {
        setIsImageZoomed(false);
    };
  return (
    <>
       <div className='container py-5'>
   
<div className='row row-cols-1 row-cols-lg-2 m-0 p-0 g-5'>
    <div className='col'>
<div  className='h-100' style={{cursor:"zoom-in"}} onClick={handleImageClick}>
    <img src={require("../assets/images/Giftcardamout2000_600x.webp")} alt="" className='img-fluid h-100 '/>
</div>

    </div>
    <div className='col'>
        <div className='h-100 d-flex flex-column justify-content-between'>
            <div className='fs-4'>Leekus Gift Card</div>
            <div className='py-4 fs-5 fw-bold'><span><MdOutlineCurrencyRupee /></span>{selectedValue}</div>
            <div className='fs-5 py-1'>Denominations:</div>
            <div className='my-3'>
                <button className={`btn border rounded-0 p-2 m-2 px-3 ms-0 ${selectedValue === "2,000" ? 'border-black' : ''}`} onClick={() => handleClick("2,000")}><span className='fs-5 fw-light'><MdOutlineCurrencyRupee /></span> 2000.00</button>
                <button className={`btn border rounded-0 p-2 m-2 px-3 ms-0 ms-lg-2 ${selectedValue === "3,000" ? 'border-black' : ''}`} onClick={() => handleClick("3,000")}> <span className='fs-5 fw-light'><MdOutlineCurrencyRupee /></span> 3000.00</button>
                <button className={`btn border rounded-0 p-2 m-2 px-3 ms-0  ms-lg-2 ${selectedValue === "5,000" ? 'border-black' : ''}`} onClick={() => handleClick("5,000")}> <span className='fs-5 fw-light'><MdOutlineCurrencyRupee /></span> 5000.00</button>
                <button className={`btn border rounded-0 p-2 m-2 px-3 ms-0 ms-lg-2 ${selectedValue === "10,000" ? 'border-black' : ''}`} onClick={() => handleClick("10,000")}> <span className='fs-5 fw-light'><MdOutlineCurrencyRupee /></span> 10000</button>
              </div>
            <div className='border d-flex justify-content-center align-content-center align-items-center  card_number'>
      <button onClick={decrement} className='text-center  border-0 fs-3 w-25' > - </button>
      <input type="number" value={value} readOnly className='border-0 text-center w-25 m-auto fw-medium' />
      <button onClick={increment} className='text-center border-0 fs-3 w-25 fw-light'>+</button>
    </div>
    <div className='buttons_hover mt-4 p-2  fw-medium w-100 text-center'>
        ADD TO CART
    </div>
    <div className='buttons_hover mt-2 p-2   fw-medium w-100 text-center'>
        ADD TO WISHLIST
    </div>
    <div className='buttons_hover mt-2 p-2   fw-medium w-100 text-center'>
        REMOVE FROM WISHLIST
    </div>
       </div>
    </div>
</div>
    </div>

    {isImageZoomed && (
                <div className="zoomed-image-overlay" onClick={handleCloseZoom}>
                       <button className="close-zoom-button bg-black text-white pt-0 rounded-circle p-2 fs-3 d-flex align-content-center align-items-center justify-content-center" onClick={handleCloseZoom}>x</button>
                       
                    <div className="zoomed-image-container">
                        <img src={require("../assets/images/Giftcardamout2000_600x.webp")} alt="" className="zoomed-image" />
                    </div>
                </div>
            )}
    <div className='container '>
        <Testimonial/>
    </div>
    <div className='container'>
        <FAQaccordion/>
    </div>
    </>
  )
}

export default Hoc(GiftCardOrderPage)