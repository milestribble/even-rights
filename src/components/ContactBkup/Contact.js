import React from 'react';
import chat from './chat.svg';
import network from './network.svg';
import './Contact.css';

class Contact extends React.Component {
  componentDidMount() {
    const click = (e) => {
      if (e.target.classList.contains('contactContainer')) {
        this.props.exit();
      }
    }
    document.querySelector('.contactContainer')
      .addEventListener('click', click);
    document.querySelector('.contactModalExit')
      .addEventListener('click', click);
    document.getElementById('contactForm')
      .addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.contactEmail.value;
        const name = e.target.contactName.value;
        const number = e.target.contactNumber.value;
        const message = e.target.contactMessage.value;
        const body = JSON.stringify({ name, email, number, message });
        console.log(body);
        fetch('/contact', {
          method: 'POST',
          body,
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(({ error, success }) => {
            if (success) {
              this.props.exit();
            }
          });
      });
  }

  render() {
    return (
      <div className="contact" style={this.props.show === true ? {} : { display: 'none' } } >
        <div className="contactContainer">
          <div className="contactModal">
            <div className="contactModalExit">
              X
            </div>
            <form id="contactForm">
              <span>JOIN OUR MAILING LIST</span>
              {/* <br /> */}
              <div className="cformRow">
                <img className="cformIcon" src={chat} alt="chat" />
                <div className="cformEntity">
                  <label>Email</label><br />
                  <input name="contactEmail" type="email" /><br /><br />
                </div>
              </div>
              <br />
              <span>BUSINESS INQUIRIES</span>
              <div className="cformRow">
                <img className="cformIcon" src={network} alt="network" />
                <div className="cformEntity">
                  <label>Name</label><br />
                  <input name="contactName" /><br />
                  <label>Number</label><br />
                  <input name="contactNumber" /><br />
                  <label>Message</label><br />
                  <textarea rows="4" name="contactMessage" /><br /><br />
                </div>
              </div>
              <button className="cformSubmit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
