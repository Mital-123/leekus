import React, { useEffect, useState } from 'react';
import Hoc from './Hoc';
import { blogAction } from '../redux/actions/testiAction';
import { useDispatch, useSelector } from 'react-redux';

function Blog() {
    const [selectedBlog, setSelectedBlog] = useState(null); // State to hold selected blog data

    const state = useSelector(state => state);
    const data = state.testimonial.blog.data;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(blogAction());
    }, [dispatch]);

    // Function to handle setting the selected blog for the modal
    const handleSelectBlog = (blog) => {
        setSelectedBlog(blog);
    };

    return (
        <>
            <div className='container py-5 overflow-hidden'>
                <div className='d-flex justify-content-center'>
                    <h3 className='borderbottom'>Blog</h3>
                </div>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 p-0 g-5'>
                    {data?.map((x, i) => (
                        <div className='col' key={i}>
                            <button
                                type="button"
                                className="btn btn-transparent shadow h-100 border-0 p-0"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => handleSelectBlog(x)} // Set selected blog on click
                            >
                                <div className='card border-0 h-100'>
                                    <a href={x.url} className='nav-link' target='_blank' rel="noopener noreferrer">
                                        <div style={{ height: "200px" }}>
                                            <img
                                                src={`${process.env.REACT_APP_IMAGE_URL}${x.image_file}`}
                                                alt=""
                                                className='img-fluid w-100 h-100 object-fit-covernm '
                                            />
                                        </div>
                                    </a>
                                    <div className='p-3'>
                                        <div className='fs-4 fw-medium py-2'>{x.blog_title}</div>
                                        <div className='py-1 text-break'>{x.blog_description}</div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade overflow-hidden "  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg " >
                    <div className="modal-content h-100" style={{height:"80vh" }}>
                        <div className="modal-header ">
                         
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        
                            {selectedBlog ? (
                                <>
                       <div className="container">
                       <div className="row d-flex align-items-center align-content-center justify-content-center p-3">
                                <div className="col-lg-6 col-12">
                                    <div className="h-100">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_URL}${selectedBlog.image_file}`}
                                        alt={selectedBlog.blog_title}
                                        className="img-fluid w-100 h-100 object-fit-cover shadow"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="h-100 text-center">
                                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
                                {selectedBlog ? selectedBlog.blog_title : "Modal title"}
                            </h1>
                                    <p className='fw-medium py-3 text-break'>{selectedBlog.blog_description}</p>
                                    </div>
                                </div>
                            </div>
                                     
                       </div>
                             
                                </>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hoc(Blog);
