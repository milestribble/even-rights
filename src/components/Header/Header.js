import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';
import home from './home.svg';
import cart from './cart.svg';

const Header = ({ target }) => (
  <div className={
    target === 'blog' || target === 'about'
      ? 'headerBackground headerBackgroundBold'
      : 'headerBackground'}
  >
    <div className="header">
      <Link to="/">
        <img src={home} className="headerIcons" alt="home" />
      </Link>
      <div className="nav">
        <div className="navHalf">
          <Link to="/management">
            <button className={
              target === 'management'
                ? 'navItem navItemBold'
                : 'navItem'}
            >
             MANAGEMENT
            </button>
          </Link>
          <span className="navSpacer innerSpacer">| </span>
          <Link to="/merchandise">
            <button className={
              target === 'merchandise'
                ? 'navItem navItemBold'
                : 'navItem'}
            >
              MERCHANDISE
            </button>
          </Link>
        </div>
        <span className="navSpacer middleSpacer">| </span>
        <div className="navHalf">
          <Link to="/promotions">
            <button className={
              target === 'promotions'
                ? 'navItem navItemBold'
                : 'navItem'}
            >
              PROMOTIONS
            </button>
          </Link>
          <span className="navSpacer innerSpacer">| </span>
          <Link to="/blog">
            <button className={
              target === 'blog'
                ? 'navItem navItemBold'
                : 'navItem'}
            >
              BLOG
            </button>
          </Link>
        </div>
      </div>
      <img src={cart} className="headerIcons" style={{ opacity: '0.3' }} alt="cart" />
    </div>
  </div>
);

Header.propTypes = {
  target: PropTypes.string.isRequired,
};

export default Header;
