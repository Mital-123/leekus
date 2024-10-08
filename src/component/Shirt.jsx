import React, { useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import Hoc from './Hoc';
import Productall from './Productall';
import { LinkAction } from '../redux/actions/LInkAction';
import { SubsliderAction } from '../redux/actions/subsliderAction';

function Shirt() {
const dispatch = useDispatch();
    const state = useSelector(state => state)
    const clothingdata= state.linkdata.linkdata.data;
    const slideimage = state.subslider.subslider.data;


useEffect(() => {
    const proidd = `category_name=Clothing&subcategory_name=shirt` 
    dispatch(LinkAction(proidd))
    dispatch(SubsliderAction(proidd))
}, [])




  return (
   <>
    <div className="card text-bg-dark">
    {slideimage && slideimage?.image && ( 
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}${slideimage?.image}`}
          className="card-img opacity-75 object-fit-cover subslider" style={{height:"500px"}}
          alt="..."
        />
      )}
        <div className="card-img-overlay d-flex justify-content-center align-items-center">
          <h3 className="card-title ">{slideimage?.description}</h3>
        </div>
      </div>


      <div className=" product  mx-lg-4 mx-0 mb-5" id="product" >
        <div>
          <div className="row ">
            {clothingdata?.map((x, id) => {
           
              const colorNames = x.colour_name?.map(color => color.colour_name);
            
              return (
                <Productall
                  key={id}
                  path={x.id}
                  product_urlkey={x.product_urlkey}
                  title={x.product_name}
                  price={x.select_size?.at(0)?.product_price}
                  colour_name={colorNames}
                  colour_wise_image = {x.colour_name}
                  product_old_price={x.select_size?.at(0)?.product_old_price}
                />
              );
            })}
          </div>
        </div>
      
      </div>

   
   
   </>
  )
}

export default Hoc(Shirt)