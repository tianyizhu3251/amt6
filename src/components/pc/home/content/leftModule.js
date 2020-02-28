import React, { Component } from 'react';
import './leftModule.scss';
import $ from 'jquery';
import "animate.css";

import Carousel from 'nuka-carousel';

class LeftModule extends Component {
  constructor() {
  super();
  this.state = {
      news: '',
			adv: 6,
			page:1,
			more_news:true,
			date:[],
			adv1:[]
  };

};
getCaption(obj){
var index=obj.lastIndexOf("T");
obj=obj.substring(0,index);
//  console.log(obj);
return obj;
};  // 去掉T后面多余字符串
//var str=" 执法办案流程-立案审批";
//getCaption(str);
  componentWillMount(){
    // 这里做的事情比较多   要把数据全拿到 然后将里面时间数据去掉后面的时区 然后一起setstate  后面如果需求有变就改这边代码
  var myFetchOptions = {
    method: 'GET'
  };
  fetch("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=6070e4ba6b7240408127abf342fc2d88&q=&page=1", myFetchOptions)
  .then(response => response.json())
  .then(json => {
    console.log(json.articles);
    var tmp_list=json.articles;

    var tmp_video='';
    var video_arr=[]; // 保存所有video字符串id得数组
    var tmp_date = json.articles[0].publishedAt
    console.log(tmp_date);
    //var index=tmp_date.indexOf("T");
    //var tmp_date=tmp_date.substring(0,index);
    console.log(this.getCaption(tmp_date));

    var date_arr=[]
  for (var i=0; i<tmp_list.length; i++){   // 处理关键

     var tmp_date=tmp_list[i].publishedAt
     tmp_date=this.getCaption(tmp_date)
     console.log(tmp_date) // tmp_date 保存处理好的时间数据 都是不带T的  然后拿去到总数据tmp_list 做repalce
     tmp_list[i].publishedAt=tmp_date
     date_arr.push(tmp_date)
     // tmp_video.push(tmp_list[i].video)
  }
  console.log(tmp_list)
  this.setState({date: date_arr})  // videoarry 后面取值便利渲染
  this.setState({news:tmp_list})

  });
//  // 09f38fd0817948539d840bd426f92294




  }
componentDidMount(){

        var myFetchOptions = {  //广告
        method: 'GET'
        };
        fetch("http://api.americanmuslimtoday.net/amt-news/api/v1/news?page=1&category=f23cf76d-8c33-4c0a-9f0f-b1da8cd0e230", myFetchOptions)
        .then(response => response.json())
        .then(json => this.setState({adv1: json.list}));


}

    scrollFadeIn() {
      let num = 0,
          topArr = [];

      $(".left-module").find(".news-block").each(function(){
          topArr.push($(this).offset().top - $(window).height() + 75)
      });

      $(window).scroll(res => {
          if($(window).scrollTop() > 20){
              $(".left-module").find(".module-title").addClass('fadeInLeft');
          }
          if(num < topArr.length && $(window).scrollTop() > topArr[num]){
              $(".left-module").find(".news-block").eq(num).addClass('fadeInLeft');
              num += 1;
          }
      })
    }
    componentDidUpdate(prevProps,prevState){
        this.scrollFadeIn();

    }

    render() {

		const settings = {
		autoplay: true,
		withoutControls: true,
		wrapAround:true
	};
      		const {news} = this.state;
        let imgUrl = "../../../assets/images/one.jpg";
        const  showImage = {
            backgroundImage: 'url(' + imgUrl + ')'
        }

        const newsList = news.length
    ? news.map((newsItem, index) => (
      <div className="news-block animated">
          <a href={newsItem.url} className="toLink">
              <div className="row-article">
                  <div className="img-comp">
                      <div className="img-show" style={showImage}>   <img src={newsItem.urlToImage} alt="../../../assets/images/one.jpg"/> </div>
                  </div>
                  <div className="art-comp" span={20}>
                      <span className="art-title">    {newsItem.title}</span>
                      <span className="art-content">{newsItem.author}</span>
                  </div>
              </div>
              <p className="art-time">{newsItem.publishedAt}</p>
          </a>
       <div className="big-imgShow"  style={{"display":  (index+1)%5==0? 'block':'none'}}>

   {
                 <Carousel {...settings}>

                 {
                   this.state.adv1.map((newsItem,index)=>{
                     return (
                         <img src={newsItem.bannerImage} />

                     )
                   })
                 }
                 </Carousel>
     }




        </div>

      </div>
    ))
    : 'We are loading...';

        return (
            <div className="left-module">
                <div className="module-title animated">
                    <svg className="icon" aria-hidden="true" style={{width: 35,height: 30}}>
                        <use xlinkHref="#icon-xinwen3"></use>
                    </svg>
                    <span className="title-text" style={{color:'#000000'}}>Trending News</span>
                </div>
                <div className="news-module">

                    {newsList}
{/*
                    <div className="news-block animated">
                        <a href="javascript:;" className="toLink">
                            <div className="row-article">
                                <div className="img-comp">
                                    <div className="img-show" style={showImage}></div>
                                </div>
                                <div className="art-comp" span={20}>
                                    <span className="art-title">Samsung confirms Galaxy S11 event for February 11th-The Verge</span>
                                    <span className="art-content">by Chris Welch</span>
                                </div>
                            </div>
                            <p className="art-time">2020-01-13</p>
                        </a>
                    </div>

                    <div className="news-block animated">
                        <a href="javascript:;" className="toLink">
                            <div className="row-article">
                                <div className="img-comp">
                                    <div className="img-show" style={showImage}></div>
                                </div>
                                <div className="art-comp" span={20}>
                                    <span className="art-title">Samsung confirms Galaxy S11 event for February 11th-The Verge</span>
                                    <span className="art-content">by Chris Welch</span>
                                </div>
                            </div>
                            <p className="art-time">2020-01-13</p>
                            <div className="big-imgShow">
                                <img src={require('../../../assets/images/one.jpg')} alt=""/>
                            </div>
                        </a>
                    </div>

                    <div className="news-block animated">
                        <a href="javascript:;" className="toLink">
                            <div className="row-article">
                                <div className="img-comp">
                                    <div className="img-show" style={showImage}></div>
                                </div>
                                <div className="art-comp" span={20}>
                                    <span className="art-title">Samsung confirms Galaxy S11 event for February 11th-The Verge</span>
                                    <span className="art-content">by Chris Welch</span>
                                </div>
                            </div>
                            <p className="art-time">2020-01-13</p>
                        </a>
                    </div>

                    <div className="news-block animated adver">
                        <a href="javascript:;" className="toLink">
                            <img src={require('../../../assets/images/one.jpg')} alt=""/>
                        </a>
                    </div>  */}
                </div>
            </div>
        )
    }
}

export default LeftModule
