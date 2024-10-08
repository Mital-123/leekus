import React, { useEffect, useState } from 'react'
import Productall from './Productall';
import { LinkAction } from '../redux/actions/LInkAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SubsliderAction } from '../redux/actions/subsliderAction';
import { Pagination } from 'react-bootstrap';
import Hoc from './Hoc';

function SubCollection() {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
   
    const clothingdata = Array.isArray(state.linkdata.linkdata.data) ? state.linkdata.linkdata.data : [];
    const slideimage = state.subslider.subslider.data;
    
const params = useParams();


useEffect(() => {
    const proidd = `category_name=${params.category}&subcategory_name=${params.id}` 
    dispatch(LinkAction(proidd))
  
}, [])

useEffect(() => {

    const proidd = `category_name=${params.category}&subcategory_name=${params.id}` 
    dispatch(SubsliderAction(proidd))
    
}, [dispatch])



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
const itemsPerPage = 30; 
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
    
    <div className="card text-bg-dark">
    {slideimage && slideimage?.image && ( 
        <img
          src={`${process.env.REACT_APP_SERVER_URL}${slideimage?.image}`}
          className="card-img opacity-75 object-fit-cover" style={{height:"500px"}}
          alt="..."
        />
      )}
        <div className="card-img-overlay d-flex justify-content-center align-items-center">
          <h3 className="card-title ">{slideimage?.description.toUpperCase()}</h3>
        </div>
      </div>


      <div className="d-flex justify-content-end mt-2 me-3">
        <div className="">
          <select className="form-select" aria-label="Default select example" onChange={handleSortChange}>
            <option value="">Sort</option>
            <option value="lowToHigh">Price: Low To High</option>
            <option value="highToLow">Price: High To Low</option>
          </select>
        </div>
      </div>


      <div className=" product  mx-lg-4 mx-0 mb-5" id="product" >
        <div>
          <div className='row'>
            <div className='col-lg-12'>
            <div className="row ">
            {displayedItems?.map((x, id) => {
            
              const colorNames = x.colour_name?.map(color => color.colour_name);
          
              return (
                <Productall
                  key={id}
                  path={x.id}
                  category_name={x.category_name}
                  product_urlkey={x.product_urlkey}
                  title={x.product_name}
                  price={x.select_size?.at(0)?.product_price}
                  colour_name={colorNames}
                  colour_wise_image = {x.colour_name}
                  product_old_price={x.select_size?.at(0)?.product_old_price}
                  link='/productpurchase/'
                />
              );
            })}
          </div>
            </div>
          </div>
        </div>
      
      </div>

      <Pagination pagecount={pageCount} handlePageChange={handlePageChange} />
   
    
    </>
  )
}

export default Hoc(SubCollection)