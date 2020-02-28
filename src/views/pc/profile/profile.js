import React, { Component } from 'react';
import { Layout, Row, Col, 	Card, BackTop, Tabs } from 'antd';

import HeaderNav from '@/components/pc/home/header/headerNav';
import Header from '@/components/pc/home/header/header';
import LeftModule from '@/components/pc/home/content/leftModule';
import CenterModule from '@/components/pc/home/content/centerModule';
import Footer from '@/components/pc/home/footer/footer';
import "animate.css";

const TabPane = Tabs.TabPane;
class Profile extends Component {
  render() {

    return (

      <div>
 <HeaderNav></HeaderNav>
 <Row>
 <Col span={9}> </Col>
 <Col span={7}>

 <Tabs>
   <TabPane tab="My favoutire" key="1"> </TabPane>
   <TabPane tab="My Review" key="2"> </TabPane>
   <TabPane tab="My Photo" key="3"> </TabPane>
 </Tabs>
 </Col>
 <Col span={8}>             <LeftModule/> </Col>

 </Row>
 <Footer></Footer>
 </div>

    )
  }
}


export default Profile
