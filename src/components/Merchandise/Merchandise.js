import React from 'react';
import { Link } from 'react-router-dom';
import './Merchandise.css';
import snapbacks from './snapbacks.svg';
import tShirts from './t-shirts.svg';
// import accessories from './accessories.svg';

const Merchandise = () => (
  <div>
    <div className="merchandiseBackground">
      <div className="merchandiseBackgroundMask" />
    </div>
    {/* <div className="merchandise"> */}
    <div className="merchandiseBlock">
      <Link to="/merchandise/snapbacks" class="linkSuppress">
        <div className="merchandiseUnit">
          <img src={snapbacks} className="merchandiseUnitIcon" alt="Projects" />
          <br />
          <span className="merchandiseUnitTitle">&nbsp;SNAPBACKS</span>
        </div>
      </Link>
      <Link to="/merchandise/tshirts" class="linkSuppress">
        <div className="merchandiseUnit">
          <img src={tShirts} className="merchandiseUnitIcon" alt="Projects" />
          <br />
          <span className="merchandiseUnitTitle">&nbsp;T-SHIRTS </span>
        </div>
      </Link>
    </div>
  </div>
);

export default Merchandise;
