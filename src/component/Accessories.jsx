import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alldatacategory } from '../redux/actions/clothingAction'
import Hoc from './Hoc'
import Pagination from './pagination'
import Productall from './Productall'

function Accessories() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(alldatacategory('Accessories'))
    }, [])
        
    const state = useSelector(state => state)
    const accessories= state.clothing.collection.data;
 


// sort

const [sortBy, setSortBy] = useState("");

const handleSortChange = (e) => {
  setSortBy(e.target.value);
};

// Apply sorting based on the selected option
const sortedData = accessories ? [...accessories].sort((a, b) => {
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
const itemsPerPage = 10; 
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
    <div className='d-flex justify-content-center'> 
        <h3 className='borderbottom'>
        Accessories</h3>
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

export default Hoc(Accessories)