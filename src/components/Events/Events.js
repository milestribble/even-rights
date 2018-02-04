import React from 'react';
import './Events.css';

const docs = [
  { src: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3S2lxSFROdXJMSkFiaV81QXBRVFlvWWZXSXZv',
    copy: [
      {
        title: 'Name: ',
        text: 'HIERO Day',
      },
      {
        title: 'Date: ',
        text: 'Sept. 7th, 2016',
      },
    ],
  },
  { src: 'https://drive.google.com/uc?id=1z4XlBwTLAWzhRVyNdhYOl7zkzoUwivL1',
    copy: [
      {
        title: 'Name: ',
        text: 'Pull Up',
      },
      {
        title: 'Date: ',
        text: 'April 20th, 2017',
      },
    ],
  },
  { src: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3ZkViOFJWQUI3QWc',
    copy: [
      {
        title: 'Name: ',
        text: 'Sophisticated Ignorance',
      },
      {
        title: 'Date: ',
        text: 'July 23rd, 2016',
      },
    ],
  },
  { src: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3SFNSM3A2UXNLcTA',
    copy: [
      {
        title: 'Name: ',
        text: 'Sophisticated Ignorance',
      },
      {
        title: 'Date: ',
        text: 'July 23rd, 2016',
      },
    ],
  },
  { src: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3Q0t6aGFhM2FRdFU',
    copy: [
      {
        title: 'Name: ',
        text: 'Oakland Jazz Festival',
      },
      {
        title: 'Date: ',
        text: 'July 16th, 2016',
      },
    ],
  },
  { src: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3b2pDcUdMQ2NTSG8',
    copy: [
      {
        title: 'Name: ',
        text: '15 Seeds Charity Tournament',
      },
      {
        title: 'Date: ',
        text: 'June 11th, 2016',
      },
    ],
  },
  { src: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3NFNQQnhyajFKanBFSDFEdmpKNl8zS0FRb2FR',
    copy: [
      {
        title: 'Name: ',
        text: 'Oakland Jazz Festival',
      },
      {
        title: 'Date: ',
        text: 'August 1st, 2015',
      },
    ],
  },
  { src: 'https://drive.google.com/uc?id=0B1yEEBkCfHY3XzRKYks3Zm9uYWM',
    copy: [
      {
        title: 'Name: ',
        text: 'Oakland Jazz Festival',
      },
      {
        title: 'Date: ',
        text: 'August 2st, 2015',
      },
    ],
  },
];

const Events = () => (
  <div className="events">
    <div className="PageBlock">
      <span className="PageTitle">EVENTS</span>
      <hr />
      <span className="PageTitle">PREVIOUS EVENTS</span>
      {docs.map(doc => (
        <div className="PageUnit">
          <div
            className="eventsFrame"
            style={{
              background: `url(${doc.src})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <div className="PageUnitCopy">
            {doc.copy.map(entry => (
              <div>
                <div className="PageUnitCopyEntry">
                  <span className="PageUnitCopyEntryTitle">
                    {entry.title}
                  </span>
                  <span className="PageUnitCopyEntryText">
                    {entry.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Events;
