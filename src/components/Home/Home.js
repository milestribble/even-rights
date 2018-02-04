import React from 'react';
import PropTypes from 'prop-types';
import RouterPropTypes from 'react-router-prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { About } from '../../components';
import './Home.css';

const Home = ({ contact, history }) =>
  (
    <Switch>
      <Route path="/about" render={() => (<About contact={contact} />)} />
      <Route
        path="/"
        render={() =>
          (<div className="home" >
            <div style={{ position: 'relative', height: '110px' }} />
            <div
              role="button"
              tabIndex={0}
              className="homeIcon"
              onClick={() => history.push('/about')}
            />
            <div className="homeIntroText">
              PROMOTING EQUALITY, CREATIVITY & OPTIMISM THROUGH EVENTS, PROJECTS AND COLLABORATION.
              ELIMINATING NEGATIVE STEREOTYPES.
            </div>
          </div>)
        }
      />
    </Switch>
  );

Home.propTypes = {
  contact: PropTypes.func.isRequired,
  history: RouterPropTypes.history.isRequired,
};

export default withRouter(Home);
