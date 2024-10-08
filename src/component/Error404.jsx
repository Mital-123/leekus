import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <>
       <div className="er-img img-fluid">
        <div className="d-flex justify-content-center align-items-center w-100 h-100 er-er">
          <Link className="btn btn-primary" to={"/"}>
            <button className="btn btn-primary" >
              Home
            </button>{" "}
          </Link>
        
        </div>
      </div>
    
    </>
  )
}

export default Error404