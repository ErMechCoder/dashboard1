import React from 'react'
import { Link } from 'react-router-dom'

const AssetPagination = () => {
  return (
    <div className="row">
              <div
                className="col-lg-12"
                data-sal="slide-up"
                data-sal-delay="550"
                data-sal-duration="800"
              >
                <nav
                  className="pagination-wrapper"
                  aria-label="Page navigation example"
                >
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item">
                    <Link Link className="page-link active" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                     <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                     <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                     <Link className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
  )
}

export default AssetPagination