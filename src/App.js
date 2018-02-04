import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Contact,
  Blog,
  Events,
  Header,
  Home,
  Interviews,
  Management,
  Merchandise,
  MerchCategory,
  MerchDisplay,
  Payday,
  Plizzy,
  Post,
  Projects,
  Promotions,
  Tones,
} from './components';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: null,
      showContact: false,
    };
  }
  render() {
    return (
      <div className="App">
        <Route
          render={props =>
            (<Header target={props.location.pathname.split('/')[1]} />)
          }
        />
        {this.state.showContact && <Contact
          exit={() => this.setState({ showContact: false })}
        />}
        <Switch>
          <Route path="/management/payday" component={Payday} />
          <Route path="/management/tones" component={Tones} />
          <Route path="/management/plizzy" component={Plizzy} />
          <Route
            path="/management"
            render={() =>
              (<Management contact={() => this.setState({ showContact: true })} />)
            }
          />
          <Route
            path="/merchandise/snapbacks"
            render={() => (<MerchCategory category="snapbacks" />)}
          />
          <Route
            path="/merchandise/tshirts"
            render={() => (<MerchCategory category="t-shirts" />)}
          />
          {/* <Route path="/merchandise/:item" component={MerchDisplay} /> */}
          <Route path="/merchandise" component={Merchandise} />
          <Route path="/blog/:id" component={Post} />
          <Route path="/blog" component={Blog} />
          <Route path="/promotions/projects" component={Projects} />
          <Route path="/promotions/blog" component={Blog} />
          <Route path="/promotions/interviews" component={Interviews} />
          <Route path="/promotions/events" component={Events} />
          <Route path="/promotions" component={Promotions} />
          <Route
            path="/"
            render={() =>
              (<Home contact={() => this.setState({ showContact: true })} />)
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
