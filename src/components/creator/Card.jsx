import React from 'react'
import { Link } from 'react-router-dom'
//import t1 from '../../images/t1.png'

const Card = ({creator}) => {
   
  return (
    <div
    className="creator-single col-lg-3 col-md-4 col-sm-6"
   
  >
    <div className="top-seller-inner-one explore">
      <div className="top-seller-wrapper">
        <div className="thumbnail">
          <Link to="author.html">
            <img src={creator.profilePicture} alt="Nft_Profile"  style={{height:'80px',width:'80px',objectFit:'cover'}}/>
          </Link>
        </div>
        <div className="top-seller-content">
          <Link to="author.html">
            <h6 className="name">{creator.name}</h6>
          </Link>
          <span className="count-number">$2200,000</span>
        </div>
      </div>
      <a className="over-link" href="author.html">s</a>
    </div>
  </div>

  )
}

export default Card