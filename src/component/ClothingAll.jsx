  import React, { useState } from "react";
  import Productall from "./Productall";
  import Hoc from "./Hoc";
  import Pagination from "./pagination";
  import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

  function ClothingAll() {
let params=useParams()

  const state = useSelector(state => state)

  const clothingdata= state.clothing.clothing.data;





  // sort

  const [sortBy, setSortBy] = useState("");


  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const [subcategoryFilter, setSubcategoryFilter] = useState('');

  // State variables for filters
  const [productNameFilter, setProductNameFilter] = useState("");
  const [colorNameFilter, setColorNameFilter] = useState("");
  const [sizeNameFilter, setSizeNameFilter] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");
  

  // Function to apply filters
  const filteredData = clothingdata?.filter(item => {
    // Filter by product name
    if (subcategoryFilter && item.subcategory_name !== subcategoryFilter) {
      return false;
    }
    // Filter by color name
    if (colorNameFilter) {
      // Check if any color in the array matches the selected color
      return item.colour_name.some(color => color.colour_name.toLowerCase() === colorNameFilter.toLowerCase());
    }
    // Filter by size name
    if (sizeNameFilter && !item.select_size.some(size => size.size_name.toLowerCase().includes(sizeNameFilter.toLowerCase()))) {
      return false;
    }
    // Filter by price range
    const productPrice = item.select_size[0].product_price;
    if ((minPriceFilter && productPrice < minPriceFilter) || (maxPriceFilter && productPrice > maxPriceFilter)) {
      return false;
    }
    return true;
  });

  // Handle input changes for filters
  const handleSubcategoryChange = (e) => {
    setSubcategoryFilter(e.target.value);
  };
  const handleColorNameChange = e => setColorNameFilter(e.target.value);
  const handleSizeNameChange = e => setSizeNameFilter(e.target.value);
  const handleMinPriceChange = e => setMinPriceFilter(parseInt(e.target.value));
  const handleMaxPriceChange = e => setMaxPriceFilter(parseInt(e.target.value));


  const handleColorNameChangee = (colorName) => {
    setColorNameFilter(colorName);
  };

  const removecolor =()=>{
    setColorNameFilter('')
  }



  // Apply sorting based on the selected option
  const sortedData = filteredData  ? [...filteredData ].sort((a, b) => {
    if (sortBy === "lowToHigh") {
      return a.select_size[0].product_price - b.select_size[0].product_price;
    } else if (sortBy === "highToLow") {
      return b.select_size[0].product_price - a.select_size[0].product_price;
    } else {
      return 0;
    }
  }) : [];


    // pagination
                                                            
    const [currentPage, setCurrentPage] = useState(0); // Define currentPage and setCurrentPage using useState hook
    const itemsPerPage = 130; // Define itemsPerPage
    const pageCount = Math.ceil( sortedData?.length / itemsPerPage);

      // Function to handle page change
      const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo({ top: 400, behavior: 'smooth' });
      };
      
      // Calculate current items to display based on current page
      const displayedItems = sortedData?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

      const sizeNames = [...new Set(clothingdata?.flatMap(item => item.select_size?.map(size => size.size_name)))];
      const subcategoryNames = [...new Set(clothingdata?.map(item => item.subcategory_name))]; // Extract unique subcategory names
      //  const subcategoryNamesString = subcategoryNames.join(', '); // Join them into a string separated by comma
      const uniqueColorNames = [...new Set(clothingdata?.flatMap(item => item.colour_name.map(color => color.colour_name)))];
      

    return (
      <>


        <div className="card text-bg-dark ">
          <img
            src={require("../assets/images/AlL PRODUCT  SLIDE.webp")}
            className="card-img opacity-75 object-fit-cover" style={{height:"500px"}}
            alt="..."
          />
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            {/* <h3 className="card-title ">For the Contempory women</h3> */}
          </div>
        </div>     

        <div className="row p-0 m-0 d-flex justify-content-end align-content-center align-items-center mt-2 me-3">
        <div className="row p-0 m-0">

  <div className="col-12 col-lg-7 ">
    <div className="text-center text-lg-end my-3">
      <h3  className='text-capitalize '><span className="headingfont borderbottom" >Clothing All</span></h3>
    </div>
  </div>
  <div className="col-12 col-lg-5">
    <div className="d-flex my-3 justify-content-center justify-content-lg-end">
      <div className="shadow me-3">
          <select className="form-select" aria-label="Default select example" onChange={handleSortChange}>
          <option value="">Sort</option>
          <option value="lowToHigh">Price: Low To High</option>
          <option value="highToLow">Price: High To Low</option>
        </select>
      </div>
      <div>
        <button className="btn px-5 border shadow " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Filter</button>
      </div>
    </div>
  </div>

        </div>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Filter</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
    
    <div className="filter-container mt-3" >
       

       <div className="my-4" >
        
<h5>Category name :</h5>

<select
          value={subcategoryFilter}
          onChange={handleSubcategoryChange}
          className="mt-3 form-select"
      >
          <option value="">All Subcategories</option>
          {subcategoryNames?.map((subcategory, index) => (
              <option key={index} value={subcategory}>{subcategory}</option>
          ))}
      </select>
       </div>

<div className="my-4">
<h5>Select Color  :</h5>

<button onClick={removecolor} className="btn border shadow" style={{marginTop:'-15px'}}>Select All</button>

{uniqueColorNames.map(colorName => (
          <>
        
          <div
            key={colorName}
            className="d-inline-block ms-3 mt-4 shadow"
            onClick={() => handleColorNameChangee(colorName)}
            style={{ backgroundColor: `${colorName}`, width: colorNameFilter === colorName ? '23px' : '20px', height:  colorNameFilter === colorName ? '23px' : '20px',
             borderRadius: '50%', cursor: 'pointer', border: colorNameFilter === colorName ? '3px solid black' : 'none' }}
          ></div>
          </>
        ))}
              
     

</div>

{/* size  */}

<div className="my-3">
<h5>Select Size  :</h5>
                   <select
          value={sizeNameFilter}
          onChange={handleSizeNameChange}
          className="mt-3 form-select"
        >
          <option value="">All Sizes</option>
          {sizeNames?.map((size, index) => (
            <option key={index} value={size}>{size}</option>
          ))}
        </select>
</div>



      <div className="mt-4">
        <h5>Select Price</h5>
    
        <div className="mt-">
          <label htmlFor="maxPrice" className="d-block w-100">Max Price: </label>
          <input type="range" id="maxPrice" name="maxPrice" min="0" max="5000" value={maxPriceFilter} onChange={handleMaxPriceChange} />
          <span>{maxPriceFilter}</span>
        </div>
      </div>
    </div>
    </div>
  </div>
        </div>

        <div className=" product  mx-lg-4 mx-0" id="product" >
          <div>
            <div className="row ">
              {displayedItems?.map((x, id) => {
              
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
          </div>
        
        </div>
      

  <Pagination pagecount={pageCount} handlePageChange={handlePageChange} />
      </>
    );
  }

  export default Hoc(ClothingAll);
