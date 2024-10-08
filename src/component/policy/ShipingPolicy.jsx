import React from 'react'
import Hoc from '../Hoc'

function ShipingPolicy() {
  return (
    <>
    
    <div className="container-fluid chamberifont ">
    <div className="row">
        <div className="col-lg-3 col-md-2 col-sm-1"></div>
        <div className="col-lg-6 col-md-8 col-sm-10">
           <div className='d-flex justify-content-center'>
           <h1 className="text-center text-dark fs-3 mt-5 borderbottom">Shipping policy</h1>
            </div><br/>
            <strong style={{fontSize: "16px"}}>How can I check if you deliver to my pincode?</strong>
            <br/>
            <p>We currently deliver to most pincodes in India. If you want to confirm your pincode, please mail us at support@leekus.com</p><br/>


            <strong style={{fontSize: "16px"}}>What are the delivery charges for my order?</strong><br/>
            <p>Shipping is free for all domestic orders. International shipping will be calculated at checkout. Please write to us at <a href="mailto:support@leekus.com" target='_blank'>support@leekus.com</a> in case of any queries.</p>
         <br/>

            <strong style={{fontSize: "16px"}}>How long does it take to deliver my order?        </strong><br/><br/>
            <p>For individual product delivery timelines*, please visit the Shipping tab on its page.     </p>
                <p>The standard free delivery takes 4-5 working days to complete the delivery.

                </p>
                <p>Express shipping takes 3-4 working days to complete the delivery.

                </p>
                <p>Next Day Delivery takes 1-2 working days to complete the delivery.

                </p>
                <p>Same Day Delivery (available for selected pincodes) takes less than 1 working day to complete the delivery.

                </p>
                <p>For international orders, please expect delivery in 12-20 working days.

                </p>
                <p>*Some products may have longer delivery timelines.

                </p>


       
          <br/>

            <strong style={{fontSize: "16px"}}>Can I ship to multiple addresses at the same time?</strong><br/>
            <p>Unfortunately, we are unable to ship to multiple addresses at this time. We recommend placing separate orders for each address.</p>
          <br/>

            


        </div>
        <div className="col-lg-3 col-md-2 col-sm-1"></div>
    </div>
</div>
    </>
  )
}

export default Hoc(ShipingPolicy)