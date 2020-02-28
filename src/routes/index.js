import React from 'react'

import { Switch, Route } from 'react-router-dom';
import Home from '@/views/pc/home/home.js';
import PCNewsDetails from '@/views/pc/pc_news_details/pc_news_details.js';
import ClassifiedHome from '@/views/pc/classified_home/classified_home.js';
import Profile from '@/views/pc/profile/profile.js';
const Routers = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/details/:newsId" component={PCNewsDetails}></Route>
    <Route path="/classifiedhome" component={ClassifiedHome}></Route>
    <Route path="/profile" component={Profile}></Route>
  </Switch>
)

export default Routers
