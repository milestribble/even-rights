import React from 'react';
import RouterPropTypes from 'react-router-prop-types';
import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogposts: null,
    };
  }

  componentDidMount() {
    document.querySelector('.headerBackground')
      .style.backgroundColor = 'black';
    fetch(`/_api/blogposts/${this.props.match.params.id}`)
      .then(res => res.json())
      .then((res) => {
        this.setState({ blogposts: res });
      });
  }

  render() {
    return (
      <div className="blog">
        <div className="PageBlock">
          {this.state.blogposts instanceof Array &&
            this.state.blogposts.map(doc =>
              (<div className="PageUnit postUnit">
                <div>
                  <span className="blogUnitTitle">
                    {doc.title.toUpperCase()}
                  </span>
                  <span className="blogUnitSubTitle">
                    {doc.date_string.toUpperCase()} | {doc.author.toUpperCase()}
                  </span>

                  <br />
                  <div className="blogUnitSnippet">
                    <img
                      className="blogFrame postFrame"
                      src={doc.img_url}
                      alt={doc.title}
                    />
                    {JSON.parse(doc.copy).map(p => (<p>{p}</p>))}
                  </div>
                </div>
              </div>)
            )}
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  match: RouterPropTypes.match.isRequired,
};

export default Post;
