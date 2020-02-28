import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import MobileHome from './views/mobile/home/home';
import MediaQuery from 'react-responsive';

import Home from '@/views/pc/home/home.js';
import PCNewsDetails from '@/views/pc/pc_news_details/pc_news_details.js';
import ClassifiedHome from '@/views/pc/classified_home/classified_home.js';
import Profile from '@/views/pc/profile/profile.js';

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <MediaQuery query='(min-device-width:1224px)'>

          <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path="/details/:newsId" component={PCNewsDetails}></Route>
            <Route exact path="/classifiedhome" component={ClassifiedHome}></Route>
            <Route path="/profile" component={Profile}></Route>
          </Switch>
          </Router>

        </MediaQuery>

        <MediaQuery query='(max-device-width:1224px)'>

          <Router>
          <Switch>
            <Route exact path='/' component={MobileHome} />
          </Switch>
          </Router>

        </MediaQuery>
      </div>
    )
  }
}

export default App;
