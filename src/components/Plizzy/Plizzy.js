import React from 'react';
import { Link } from 'react-router-dom';
import './Plizzy.css';

class Plizzy extends React.Component {
  componentDidMount() {
    Array.from(document.getElementsByClassName('plizzyButtons'))
      .forEach(element => element.addEventListener('click', (e) => {
        document.querySelector('.plizzyBackground').id = e.target.id;
      }));
  }
  render() {
    return (
      <div>
        <div className="plizzyBackground" />
        <div className="plizzy">
          <Link to="/blog/2" className="linkSuppress">
            <span style={{ color: 'black', zIndex: '9' }}>
              {`Alex Platt, better known as audio engineer Plizzy, has yet to reach the
              peak of his engineering career. Plizzy has experience working with a
              variety of artist and ensures the artist's musical needs and desires are
              always met. A sound engineer, is someone who works...`}
              <span style={{ color: 'darkgrey' }}>READ MORE</span>
            </span>
          </Link>
          <div>
            {[1, 2, 3].map(num => (
              <img
                style={{ zIndex: '10' }}
                className="plizzyButtons"
                id={`plizzy${num}`}
                alt={`plizzy${num}`}
                src={`/images/plizzy/${num}.jpg`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Plizzy;
