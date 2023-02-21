import React, { useMemo ,useState} from "react";
import Card from "../components/creator/Card";
import axios from 'axios'
import Pagination from '../components/pagination/Pagination'



let PageSize = 4;

const FindCreator = () => {
  const [creators, setCreators] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return creators.sort((a, b) => a.name > b.name ? 1 : -1).slice(
      firstPageIndex,
      lastPageIndex
    );
  }, [currentPage, creators]);
  

  const fetchCreators = async () => {
    try {
      const res=await axios.get("http://glhapi.ekanatechnologies.in/api/auth/get");
      res.status===200 && setCreators(res.data.users);
      
    } catch (error) {
      console.log(error);
    }
      
    }
    React.useEffect(() => {
      fetchCreators();
    }, []);


  
  return (
    <div>
      <div className="rn-creator-title-area rn-section-gapTop">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <h2 className="title mb--0">Our Best Creators</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
              <div className="shortby-default text-start text-sm-end">
                <label className="filter-leble">SHORT BY:</label>
                <select className="py-3">
                  <option value="1">Best Seller</option>
                  <option value="2">Recent Added</option>
                  <option value="3">Varified</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30 creator-list-wrapper">
           {
              currentTableData.map((creator, index) => {
                return <Card key={index} creator={creator} />
              })
            }
           
           
          </div>
        </div>
      </div>
      <div className="rn-pagination-area pt--120 pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

          <Pagination currentPage={currentPage}
                totalCount={creators.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                 />
                 </div>
                 </div>
              
         
        </div>
      </div>
    </div>
  );
};

export default FindCreator;