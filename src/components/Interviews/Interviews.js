import React from 'react';
// import { Link } from 'react-router-dom';
import './Interviews.css';

class Interviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interviews: null,
    };
  }

  componentDidMount() {
    fetch('/_api/interviews')
      .then(res => res.json())
      .then(interviews => this.setState({ interviews }));
  }

  render() {
    const { interviews } = this.state;
    return (
      <div className="interviews">
        <div className="PageBlock">
          <span className="PageTitle">INTERVIEWS</span>
          {interviews && interviews.map((interview, index) => (
            <div className="PageUnit">
              <iframe
                className="interviewFrame"
                src={interview.video_url}
                title={index}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullscreen="allowfullscreen"
              />
              <div className="PageUnitCopy">
                <span className="PageUnitCopyEntryTitle">
                  Name:&nbsp;
                </span>
                <span className="PageUnitCopyEntryText">
                  {interview.name}
                </span>
                {interview.description && (<div>
                  <span className="PageUnitCopyEntryTitle">
                    Description:&nbsp;
                  </span>
                  <span className="PageUnitCopyEntryText">
                    {interview.description}
                  </span>
                </div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Interviews;
