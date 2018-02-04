import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './MerchDisplay.css';

class MerchDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merch: null,
    };
  }

  componentDidMount() {
    fetch(`/_api/merchandise/item/${this.props.match.params.item}`)
      .then(res => res.json())
      .then(merch => this.setState({ merch }));
  }

  render() {
    const { merch } = this.state;
    return (
      <div className="merch">
        <div className="merchBackground" />
        <div className="PageBlock">
          {merch && (

            <div className="PageUnit displayUnit">
              <div className="displayFrame">
                <img
                  className="displayFrame"
                  src={merch.img_url}
                  alt={merch.title}
                />
              </div>
              <div className="PageUnitCopy">
                <div className="merchTitle">
                  {merch.title}
                </div>
                <div className="merchDesc displayDesc">
                  <div className="displayDescCopy">
                    {merch.description}
                  </div>
                  <span>
                    {(() => {
                      const price = merch.price.toString();
                      return `$${price.substring(0, price.length - 2)}.${price.substr(-2)}`;
                    })()}
                  </span>
                  <div>
                    {merch.quantities.map(qty => (
                      <button className={`displaySizeButton ${!qty.quantity && 'disabled'}`}>
                        {qty.description}
                      </button>
                      // return `${qty.description} - ${qty.quantity}`
                    ))}
                  </div>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
    );
  }
}

MerchDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default withRouter(MerchDisplay);
