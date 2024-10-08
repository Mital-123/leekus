import React from 'react'
import Hoc from '../Hoc'

function TrackOrder() {
  return (
   <>
     <div className="container chamberifont">
    <div className="row p-5">
      <p className="track_order_p">Track Your Order</p>
    </div>

    <div style={{border:'0.001rem solid #5c5c5c'}} className="row p-3 trck">
      <div className="col-lg-5 col-md-5 d-lg-block d-md-block d-none mt-5 mb-5">
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">Order Number</label>
          <input style={{ border:"1px solid"}} type="text" className="form-control w-75" id="formGroupExampleInput" placeholder=""/>
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">Email or Phone Number</label>
          <input style={{border:"1px solid"}} type="text" className="form-control w-75" id="formGroupExampleInput2" placeholder=""/>
        </div>
        <button type="button" className="btn buttons_hover w-50">Track</button>
      </div>
      <div className="col-lg-2 col-md-2 d-lg-block d-md-block d-none mt-5 mb-5">
        <div className="vl ms-2 "></div>
        <div>OR</div>
        <div className="vl ms-2 "></div>
      </div>
      <div className="col-lg-5 col-md-5 d-lg-block d-md-block d-none mt-5 mb-5">
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">Tracking Number</label>
          <input style={{border:"1px solid"}} type="text" className="form-control w-75" id="formGroupExampleInput" placeholder=""/>
        </div>
        <button type="button" className="btn buttons_hover w-50">Track</button>
      </div>
      <div className="col-sm-12 d-sm-block d-lg-none d-md-none mt-3">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item w-50" role="presentation">
            <button className="nav-link active w-100" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Order Number</button>
          </li>
          <li className="nav-item w-50" role="presentation">
            <button className="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Tracking Number</button>
          </li>
        </ul>
      <form action="">
      <div className="tab-content mt-5 mb-5" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">Order Number</label>
              <input style={{border:"1px solid"}} type="text" className="form-control w-100" id="formGroupExampleInput" placeholder=""/>
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Email or Phone Number</label>
              <input style={{border:"1px solid"}} type="text" className="form-control w-100" id="formGroupExampleInput2" placeholder=""/>
            </div>
            <button type="button" className="btn  w-100 buttons_hover">Track</button>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">Tracking Number</label>
              <input style={{border:"1px solid"}} type="text" className="form-control w-100" id="formGroupExampleInput" placeholder=""/>
            </div>
            <button type="button " className="btn  w-100  buttons_hover">Track</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  </div>
   </>
  )
}

export default Hoc(TrackOrder)