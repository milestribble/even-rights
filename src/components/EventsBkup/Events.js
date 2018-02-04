import React from 'react';
// import { Link } from 'react-router-dom';
import './Events.css';

const docs = [
  { img: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3S2lxSFROdXJMSkFiaV81QXBRVFlvWWZXSXZv' },
  { img: 'https://drive.google.com/uc?id=1z4XlBwTLAWzhRVyNdhYOl7zkzoUwivL1' },
  { img: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3ZkViOFJWQUI3QWc' },
  { img: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3Q0t6aGFhM2FRdFU' },
  { img: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3b2pDcUdMQ2NTSG8' },
  { img: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3SFNSM3A2UXNLcTA' },
  { img: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3NFNQQnhyajFKanBFSDFEdmpKNl8zS0FRb2FR' },
  { img: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3XzRKYks3Zm9uYWM' },
];

const Events = () => (
  <div>
    <div className="eventsBackground" >
    </div>
    <div className="events">
      {/* <div className="eventsHeader">INTERVIEWS</div> */}
      {docs.map((doc, index) => (

        <div className="eventsBlock">
          {/* <div className="eventsTitle">
            {doc.name}
          </div> */}
          <div className="eventsFrame"
            style={{
              background: `url(${doc.img})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          {/* <img
            className="eventsFrame"
            src={doc.img}
            alt={doc.title}
          /> */}
          {/* <div className="eventsDesc"> */}
            {/* <span className="descLabel">Name:</span> {doc.name}<br /> */}
            {/* <span>{doc.price}</span>
            <button className="eventsATC">Coming Soon</button>
          </div> */}
        </div>
      ))}
    </div>
  </div>
);

export default Events;
