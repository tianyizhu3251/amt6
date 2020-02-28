import React from 'react';
import {Row, Col, BackTop} from 'antd';
import { Collapse } from 'antd';

import {Tabs, Carousel} from 'antd';
import {Card} from 'antd';
//import PCNewsBlock from './pc_news_block';
//import CommonComments from './common_comments';
import $ from 'jquery';
import './pc_news_details.scss';
import { Button } from 'antd';
import ShareButton from 'react-social-share-buttons'

import HeaderNav from '@/components/pc/home/header/headerNav';
import Header from '@/components/pc/home/header/header';
import LeftModule from '@/components/pc/home/content/leftModule';
import CenterModule from '@/components/pc/home/content/centerModule';
import Footer from '@/components/pc/home/footer/footer';
import CommonComments from '@/components/pc/pc_news_detail/commonComments';
import "animate.css";
const { Panel } = Collapse;
const TabPane = Tabs.TabPane;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default class PCNewsDetails extends React.Component {

  constructor() {
		super();
		this.state = {
			newsItem: ''
		};

	};
	componentDidMount() {

    // 处理头部黏住
    $(window).scroll(res => {
      // console.log($(window).scrollTop());

    //  var headerHeight = $(".header").height() + parseInt($(".header").css('margin-bottom'));
      if($(window).scrollTop() > 0){
        $(".header-nav").css({
          'position': 'fixed',
          'top': '0',
          'padding':'5px',
          'height':'70px'
        });
        $(".nav-text").css({
          'display': 'none'
        });



      } else {
        $(".header-nav").css({
          'position': 'relative',
          'top': 'unset',
        });
      }
    })




		console.log(this.props.match.params);
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/news/" + this.props.match.params.newsId, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.headline + "American Muslim Today news";
		});
	};
	createMarkup() {
		return {__html: this.state.newsItem.fullNews};
	};
	render() {
    const {newsItem} = this.state;
    const text = newsItem.description;
		return (
			<div>

				<HeaderNav></HeaderNav>
				<Row>
					<Col span={2}></Col>
					<Col span={14} className="container animated fadeInLeft">
          <div className="article-container">
					<div style={{marginBottom: "20px",fontSize:"27px",lineHeight:"1.1" ,letterSpacing:"-.016em"}}>

						<h1>{newsItem.headline}</h1>
					</div>

<div class="author-block">
  <div class="author-block-content">

    <div style={{marginLeft: '8px'}}>

      <div class="author-top">
      <span class="author-name"><a class="_1OhGeD" href="/u/0340be4082b5" target="_blank" rel="noopener noreferrer">{newsItem.author}</a></span>
      <Button type="primary">love it </Button>
      <div className="share_button" >

    <ShareButton
        compact
        socialMedia={'facebook'}
        url={"http://americanmuslimtoday.net:4000/#/?_k=b9dhrt"}
        media={""}
        text="Sit by a lake"
    />
    <ShareButton
        compact
        socialMedia={'twitter'}
        url={"http://americanmuslimtoday.net:4000/#/?_k=b9dhrt"}
        media={""}
        text="Sit by a lake"
    />
    <ShareButton
        compact
        socialMedia={'pinterest'}
        url={"http://americanmuslimtoday.net:4000/#/?_k=b9dhrt"}
        media={""}
        text="Sit by a lake"
    />
    <ShareButton
        compact
        socialMedia={'google-plus'}
        url={"http://americanmuslimtoday.net:4000/#/?_k=b9dhrt"}
        media={""}
        text="Sit by a lake"
    />

    </div>

      </div>

      <div class="author-bottom">
      <time datetime="2018-12-18T07:01:11.000Z" style={{paddingRight:'10px'}}> {newsItem.updatedDate}</time>
      <span style={{paddingRight:'10px'}}>words 698</span><span>reading 8,140</span>
      </div>

    </div>

  </div>

</div>
<div class="article-description">
    <Collapse defaultActiveKey={['1']} >
       <Panel header="Click me to hide description!" key="1">
         <p>{text}</p>
       </Panel>
    </Collapse>
</div>


						<img alt="" src={this.state.newsItem.bannerImage} style={{margin:"20px" , width: "760px"}} />
						<div class="article-html" dangerouslySetInnerHTML={this.createMarkup()}></div>
						<hr/>
            </div>

          <CommonComments uniquekey={this.props.match.params.newsId} />

					</Col>
					<Col span={1}></Col>


          <Col span={6}>

            <LeftModule/>





					/*这里放所有谷歌的new */

					</Col>
            <Col span={1}>  </Col>

				</Row>
				<Footer></Footer>
				<BackTop/>

			</div>
		);
	};
}
