import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = props => (
  <div className="home about">
    <button className="aboutReach" onClick={props.contact}>REACH US</button>
    <div className="aboutBlock">
      <img className="aboutImage" src="/images/home/about.jpg" alt="about" />
      <div className="aboutText">
      EvenRights is a lifestyle brand promoting creativity and optimism through events, projects, collaborations and management. <br /><br />
      The main focus of EvenRights is to eliminate negative stereotypes and promote equality, understanding the fact that people come in all colors, shapes and sizes. <br /><br />
      We believe similarities in people cross race, social and economic boundaries. Our events, projects and management are organized with the idea that anyone can enjoy what we have to offer.<br /><br />
      We have a diverse team of people that believe in our brand and our positive message of constantly striving to better ourselves and the world around us.
      </div>

    </div>
  </div>
);
export default About;
