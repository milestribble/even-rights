import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Management.css';

const Management = props => (
  <div className="management">
    <div className="managementHeader">
      <div className="managementMask" />
      <div
        role="button"
        tabIndex={0}
        onClick={props.contact}
        className="managementIntroText"
      >
        Scheduling goes through EvenRights Management.<br />
        <span style={{ fontWeight: '700' }}>CLICK HERE</span> to reach us.
      </div>
    </div>
    <div className="clients">
      <div className="mgmtGrasshopper">

      </div>
      <div className="mgmtPayday">

      </div>
      <div className="mgmtMychron">

      </div>
      <Link class="linkSuppress" to="/management/plizzy">
        <div className="mgmtPlizzy">

        </div>
        <div className="mgmtPlizzyMask">

        </div>
      </Link>
      <div className="mgmtKayla">

      </div>
      <div className="mgmtKreative">

      </div>
    </div>
    {/* <Link class="linkSuppress" to="/management/plizzy">
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
        <img src={blog} className="managementUnitIcon" alt="Projects" />
        <br />
        <span className="managementUnitTitle">&nbsp;TONES MAKEUP & CHAMPAGNE BAR</span>
      </div>
    </Link> */}
  </div>
);

Management.propTypes = {
  contact: PropTypes.func.isRequired,
};

export default Management;
