import React from "react";
import { Link } from "react-router-dom";
import { usePagination, DOTS } from "./usePagination";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 0,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    let lastPage = paginationRange[paginationRange.length - 1];
    if (currentPage < lastPage) {
    onPageChange(currentPage + 1);
    } 

  };

  const onPrevious = () => {
    if (currentPage > 1) {
    onPageChange(currentPage - 1);
    }
  };

  
  return (
    <div class="row">
      <div
        class="col-lg-12"
        data-sal="slide-up"
        data-sal-delay="550"
        data-sal-duration="800"
      >
        <nav class="pagination-wrapper">
          <ul class="pagination">
            <li class="page-item">
              <Link class=" page-link" onClick={onPrevious} style={{cursor:'pointer'}}>
                Previous
              </Link>
            </li>

            {paginationRange.map((page) => {
              if (page === DOTS) {
                return (
                  <li class="page-item">
                    <Link class="page-link  dots">...</Link>
                  </li>
                );
              }

              return (
                <li class="page-item">
                  <Link
                    class={`page-link ${page === currentPage ? "active" : ""}`}
                    onClick={() => onPageChange(page)}
                    style={{cursor:'pointer'}}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}

            <li class="page-item">
              <Link class=" page-link " onClick={onNext} style={{cursor:'pointer'}}>
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;