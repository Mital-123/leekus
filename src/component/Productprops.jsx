
import Productall from './Productall';
import '../assets/css/style.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Productprops() {

  

  const state = useSelector(state => state)

  const clothingdata = state.clothing.clothing.data?.slice(0, 4);


  return (
    <>
    
     <div className="container product py-5">
    <div>
    <div className="row ">

      <div className='text-center mt-4'>
        <h3 className='borderbottom mx-auto headingfont borderbottom' style={{width:'fit-content'}}>New Product</h3>
      </div>
     
     

      {clothingdata?.map((x, id) => {
          
              const colorNames = x.colour_name.map(color => color.colour_name);
            
              return (
                <Productall
                  key={id}
                  path={x.id}
                  product_urlkey={x.product_urlkey}
                  title={x.product_name}
                  price={x.select_size[0].product_price}
                  colour_name={colorNames}
                  colour_wise_image = {x.colour_name}
                  product_old_price={x.select_size[0].product_old_price}
                />
              );
            })}
     </div>   
     <div className='mt-5 mb-5 d-flex justify-content-center z-1'>
        <Link to={'/clothingall'} className=' text-decoration-none border border-1 ps-5 pe-5 p-2 text-white  buttons_hover'>VIEW ALL PRODUCTS</Link>
    </div>
    </div>
    
      </div>


      
    </>
  );
}

export default Productprops;
