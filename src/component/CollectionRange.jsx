import React, { useEffect, useState } from 'react'
import Hoc from './Hoc';
import { useDispatch, useSelector } from 'react-redux';
import { alldatacategory } from '../redux/actions/clothingAction';
import { Link } from 'react-router-dom';

function CollectionRange() {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(alldatacategory('Collections'))
    }, [])
        
    const state = useSelector(state => state)
    const collection= state.clothing.collection.data;
   

    const sortedCollection = collection?.sort((a, b) => {
        return a.subcategory_name.localeCompare(b.subcategory_name);
    });
    
    const uniqueSubcategories = sortedCollection?.reduce((unique, item) => {
        if (!unique.includes(item.subcategory_name)) {
          unique.push(item.subcategory_name);
        }
        return unique;
      }, []);
    

 

  return (   
   <>
   
   <div className='container'>

<div className='d-flex justify-content-center mb-4'> 
    <h3 className='headingfont borderbottom'>Collection All</h3>
</div>


<div className='collection-image row m-0 mb-5'>


{
    uniqueSubcategories?.map((subcategory,i)=>{
        const matchingItems = collection.filter(item => item.subcategory_name === subcategory);
        const firstImage = matchingItems[0].colour_name[0].image[0];
     
        return(
     <>
     <div key={i} className='col-6 col-lg-4 col-md-6 col-sm-6 p-1' >
<div className='cd w-100 h-100' >
<Link to={`/subcollection/${matchingItems[0].subcategory_name}/${matchingItems[0].category_name}`}>
<div  className='img-fluid'>

        <div className='collection-dark'>
        <img src={`${process.env.REACT_APP_IMAGE_URL}${firstImage}`}  className='img-fluid w-100 object-fit-cover collect_image_size' alt="" />
        </div>

<div className='collection_text d-flex align-content-end ps-3 ps-lg-5 z-1'>

<div className='text-white' style={{marginTop:'280px',zIndex:'2'}}>
    
    <h2 className="headingfont text-capitalize">{subcategory}</h2>

    <div className='mt-4 z-1  clcc'>
    <Link to={`/subcollection/${matchingItems[0].subcategory_name}/${matchingItems[0].category_name}` }  className=' text-decoration-none border border-1 px-lg-5 px-2 p-2 text-white  buttons_hover clc'>VIEW PRODUCTS</Link>
    </div>
</div>
</div>

</div>
</Link>
</div>

    </div>
     
     </>


        )
    })
}



</div>



    </div>
   

   
   </>
  )
}

export default Hoc(CollectionRange)