import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alldatacategory } from '../redux/actions/clothingAction'
import { Link } from 'react-router-dom'

function Collectionall() {
    const dispatch = useDispatch()
useEffect(() => {
    dispatch(alldatacategory('Collections'))
}, [])
const state = useSelector(state => state)
const collection= state.clothing.collection.data?.slice(0, 7);
   

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

<div className='d-flex justify-content-center p-5'> 
    <h3 className='headingfont borderbottom'>Collection List</h3>
</div>


<div className='collection-image row m-0 '>


{
    uniqueSubcategories?.map((x,i)=>{

        const matchingItems = collection.filter(item => item.subcategory_name === x);
        const firstImage = matchingItems[0].colour_name[0].image[0];
       
        return(
     <>
     <div key={i} className='col-6 col-lg-4 col-md-6 col-sm-6 p-1' >
<div className='cd w-100 h-100' >
<Link to={`/subcollection/${matchingItems[0].subcategory_name}/${matchingItems[0].category_name}`}>
<div  className='img-fluid '>

        <div className='collection-dark'>
        <img src={`${process.env.REACT_APP_IMAGE_URL}${firstImage}`}    className='img-fluid w-100 object-fit-cover collect_image_size' alt="" />
        </div>

<div className='collection_text d-flex align-content-end ps-5 z-1'>

<div className='text-white' style={{marginTop:'280px',zIndex:'2'}}>
    <h5>{x.time}</h5>
    <h2 className="headingfont">{x.title}</h2>

    <div className='mt-3 mt-lg-4 z-1 textcollection '>
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

export default Collectionall