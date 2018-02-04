import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Merch.css';

class MerchCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merch: null,
    };
  }

  componentDidMount() {
    fetch(`/_api/merchandise/category/${this.props.category}`)
      .then(res => res.json())
      .then(merch => this.setState({ merch }));
  }

  render() {
    return (
      <div className="merch">
        <div className="merchBackground" />
        <div className="PageBlock merchBlock">
          <div className="PageTitle">
            {this.props.category.toUpperCase()}
          </div>
          {this.state.merch && this.state.merch.map(item => (

            <Link to={`/merchandise/${item.id}`} className="linkSuppress">
              <div className="merchUnit">
                <div
                  className="merchFrame"
                  style={{
                    background: `url(${item.img_url})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="merchTitle">
                  {item.title}
                </div>
                <div className="merchDesc">
                  <span>
                    {(() => {
                      const price = item.price.toString();
                      return `$${price.substring(0, price.length - 2)}.${price.substr(-2)}`;
                    })()}
                  </span>
                </div>
              </div>
            </Link>

          ))}
        </div>
      </div>
    );
  }
}

MerchCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default MerchCategory;
