
import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import './home.scss';
import $ from 'jquery';
import HeaderNav from '@/components/pc/home/header/headerNav';
import Header from '@/components/pc/home/header/header';
import LeftModule from '@/components/pc/home/content/leftModule';
import CenterModule from '@/components/pc/home/content/centerModule';
import RightModule from '@/components/pc/home/content/rightModule';
import Footer from '@/components/pc/home/footer/footer';

class Home extends Component {
  constructor() {
  super();
  this.state = {
    search:'',
    categoryId:''

  };
}
  componentDidMount() {

    $(window).scroll(res => {
      // console.log($(window).scrollTop());

      var headerHeight = $(".header").height() + parseInt($(".header").css('margin-bottom'));
      if($(window).scrollTop() > headerHeight){
        $(".header-nav").css({
          'position': 'fixed',
          'top': '0',
        });
      } else {
        $(".header-nav").css({
          'position': 'relative',
          'top': 'unset',
        });
      }
    })
  }
  passSearch(value){    //handleEmail其实是回调函数 子组件给父亲传参 把表单数据通过handleemail传入 进而保存入父组件state 然后post给服务器
    console.log(typeof(value))  ;  console.log(value)
   this.setState({
     search: value
   })
}
passCategory(value){    //handleEmail其实是回调函数 子组件给父亲传参 把表单数据通过handleemail传入 进而保存入父组件state 然后post给服务器
  console.log(typeof(value))  ;  console.log(value)
 this.setState({
   categoryId: value
 })
}

  render() {
    console.log(this.state.search)
    return (
      <div className="App">
        <Layout>
          <Header/>
          <HeaderNav className="header-nav"  passSearch={this.passSearch.bind(this)}  passCategory={this.passCategory.bind(this)}/>
          <div className="content-module-box">
            <Row>
              <Col span={6} id="content-left" className="content-left">
                <LeftModule/>
              </Col>
              <Col span={12} id="content-center" className="content-center"  >
                <CenterModule searchValue={this.state.search} categoryId={this.state.categoryId}/>
              </Col>
              <Col span={5} id="content-right" className="content-right">
                <RightModule/>
              </Col>
            </Row>
          </div>
          <Footer/>
        </Layout>
      </div>
    )
  }
}

export default Home
