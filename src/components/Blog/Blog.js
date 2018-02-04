import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedposts: null,
    };
  }

  componentDidMount() {
    const toggleSidebar = () => {
      document.querySelector('.blogSidebar')
        .classList.toggle('blogSidebarExposed');
      document.querySelector('.blogSidebarExposer')
        .classList.toggle('blogSidebarExposerFlip');
    };
    document.querySelector('.blogSidebarExposer')
      .addEventListener('click', toggleSidebar);
    document.querySelector('.blogSelector')
      .addEventListener('change', (e) => {
        if (e.target.selectedOptions[0].value !== 'all') {
          this.setState({
            selectedposts: this.state.blogposts.filter(el =>
              el.date_string === e.target.selectedOptions[0].value) });
        } else {
          this.setState({ selectedposts: this.state.blogposts });
        }
        toggleSidebar();
      });
    fetch('/_api/blogposts')
      .then(res => res.json())
      .then(res => res.sort((a, b) => a.id > b.id))
      .then((res) => {
        this.setState({ blogposts: res, selectedposts: res });
      });
  }

  render() {
    return (
      <div className="blog">
        <div className="blogSidebar">
          <div className="blogSidebarFlex">
            <div>
              <span className="PageUnitCopyEntryTitle blogSideBarBig">
                PUBLICIST
              </span>
              <span className="PageUnitCopyEntryText blogSideBarSmall">
                {'Ashton Coelho'.toUpperCase()}
              </span>
              <a className="linkSuppress" href="mailto:ashtonpr@evenrights.com" target="_erMail">
                <span className="PageUnitCopyEntryText blogSideBarSmall">
                  ASHTONPR@EVENRIGHTS.COM
                </span>
              </a>
            </div>
            <div>
              <span className="PageUnitCopyEntryTitle blogSideBarBig">
                BLOG WRITERS
              </span>
              <span className="PageUnitCopyEntryText blogSideBarSmall">
                {'Daniela K. Ghiglieri'.toUpperCase()}
              </span>
              <a className="linkSuppress" href="mailto:dkg@evenrights.com" target="_erMail">
                <span className="PageUnitCopyEntryText blogSideBarSmall">
                  {'dkg@evenrights.com'.toUpperCase()}
                </span>
              </a><br />
              <span className="PageUnitCopyEntryText blogSideBarSmall">
                {'Jamie L. Payne'.toUpperCase()}
              </span>
              <a className="linkSuppress" href="mailto:jlp@evenrights.com" target="_erMail">
                <span className="PageUnitCopyEntryText blogSideBarSmall">
                  {'jlp@evenrights.com'.toUpperCase()}
                </span>
              </a>
            </div>
            <div>
              <span className="PageUnitCopyEntryTitle blogSideBarBig">
                ARCHIVE
              </span>

              <select className="blogSelector">
                <option value="all">All</option>
                {this.state.blogposts instanceof Array &&
                  this.state.blogposts.map(doc =>
                    (<option value={doc.date_string}>{doc.date_string}</option>)
                  )}
              </select>
            </div>
          </div>
          <div className="blogSidebarExposer">&#9660;</div>
        </div>
        <div className="PageBlock blogBlock">
          {/* <span className="PageTitle">BLOG</span> */}
          {this.state.selectedposts instanceof Array &&
            this.state.selectedposts.map((doc) => {
              let snippet = JSON.parse(doc.copy)[0];
              snippet = snippet.substring(0, (300 + snippet.substring(300).indexOf(' ')));

              return (
                <Link to={`/blog/${doc.id}`} className="linkSuppress">
                  <div className="PageUnit blogUnit">
                    <div>
                      <span className="blogUnitTitle">
                        {doc.title.toUpperCase()}
                      </span>
                      <span className="blogUnitSubTitle">
                        {doc.date_string.toUpperCase()} | {doc.author.toUpperCase()}
                      </span>
                      <br />
                      <span className="blogUnitSnippet">
                        {`${snippet}... `}
                        <span style={{ letterSpacing: 'none', color: '#9aaeb6' }}>
                          READ MORE
                        </span>
                      </span>
                    </div>
                    <div
                      className="blogFrame"
                      style={{
                        backgroundImage: `url(${doc.img_url})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                </Link>
              );
            }) }
        </div>
      </div>
    );
  }
}

export default Blog;

// [`The Event “SMR 16’ Sophisticated Ignorance Pool Party” is a gathering of HBCU students from all over the country to network. Students are coming together to celebrate success as alumni, or communing about the constant grind. The party will feature Fraternities, sororities, sing alongs, and rituals that play a huge roll in the lifestyle of the south. While the party welcomes CSU/UC  as well as non students, bringing the HBCU experience to California can open the eyes of those teetering between attending college in state vs out of state.`,
// `Anthony Andre Tabor, “Dre T” the brand is San Francisco based music producer, songwriter, and composer. Dre T really believes in building and connecting with people with different backgrounds and nationalities; supporting the freedom, spirituality, and fun.`,
// `This event is about setting an example for the next generation to come. Showing them that they have options and that there's more to experience then just the Bay Area. Current and HBCU alumni will be in attendance, all heroes don't wear capes. They are the example that the next generation needs to see.`,
// `Contact: Anthony Andre Tabor`,
// `Email: anthony_tabor_00@subr.edu`,
// `Southern University Baton Rouge`,
// `Marketing w/ Concentration in Sales`
// ]
