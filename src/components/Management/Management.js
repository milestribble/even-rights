import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Management.css';

const Management = ({ contact }) => (
  <div className="management">
    <div className="managementMask" />
    <div className="managementContent">
      <div className="managementBlock">
        <Link class="linkSuppress" to="/management/plizzy">
          <div className="managementUnit">
            <div id="plizzyIcon" className="managementUnitIcon" />
            <br />
            <span className="managementUnitTitle">&nbsp;PLIZZY</span>
          </div>
        </Link>
        <Link class="linkSuppress" to="/management/payday">
          <div className="managementUnit">
            <div id="paydayIcon" className="managementUnitIcon" />
            <br />
            <span className="managementUnitTitle">&nbsp;PAYDAY STUDIOS</span>
          </div>
        </Link>
        <Link class="linkSuppress" to="/management/tones">
          <div className="managementUnit">
            <div id="tonesIcon" className="managementUnitIcon" />
            {/* <img src={blog} className="managementUnitIcon" alt="Projects" /> */}
            <br />
            <span className="managementUnitTitle">&nbsp;TONES MAKEUP & CHAMPAGNE BAR</span>
          </div>
        </Link>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={contact}
        className="managementIntroText"
      >
        Scheduling goes through EvenRights Management.
        <br />
        <span style={{ fontWeight: '700' }}>CLICK HERE</span> to reach us.
      </div>
    </div>
  </div>
);

Management.propTypes = {
  contact: PropTypes.func.isRequired,
};

export default Management;
