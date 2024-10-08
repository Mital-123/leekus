import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from "react-redux";
import Hoc from './Hoc';
import Productall from './Productall';
import { LinkAction } from '../redux/actions/LInkAction';
import Pagination from './pagination';
import { SubsliderAction } from '../redux/actions/subsliderAction';
import { useParams } from 'react-router-dom';

function Top() {
const dispatch = useDispatch();
const params = useParams();

    const state = useSelector(state => state)
 
    const clothingdata = Array.isArray(state.linkdata.linkdata.data) ? state.linkdata.linkdata.data : [];
    const slideimage = state.subslider.subslider.data;
    


useEffect(() => {
    const proidd = `category_name=Clothing&subcategory_name=${params.id}` 
    dispatch(LinkAction(proidd))
    dispatch(SubsliderAction(proidd))
  
}, [dispatch,params.id])





// sort

const [sortBy, setSortBy] = useState("");

const handleSortChange = (e) => {
  setSortBy(e.target.value);
};

// Apply sorting based on the selected option
const sortedData = clothingdata ? [...clothingdata].sort((a, b) => {
  if (sortBy === "lowToHigh") {
    return a.select_size[0].product_price - b.select_size[0].product_price;
  } else if (sortBy === "highToLow") {
    return b.select_size[0].product_price - a.select_size[0].product_price;
  } else {
    return 0;
  }
}) : [];


// pagination

const [currentPage, setCurrentPage] = useState(0); 
const itemsPerPage = 100; 
const pageCount = Math.ceil(sortedData?.length / itemsPerPage);

   // Function to handle page change
   const handlePageChange = ({ selected }) => {
     setCurrentPage(selected);
     window.scrollTo({ top: 400, behavior: 'smooth' });
   };

   
   // Calculate current items to display based on current page
   const displayedItems = sortedData?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);




  return (
   <>
    <div className="card text-bg-dark ">
    {slideimage && slideimage?.image && ( 
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}${slideimage?.image}`}
          className="card-img opacity-75 object-fit-cover subslider" style={{height:"600px"}}
          alt="..."
        />
      )}
        
      </div>

      <div className="row row-cols-1 p-0 m-0 row-cols-lg-3 align-content-center align-items-center mt-4">
      <div className='col'></div>
 
       <div className="text-center  my-3">
      <h3  className='text-capitalize '><span className="headingfont borderbottom" >{params.id}</span></h3>
    </div>
        <div className="  col ms-auto my-3 p-3 ">
          <select className="form-select fw-bold" aria-label="Default select example" onChange={handleSortChange}>
            <option value="">Sort</option>
            <option value="lowToHigh">Price: Low To High</option>
            <option value="highToLow">Price: High To Low</option>
          </select>
        </div>
      </div>


      <div className=" product  mx-lg-4 mx-0 mb-5" id="product" >
        <div>
          <div className="row ">
            {displayedItems?.map((x, id) => {
            
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

      <Pagination pagecount={pageCount} handlePageChange={handlePageChange} />
   
   </>
  )
}

export default Hoc(Top)