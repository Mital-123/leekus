import React from 'react'
import Hoc from './Hoc'

function ContactUs() {
  return (
   <>
   <div className="container mb-5">
        <div className="row">
            <div className="col-lg-3"></div>

            <div className="col-lg-6">
                <h3 className=' text-center mt-5'>Contact Us</h3>
                <p className='mt-3 text-center'> Please drop us a line, we'd love to hear from you! You can also Whatsapp us at +91-7990890206.</p>

                <form action="https://formsubmit.co/support@leekus.com" method="POST"  className='mt-5'>
                <div className="row">
                    <div className="mb-3 col-lg-6">
                        <input type="text" name='Name' className="form-control" placeholder='Name' id="exampleInputPassword1" required/>
                    </div>

                    <div className="mb-3 col-lg-6">
                        <input type="email" name='Email' className="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" required/>
                    </div>
                </div>

                <div className="mb-3 ">
                        <input type="text" name='Phone' className="form-control" placeholder='Your Phone (Optional)' id="exampleInputPassword1" required/>
                </div>
                
                <div className='mb-3'> 
                    <textarea className="w-100 form-control" name="Message" id="" placeholder='Message' cols="30" rows="8"></textarea>
                </div>
                
                <button className=' w-100 text-center buttons_hover py-2 fw-medium '>SEND MESSAGE</button>

                </form> 
            </div>

            <div className="col-lg-3"></div>
        </div>
      </div>
   
   </>
  )
}

export default Hoc(ContactUs)