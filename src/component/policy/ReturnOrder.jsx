import React from 'react'
import Hoc from '../Hoc'

function ReturnOrder() {
  return (
   <>
    <div className="container text-center mt-5 chamberifont">
      <div className="row">
      
        <div className="col-lg-4 col-md-3 col-sm-12"></div>
      
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="return_order_font_family text-dark">
            <strong style={{ fontSize: '18px' }}>Return & Exchange portal</strong>
          </div>
          <div className="return_order_font_family">Let's track your order first</div>
          <br /><br />
          <div style={{ margin: 'auto' }} className="return_order_font_family w-75">
            <div style={{ border: '1px solid' }} className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="Order Number" />
              <label htmlFor="floatingInput">Order Number</label>
            </div>
            <div style={{ border: '1px solid' }} className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Email/Zip/Phone" />
              <label htmlFor="floatingPassword">Email/Zip/Phone</label>
            </div>
            <br />
            <div>
              <button style={{  color: 'white', borderRadius: '0%', padding: '0.8rem' }} type="button" className="btn btn-lg w-100 buttons_hover">Find My Order</button>
            </div>
          </div>
          <br /><br />
          <div>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-"></div>
      </div>
    </div>
   </>
  )
}

export default Hoc(ReturnOrder)