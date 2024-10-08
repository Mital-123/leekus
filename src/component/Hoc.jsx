import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Hoc(Compnent) {

    function Newcomponent(){
        return(

<>

<Header/>
<Compnent/>
<Footer/>
                                                                                                 


</>


        )
    }

  return (
    Newcomponent

  )
}

export default Hoc