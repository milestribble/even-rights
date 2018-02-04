import React from 'react';
import PropTypes from 'prop-types';
import './About.css';

const About = ({ contact }) => (
  <div className="about">
    <div className="PageBlock">
      <span className="PageTitle">ABOUT</span>
      <div className="aboutPhotos">
        <div className="aboutImage" src="/images/plizzy/2.jpg" alt="about" />
        <div className="aboutImage" src="/images/home/about.jpg" alt="about" />
        <div className="aboutImage" src="https://drive.google.com/uc?id=0BzRaafOTkltReENWWnJxMTdJblU" alt="about" />
        {/* <div className="aboutImage" src="/images/home/about.jpg" alt="about" /> */}
      </div>
      <div className="aboutText">
        EvenRights is a lifestyle brand promoting creativity and optimism through events, projects, collaborations and management.
        The main focus of EvenRights is to eliminate negative stereotypes and promote equality, understanding the fact that people come in all colors, shapes and sizes.
        We believe similarities in people cross race, social and economic boundaries. Our events, projects and management are organized with the idea that anyone can enjoy what we have to offer.
        We have a diverse team of people that believe in our brand and our positive message of constantly striving to better ourselves and the world around us.
      </div>

    </div>
    <button className="aboutReach" onClick={contact}>REACH US</button>
  </div>
);

About.propTypes = {
  contact: PropTypes.func.isRequired,
};

export default About;
