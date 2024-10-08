import React from 'react'
import { IoPlay } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Whatabout() {
  const state = useSelector(state => state)
  const videoUrl = state.video.video.data?.video_url;

  return (
    <>
    
    <div className='py-5'>
        <div className='d-flex justify-content-center mb-3'>
          <h3 className='borderbottom'>What We Are About</h3>
        </div>

        <div  style={{ height:'800px',width:'100%',backgroundSize:'cover', backgroundPosition:'center -87px', backgroundRepeat:'no-repeat'}} className='img-fluid whatabout'>

      <div className='d-flex justify-content-center align-content-center align-item-center'>
           <div className='playbtn d-flex justify-content-center' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{marginTop:'350px'}}>
           <a ><IoPlay className='fs-2 text-black'/></a>
           </div>
      </div>

      {/* <!-- Modal --> */}
      <div class="modal modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Video</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      {videoUrl && (
                    <video style={{height:'400px', width:'100%'}} className='img-fluid' autoPlay controls>
                      <source src={`${process.env.REACT_APP_IMAGE_URL}${videoUrl}`} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  )}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
          
        </div>


    </div>
    
    </>
  )
}

export default Whatabout