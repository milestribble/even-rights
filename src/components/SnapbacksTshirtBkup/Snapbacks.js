import React from 'react';
// import { Link } from 'react-router-dom';
import './Snapbacks.css';

const docs = [
  { name: 'Soldier Equality Hat',
    img: 'https://static.wixstatic.com/media/32437a_ee46646a97a44a89b304b0be9f480ec6~mv2_d_1622_1363_s_2.jpg/v1/fill/w_1622,h_1217,q_85,usm_0.66_1.00_0.01/32437a_ee46646a97a44a89b304b0be9f480ec6~mv2_d_1622_1363_s_2.jpg',
    price: '$30.00' },
  { name: 'Black Equality Hat',
    img: 'https://static.wixstatic.com/media/32437a_0dc2620edf5a413caea5a242f3c0cbed~mv2.jpg/v1/fill/w_639,h_852,q_85,usm_0.66_1.00_0.01/32437a_0dc2620edf5a413caea5a242f3c0cbed~mv2.jpg',
    price: '$30.00' },
];

const Snapbacks = () => (
  <div>
    <div className="snapbacksBackground" >
    </div>
    <div className="snapbacks">
      {/* <div className="snapbacksHeader">INTERVIEWS</div> */}
      {docs.map((doc, index) => (

        <div className="snapbacksBlock">
          <div className="snapbacksTitle">
            {doc.name}
          </div>
          <div className="snapbacksFrame"
            style={{
              background: `url(${doc.img})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          {/* <img
            className="snapbacksFrame"
            src={doc.img}
            alt={doc.title}
          /> */}
          <div className="snapbacksDesc">
            {/* <span className="descLabel">Name:</span> {doc.name}<br /> */}
            <span>{doc.price}</span>
            <button className="snapbacksATC">Available Soon</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Snapbacks;
