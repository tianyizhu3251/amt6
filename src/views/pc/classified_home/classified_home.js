import React, { Component } from 'react';
import { Layout, Row, Col, 	Card } from 'antd';

class ClassifiedHome extends Component {
  render() {

    return (
      <div>
     <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
       <p>Card content</p>
       <p>Card content</p>
       <p>Card content</p>
     </Card>
     <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
       <p>Card content</p>
       <p>Card content</p>
       <p>Card content</p>
     </Card>
   </div>
    )
  }
}


export default ClassifiedHome
