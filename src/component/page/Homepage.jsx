import React from 'react'
import Hoc from '../Hoc'
import Sliderimage from '../Sliderimage'
import Logorun from '../Logorun'
import Collectionall from '../Collectionall'
import Whatabout from '../Whatabout'
import Productprops from '../Productprops' 
import CategoryRound from '../CategoryRound'


function Homepage() {
  return (
   <>
   
    <Sliderimage/>

    <CategoryRound/>
    <Productprops/>
    <Collectionall/>
    <Logorun/>
    <Whatabout/>

   

   
   </>
  )
}

export default Hoc(Homepage)