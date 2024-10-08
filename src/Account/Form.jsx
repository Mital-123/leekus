import React from 'react';
const Forms = () => {
  return (
    <>
                <select class="form-control mb-3 p-3" required placeholder="Country/Region" name="Area" id="Area">
                        <p>Country/region</p>
                        <option value="">Country</option>
                        <option value="India">India</option>
                        <option value="africa">africa</option>
                        <option value="canada">canada</option>
                        <option value="USA">USA</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="srilanka">srilanka</option>
                        <option value="china">china</option>
                        <option value="france">france</option>
                        <option value="UK">UK</option>
                        <option value="DUbai">Dubai</option>
                    </select>

                   <div className="row">
                        <div class="mb-3 col-lg-6 ">
                            <input type="text" autoComplete='none' class="form-control p-3" placeholder='First Name' id="exampleInputPassword1" required/>
                        </div>

                        <div class="mb-3 col-lg-6 ">
                            <input type="text" class="form-control p-3" id="exampleInputEmail1" placeholder='Last Name' aria-describedby="emailHelp" required/>
                            
                        </div>
                    </div>

                    <div class="input-group mb-3 ">
                        <input type="text" class="form-control p-3" id="exampleInputEmail1" placeholder="Address" aria-describedby="emailHelp" required />
                    </div>

                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <input type="text" autoComplete='none' class="form-control p-3" placeholder='City' id="exampleInputPassword1" required/>
                        </div>

                        <div className="col-lg-4 mb-3">
                        <select class="form-control p-3 " required name="Area" id="Area" >
                            <option value="">Area&Town</option>
                            <option value="katargam">katargam</option>
                            <option value="Bardoli">Bardoli</option>
                            <option value="Kamrej">Kamrej</option>
                            <option value="Amroli">Amroli</option>
                            <option value="Adajan">Adajan</option>
                            <option value="Chorasi">Chorasi</option>
                            <option value="Majura">Majura</option>
                            <option value="Olpad">Olpad</option>
                            <option value="Palsana">Palsana</option>
                        </select>
                        </div>

                        
                        <div className="col-lg-4 ">
                            <div className='mb-3 '>
                            <input type="text" className="form-control p-3" placeholder='Pin Code' required/>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <input type="text" className="form-control p-3" required  placeholder='Phone Number for order updates'/>
                        </div>
                    </div>  
    </>
  )   
}

export default Forms


