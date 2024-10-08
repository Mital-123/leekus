import React from 'react'
import ReactPaginate from 'react-paginate'; 

function Pagination(props) {
  return (
    <>
    <div className="d-flex justify-content-center overflow-scroll m-0">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={props.pagecount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={props.handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
    </>
  )
}

export default Pagination