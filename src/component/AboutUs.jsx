import React from 'react'
import Hoc from './Hoc'

function AboutUs() {
  return (
   <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2 col-sm-1 col-1"></div>

          <div className="col-lg-6 col-md-8 col-sm-10 col-10">
            <div className='mx-auto d-flex justify-content-center'>
            <h4 className=' text-center mt-5 borderbottom'>About US</h4>

            </div>

            <div className=' mt-5'>
              <img src={require("../assets/images/about11.jpg")} className=' img-fluid' alt="" />
             <div className='my-4'>
               <h5>Our Mission:  If someone is wearing leekus then no one can reject it.</h5>
             </div>
              <p>Welcome to Leekus, where elegance meets professionalism. We are more than just a women's office wear brand, we are a reflection of the modern woman's ambition, confidence, and style.</p>
              <p className='mt-3'>
              At Leekus, we understand the power of attire in making a statement, especially in the professional realm. That's why we're dedicated to curating a collection that blends sophistication with contemporary trends, empowering women to exude confidence in every boardroom, meeting, and workplace interaction.
              </p>
            </div>


            <div className=' mt-5'>
               <h4>Our journey began with a simple yet powerful vision</h4>
               <div className="row mt-4"  >
                   <div className="col-lg-6 col-md-8 col-sm-8">
                     <img src={require("../assets/images/about11.jpg")} className=" img-fluid" alt="" />
                   </div>

                   <div className="col-lg-6 col-md-4 col-sm-12">
                       <p>To redefine office wear for the modern woman. Guided by this vision, we meticulously design each piece in our collection to strike the perfect balance between functionality and fashion. From tailored suits to versatile separates, every garment is crafted with precision, using premium fabrics that promise both comfort and durability.</p>
                   </div>
                   <div >
                     <p className='mt-4 mt-lg-0'>What sets Leekus apart is our unwavering commitment to inclusivity and diversity. We believe that every woman deserves to feel empowered and stylish, regardless of her shape, size, or background. That's why our collection caters to a diverse range of body types, offering inclusive sizing options and silhouettes that celebrate the beauty of individuality.</p>

                     <p className='mt-4 mt-lg-0'>But our mission goes beyond just providing exceptional clothing; it's about fostering a community of empowered women who uplift and inspire each other. Through our platform, we aim to spark meaningful conversations, share inspiring stories, and champion the achievements of women in the workplace and beyond.</p>

                     <p className='mt-4 mt-lg-0'>Join us on this journey as we redefine the rules of office wear and empower women to conquer the professional world with style, grace, and confidence. Welcome to Leekus, where every outfit tells a story of ambition, strength, and unapologetic femininity.</p>
                   </div>
               </div>
             </div>



             <div className='mt-5'>
                <h4>Leekus: A Powerful Brand for Modern Women</h4>
                <div className="row mt-4">
                  <div className="col-lg-3 col-md-2 col-sm-1"></div>
                  <div className="col-lg-6 col-md-8 col-sm-10"><img src={require("../assets/images/about11.jpg")} className="  img-fluid"  alt="" /></div>
                  <div className="col-lg-3 col-md-2 col-sm-1"></div>
                    
                </div>
                <p className=' mt-5'>
                <strong>Women embody a unique blend of beauty, strength, and courage.</strong> With their adaptability, individuality, and resilience, they navigate life's journey with profound grace.
                </p>
                <p className=' mt-3'>
                <strong>The Leekus brand encapsulates this essence</strong> We present the latest and finest products for women that resonate with their adaptability, nature, and inherent talent.
               </p>

                <p className=' mt-3'>
                The primary objective of the Leekus brand is not just to provide exceptional clothing, but to enhance self-confidence, self-belief, and empowerment. It offers an experience that helps elevate women's self-esteem to reach their ultimate goals
               </p>
             </div>


             <div>
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-1"></div>
                  <div className="col-lg-8 col-md-8 col-sm-10"> <img src={require("../assets/images/about11.jpg")} className="img-fluid"  alt="" /></div>
                  <div className="col-lg-2 col-md-2 col-sm-1"></div>
               </div>
              
               <p className=' mt-5'>Our brand does not merely focus on work, but on meaningfulness, fostering self-belief, and nurturing confidence. It offers a unique experience that helps women feel more respected in their positions.</p>
               <p className=' mt-3'>Connect, collaborate, work with the environment, and work with our women. We are committed to bringing about changes in our lives and are determined to move forward. Leekus welcomes you - a place where every garment narrates the story of self-confidence and beauty.</p>
             </div>


          
          </div>

          <div className="col-lg-3 col-md-2 col-sm-1"></div>
        </div>
      </div>
   </>
  )
}

export default Hoc(AboutUs)