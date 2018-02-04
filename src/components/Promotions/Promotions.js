import React from 'react';
import { Link } from 'react-router-dom';
import './Promotions.css';
import projects from './projects.svg';
import events from './events.svg';
import interviews from './interviews.svg';

const Promotions = () => (
  <div>
    <div className="promotionsBackground" >
      <div className="promotionsBackgroundMask" />
    </div>
    <div className="promotionsBlock">
      <Link class="linkSuppress" to="/promotions/projects">
        <div className="promotionsUnit">
          <img src={projects} className="promotionsUnitIcon" alt="Projects" />
          <br />
          <span className="promotionsUnitTitle">&nbsp;PROJECTS</span>
        </div>
      </Link>
      <Link class="linkSuppress" to="/promotions/events">
        <div className="promotionsUnit">
          <img src={events} className="promotionsUnitIcon" alt="Events" />
          <br />
          <span className="promotionsUnitTitle">&nbsp;EVENTS </span>
        </div>
      </Link>
      <Link class="linkSuppress" to="/promotions/interviews">
        <div className="promotionsUnit">
          <img src={interviews} className="promotionsUnitIcon" alt="Projects" />
          <br />
          <span className="promotionsUnitTitle">&nbsp;INTERVIEWS</span>
        </div>
      </Link>
    </div>
  </div>
);

export default Promotions;
