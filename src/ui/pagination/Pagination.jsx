import React, { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  totalPages,
  onPageChange,
  defaultCount,
  onItemsChanged,
  focus,
}) => {
    const [focused, setFocused] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    
    const pagesList = useMemo(() => {
        return Array.from({ length: totalPages }, (v, k) => k + 1);
    }, [totalPages]);
    
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = pagesList.slice(itemOffset, endOffset);
    
    useEffect(() => {
        if (focus) {
            setFocused(0);
        }
    }, [focus]);
   

  const handlePageClick = (event) => {
    onPageChange?.(event.selected);
    setFocused(event.selected);
    const newOffset = (event.selected * itemsPerPage) % totalPages;

    setItemOffset(newOffset);
  };

  useEffect(() => {
    onItemsChanged?.(itemsPerPage);
  }, [itemsPerPage]);

  return (
    <>
      {pagesList.length > 0 && (
        <div className="PaginationContainer">
          <div className="paginations cursorpointer">
            <ReactPaginate
            //   forcePage={focused}
            //   breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={totalPages}
              previousLabel="< "
              renderOnZeroPageCount={null}
              previousLinkClassName={"selectContainer prev-btn"}
              nextLinkClassName={"selectContainer next-btn btn-active"}
              containerClassName={"pagination"}
              pageClassName={"page"}
              activeClassName={"active"}
            />
          </div>

          <div className="PaginationDisplay">
            {/* <input
              defaultValue={defaultCount}
              onChange={(e) => {
                if (e.target.value > 0) {
                  setItemsPerPage(e.target.value);
                }
                setFocused(0);
                onPageChange?.(1)
              }}
              min={1}
              type="number"
              className="custom-number text-center"
              /> */}
            {/* <select
              className="PaginationDisplay2"
              defaultValue={defaultCount}
              onChange={(e) => {
                if (e.target.value > 0) {
                  setItemsPerPage(e.target.value);
                }
                setFocused(0);
                onPageChange?.(1)
              }}
              >
                <option value={"10"}>10</option>
                <option value={"25"}>25</option>
                <option value={"50"}>50</option>
                <option value={"100"}>100</option>
                <option value={"500"}>500</option>
              </select> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
