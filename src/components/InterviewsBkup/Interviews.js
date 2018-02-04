import React from 'react';
// import { Link } from 'react-router-dom';
import './Interviews.css';

const docs = [
  { name: 'Young Gully'.toUpperCase(),
    src: 'https://www.youtube.com/embed/xQa27A_cbPU',
    desc: `Young Gully talks about why it's important to promote creativity and
    optimism in our society and generation. He touches on the significance of
    staying creative as a music artist and how he used creativity and optimism
    to overcome hurdles and tribulations.` },
  { name: 'Sammy Hastings',
    src: 'https://www.youtube.com/embed/DFVoe7qm56g',
    desc: `Sammy Hastings Talks about the importance in promoting creativity and
    optimism in our society and generation . He touches on the significance of
    staying creative as a Real estate broker in one of the hottest real estate
    markets in the world.  Mr Hastings explains how he used creativity and optimism
    to overcome the hurdles and tribulations of being openly gay.` },
  { name: 'Jonny Crosthwaite',
    src: 'https://www.youtube.com/embed/YvhdWDgVDuc',
    desc: `Johnny talks about how important setting a goal and staying focused on
    that despite distractions can help you achieve greatness. Staying focused
    despite what the norm is and believing in yourself, or your brand, or your
    idea is ultimately how you'll see positive results.` },
  { name: 'CeeLee',
    src: 'https://www.youtube.com/embed/ix1hiQmlbYs',
    desc: `CeeLee, CEO of The Cee Lee Brand opens up with EvenRights about his
    feelings of being free when expressing his creativity through his craft. Gives
    us Discussion on how promoting creativity and optimism will help not only our
    generation but our society.` },
  { name: 'Bill Duffy',
    src: 'https://www.youtube.com/embed/2Lh3kEYB6Xw',
    desc: `Bill Duffy talks about overcoming challenges by having faith,
    confidence and being a hard worker and getting past the challenges that we
    all experience everyday. "Everyone has their cross to carry" Important to be
    mindful that we all have challenges despite what you see on the outside you
    never know whats going on in the inside.` },
  { name: 'REECEBEATS',
    src: 'https://www.youtube.com/embed/mcROO51clIs' },
  { name: 'Micheal Baines',
    src: 'https://www.youtube.com/embed/kpY-9BPOoMo' },
];

const Interviews = () => (
  <div>
    <div className="interviewBackground" >
      <div className="interviewBackgroundMask" />
    </div>
    <div className="interview">
      {/* <div className="interviewHeader">INTERVIEWS</div> */}
      {docs.map((doc, index) => (

        <div className="interviewBlock">
          <div className="interviewTitle">
            {doc.name}
          </div>
          <iframe
            className="interviewFrame"
            title={doc.name}
            src={doc.src}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullscreen
          />
          <div className="interviewDesc">
            {/* <span className="descLabel">Name:</span> {doc.name}<br /> */}
            {doc.desc}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Interviews;
