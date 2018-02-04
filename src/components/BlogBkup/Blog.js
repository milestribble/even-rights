import React from 'react';
import { withRouter } from 'react-router-dom';
import './Blog.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.docs = [
      { title: "EvenRights' Breeanna Decker",
        author: 'Ashton Coelho',
        img: 'https://static.wixstatic.com/media/32437a_4d3fa7b1e5b94c639a297f8d56edc1b3~mv2_d_2000_3000_s_2.jpg/v1/fill/w_656,h_984,al_c,q_85,usm_0.66_1.00_0.01/32437a_4d3fa7b1e5b94c639a297f8d56edc1b3~mv2_d_2000_3000_s_2.webp',
        copy: (
          <div>
            <p>Breeanna Decker In Our latest Black History T-Shirt. At the age of
        twenty four, most people are still trying to figure out who they are and how
        they are going to make their mark on society. At the age of twenty four,
        Breeanna Decker has surpassed what “most people” have accomplished in their
        entire lives. In 2016 Breeanna graduated from the University of San
        Francisco with a masters in Public Affairs however she has been using her
        skills and knowledge to help the youth for many years. Breeanna has a
        passion for youth and education and has become an advocate for those who
        cannot stand up for themselves. Currently, Breeanna is working for a
        well-known community based intermediary, Urban Strategies Council.
        Previously, Breeanna has interned for Alameda County Supervisor Keith Carson
        as well as Oakland City Councilmember Lynette McElhaney.
            </p>
            <p>EvenRights - How do you feel promoting creativity and Optimism can have
               a positive change in today's generation?
            </p>
            <p>
        Breeanna Decker - “Society has made us to feel as though we don't have choices,
        like we must accept everything that is presented to as the only reality.
        I beg to differ. Being optimistic and creative are conscious choices that can
        lead to the positive changes. Promoting optimism and creativity gives us more
        power to no longer accept what we are fed and to direct impact change.”
            </p>
            <p>
        EvenRights - EvenRights promotes creativity and optimism being an owner of a brand how hard is it to remain creative and optimistic?
        </p><p>
        Breeanna Decker - “Everything that is worth something comes with a challenge. It is not hard to remain optimistic and creative when it is a lifestyle. In all I do I strive to be optimistic and different, I.e. creative.”
        </p><p>
        EvenRights -  What are your thoughts  on everyone being equal with creativity and optimism but, being afraid to believe in themselves? What would you tell someone asking you for advise on this situation?
        </p><p>
        Breeanna Decker - “As a child of God, I am obligated to love.  Regardless of personal feelings, I am to love my neighbor as God has love me. That is regardless of how people choose to live their lives. We are not called to agree with each other's life choices; We are not even called to be liked. We are called to love each other which is supreme and seperate from likes and agreements.  Beyond that if one doesn't believe in oneself, why should anyone else believe in you. It starts from within.”
        </p><p>
        EvenRights- How do you feel you're creativity has driven you to be not only a better person for yourself but for those who look up to you?
        </p><p>
        Breeanna Decker - “I receive creativity as being different.  I grown up being the different, never fitting in with with a clique or crew.  In a world where people are like sheep and will follow each other even to his/her own detriment, being creative and different literally changes and saves lives.”
        </p><p>
        EvenRights - Have you gone through struggles in life where your optimistic attitude made you power through tough times?
        </p><p>
        Breeanna Decker - “Every Day!”
        </p></div>) },
      { id: 'plizzy',
        title: 'Engineer Alex Platt, better known as Plizzy.',
        author: 'Ashton Coelho',
        img: 'https://static.wixstatic.com/media/32437a_76b7b8a2f5c14619bcb9f32195b43e77~mv2.jpg/v1/fill/w_1080,h_1080,al_c,q_85/32437a_76b7b8a2f5c14619bcb9f32195b43e77~mv2.webp',
        copy: (
          <div>
            <p>Alex Platt, better known as audio engineer Plizzy, has yet to reach the peak of his engineering career. Plizzy has experience working with a variety of artist and ensures the artist's musical needs and desires are always met. A sound engineer, is someone who works on the technical aspects of a recording. Plizzy’s first start in music was through instruments in middle school. He played the trumpet, bass guitar and drums to name a few. Plizzy always thought he wanted to record music. His father, Gary Platt founder of both Expression College for Digital Arts and All Bay Music Studios, has been a huge influencer on his career. Over time, Plizzy realized that he liked working on the back end aspect of a recording, rather than being the artist on the track. He “decided to try it and become the best at it” Plizzy also has said that he would “rather be a part of 100 people’s career as an engineer.” Plizzy uses the analogy that music can be related to photography, to take a picture is similar to recording a track, and to use photoshop on that photo is similar to having an engineer work on a track.
    </p><p>
    The journey that Plizzy has taken to get to this point in his life, has been very unconventional but also very rewarding. After graduating high school, Plizzy enrolled in SF State for business and graduated in 2014. Shortly after, he opened a Cannabis Extract Company with a friend. The company has only been active for about a year but has already been highly successful. The company, MyChron, specializes in cold water hash extracts. Plizzy is an entrepreneur on many levels, he realized that his life plan included engineering and selling Cannabis and that is exactly what he is doing. He also realized that the music industry and Cannabis industry and very well connected. Both industries go hand in hand and
     networking at the studios has allowed Plizzy to grow his Cannabis company. If these two business ventures weren't already enough, what if I tell you he also owns a clothing company?
    Plizzy has been working at All Bay Music Studios for many years and he has helped build the studio and shape what it has become.
    </p><p>
    All Bay Music Studios is a place where people can come together in the hub of the Bay Area. It doesn't matter where you come from, everything is about the music and the vibe. Plizzy “i love surrounding myself with people who actually believe they are going to make it.” All Bay has a very positive feel to it, you can feel the magic being created. Plizzy says that he has a “better ear engineering than playing.” You can tell when speaking with him that his passion for engineering and music in general is unimaginable. He truly loves what he does, and he looks forward to the next collaboration. When working with an artist, Plizzy always makes sure the artists, style, wants and desires are clearly heard in the track.
    </p><p>
    While Plizzy got his start at All Bay Music Studios, it is not the only studio you will find him in. A few months back he was fortunate enough to catch the attention of Bay Area Music Engineer, “Exclusive” who is the founder of Oscillation Studios and Stoop Kids Music Group. “Exclusive” has asked Plizzy to come on board as an Engineer to work with new clients and build up his archived works. Working with “Exclusive” has been a process, but one that Plizzy is glad to be a part of. Plizzy understands that working with people like Exclusive is the next step in his career. Making a name for himself and working with new artists will only help his future. On top of this new venture, Plizzy will also begin teaching at his dad’s new school, Platt Academy. He has a very hands on approach to teaching, which allows for more organic learning.
    </p><p>
    Management & publishing
    Plizzy is currently being managed by EvenRights Management. He was first introduced to EvenRights through Co-Founder Crystal Florida, and President Laron Bailey. Plizzy recalls first meeting Laron and the two spending hours talking about music, life and really connecting. EvenRights takes pride in ensuring that Plizzy has maximum management support at all times. EvenRights Publicist, Cathrine Handlin is in charge of scheduling and keeping Plizzy's calendar organized and functional. The relationship between Plizzy and EvenRights is cohesive and smooth flowing, which allows Plizzy to focus on his art rather than his schedule. Website and blog content are worked on as a team with EvenRight's President Laron Bailey being the brains behind the operation.
    On an average day, Plizzy is working from dusk till dawn on one of his many business adventures. He believes that music is therapy and it heals him from the stresses of life. When he steps into the studio, he is just an artist making music.
        </p></div>) },
    ];
  }

  componentDidMount() {
    const getDFT = (element) => {
      var yPos = 0;
      while(element) {
          yPos += (element.offsetTop);
          element = element.offsetParent;
      }
      return yPos;
    }

    if (this.props.location.hash === '#plizzy') {
      console.log(document.querySelector('#plizzy'));
      window.scrollTo(0, getDFT(document.querySelector('#plizzy')));
    }
    // window.location.hash = this.props.location.hash;
  }

  render() {
    return (
      <div>
        <div className="blogBackground" >
          <div className="blogBackgroundMask" />
        </div>
        <div className="blog">
          {/* <div className="blogHeader">INTERVIEWS</div> */}
          {this.docs.map((doc, index) => (

            <div className="blogBlock">
              <div className="blogTitle">
                {doc.title}
              </div><br />
              <div className="blogAuthor">
                {doc.author}
              </div><br />
              <img className="blogImage" src={doc.img} alt={doc.title} /><br />
              <div className="blogCopy">
                <a className="anchor" id={doc.id || ''} />
                {/* <span className="descLabel">Name:</span> {doc.name}<br /> */}
                {doc.copy}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Blog);
