import React from 'react';
// import { Link } from 'react-router-dom';
import './Projects.css';

const imgs = [
  'https://drive.google.com/uc?id=0B1yEEBkCfHY3SGZiV0dFVHM3SzA',
  'https://drive.google.com/uc?id=0B1yEEBkCfHY3bzFxcXBEb2JFbUE',
  'https://drive.google.com/uc?id=0B1yEEBkCfHY3ck9KeGE0V2xCeTA',
  'https://drive.google.com/uc?id=0B1yEEBkCfHY3UUFWTWdBalNqWjg',
];

const Projects = () => (
  <div className="events">
    <div className="PageBlock">
      <span className="PageTitle">PROJECTS</span>
      <div className="PageUnit eventsUnit">
        <div style={{ textAlign: 'center' }}>
          <span className="PageUnitCopyEntryTitle">
            EvenRights First Project Cypher
          </span>
          <iframe
            title="first project cypher"
            width="690"
            height="405"
            className="interviewFrame"
            src="https://www.youtube.com/embed/7dQtL97NzRU"
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen="allowfullscreen"
          />
        </div>
        <div className="PageUnitCopy">
          <div>
            <div className="PageUnitCopyEntry">
              <span className="PageUnitCopyEntryText">
                {`EvenRights strives to promote creativity and optimism and one
                  of the ways in which we will do this is through our projects.
                  The first project we launched was was 7thLetter. The 7th letter
                  in the alphabet is "G" and through this project we hope to
                  inspire people to reach their greatness which we all can obtain.
                  Accompanied with each project will be music cyphers, events,
                  collaborations and visuals. Our goal is to effect the world in
                  a positive light with each project being a different form of
                  our message. Our first project was donated to homeless veterans
                  and is not for sale however following projects will gradually
                  be available through growth of our brand.`}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {imgs.map(img =>
          (<div
            className="projectsPicture"
            style={{ backgroundImage: `url(${img})` }}
          />)
        )}
      </div>
    </div>
  </div>
);

export default Projects;
