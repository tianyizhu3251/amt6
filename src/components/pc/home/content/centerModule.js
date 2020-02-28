import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router-dom';
import './centerModule.scss';
import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';
import $ from 'jquery';
import "animate.css";
import Carousel from 'nuka-carousel';

class CenterModule extends Component {

  constructor() {
  super();
  this.state = {
    news: [],
    headline_news:[],
    type: '111',
    repoName:'',
    repoUrl:'',
    page:1,
    more_news:true,
    adv1:[]

  };
}

componentWillMount() {
  var myFetchOptions = {
      method: 'GET'
    };
    console.log('1111');
    fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/news?page=1&category=94821302-a50b-48dc-9252-964b708d1d40", myFetchOptions)
 .then(res => res.json())
 .then(data => {
     console.log(data.list[0])
     this.setState({
       news: data.list,
       headline_news: data.list[0]
     });
   })
 .catch(error => {
   this.setState({
     isLoaded: true,
     error
   });
 })


    }

    componentDidMount() {


      let mySwiper = new Swiper('.bottom-img-block', {
        autoplay: false,
        loop: true,
        delay: 100,
        speed: 700,
        centeredSlides: false,       //为true设置模块居中
        spaceBetween : 20,          //slide之间的距离
        slidesOffsetBefore: 50,     //设定slides与wrapper左边框的偏移量
        slidesOffsetAfter: 50,      //设定slides与wrapper右边框的偏移量
        slidesPerView : 'auto',
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
   observeParents:true//修改swiper的父元素时，自动初始化swiper

        // navigation: {
        // 	nextEl: '.swiper-button-next',
        // 	prevEl: '.swiper-button-prev',
        // },
      });
      mySwiper.el.onmouseover = function(){
        mySwiper.autoplay.start();
      }
      mySwiper.el.onmouseout = function(){
        mySwiper.autoplay.stop();
      }


      // 广告
      var myFetchOptions = {  //广告     0f484831-2031-450e-8173-3f470290f28a
method: 'GET'
};
  fetch("http://api.americanmuslimtoday.net/amt-news/api/v1/news?page=1&category=f23cf76d-8c33-4c0a-9f0f-b1da8cd0e230", myFetchOptions)
  .then(response => response.json())
  .then(json => this.setState({adv1: json.list}));






      console.log(this.state.news);



    }


    scrollFadeIn() {
        let num = 0,
            topArr = [];

        $(".center-module").find(".news-li-list").each(function(){
            topArr.push($(this).offset().top - $(window).height() + 25);
        });
        console.log(topArr)
        $(window).scroll(res => {
            if($(window).scrollTop() > 5){
                $(".center-module").find(".news-module").addClass('fadeInUp');
            }
            if(num < topArr.length && $(window).scrollTop() > topArr[num]){
                $(".center-module").find(".news-li-list").eq(num).addClass('fadeInUp');
                num += 1;
            }
        })
    }
    // 在getDerivedStateFromProps中进行state的改变
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log(nextProps.categoryId);
    //     console.log(prevState.categoryId);
    //     return null;
    // }
    //


    componentWillReceiveProps(nextProps) {
      // 先做categoeyid选择 在做搜索选择 重新渲染组件 获得需要的新闻列表

      console.log(nextProps.categoryId);  console.log(this.props.categoryId);
      //当某个props中的值发生变化时（此处是id属性）
          if (nextProps.categoryId !== this.props.categoryId) {
            //初始化state中的externalData值为null
            this.setState({news: ''});
            //基于新的id属性，异步获取数据，并在完成时设置externalData的值

        var myFetchOptions = {
            method: 'GET'
          };
      fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/news?page=1&category="+nextProps.categoryId, myFetchOptions)
       .then(res => res.json())
       .then(data => {
           this.setState({
             news: data.list,
           });
         })
       .catch(error => {
         this.setState({
           isLoaded: true,
           error
         });
       })
    
       return false;
      }

      // 父组件把更新的search传进来了  如果为空字符 直接给他原始画面数据
      if (nextProps.searchValue == "") {
        var myFetchOptions = {
            method: 'GET'
          };

          fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/news?page=1&category=94821302-a50b-48dc-9252-964b708d1d40", myFetchOptions)
       .then(res => res.json())
       .then(data => {
           this.setState({
             news: data.list,
           });
         })
       .catch(error => {
         this.setState({
           isLoaded: true,
           error
         });
       })
      }
    // 父组件把更新的search传进来了
  if (nextProps.searchValue !== this.props.searchValue){
      var myFetchOptions = {
          method: 'GET'
        };

        fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/news?searchText="+nextProps.searchValue, myFetchOptions)
     .then(res => res.json())
     .then(data => {
         this.setState({
           news: data.list,
         });
       })
     .catch(error => {
       this.setState({
         isLoaded: true,
         error
       });
     })
    }

    }




    componentDidUpdate(prevProps,prevState){


        this.scrollFadeIn();

    }
    render() {
    //  console.log(this.props.searchValue);
        console.log(this.props.categoryId);
      const 	settings = {
  autoplay: true,
  withoutControls: true,
  wrapAround:true
};
      console.log(this.state.news)

      	const {headline_news} = this.state;
        let imgBack;
        if(document.body.clientWidth > 0){
            let imgUrl =  headline_news.bannerImage ;
            // document.body.clientWidth > 1366 ？
    //        let imgUrl = '/static/media/onePhoto.bb45fbbf.jpg';
            const showImage = {
                backgroundImage: 'url(' + imgUrl + ')'
            }
            imgBack = <div className="img-back" style={showImage}></div>;
        } else {
            imgBack = '';
        }
	const {news} = this.state;
  const styeH3 = {
  width: "170px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};
const news_swiper = news.length
    ? news.map((newsItem, index) => (
      <div key={index} className="swiper-slide">
          <a href="javascript:;">
                <img src={newsItem.bannerImage}/>
                <span className="text" >{newsItem.headline}</span>

          </a>
      </div>


    ))
    : 'We are loading news...';

  const newsList = news.length
			? news.map((newsItem, index) => (

        <li key={index} className="news-li-list animated">
            <Link to={`details/${newsItem.newsId}`}  target="_blank" className="a-link">
        <img className="img-show" src={newsItem.bannerImage}/>
                <div className="text-box">
                <div className="author">
                    <p >{newsItem.updatedDate}</p>
                    <p >{newsItem.author}</p>
               </div>
                    <span className="title">{newsItem.headline}</span>
                     <p className="content">{newsItem.description}</p>
                </div>
            </Link>
              <div className="big-imgShow"  style={{"display":  (index+1)%5==0? 'block':'none'}}>
                   {
                     <Carousel {...settings}>
                          {
                            this.state.adv1.map((newsItem,index)=>{
                              return (
                                <div>   <img src={newsItem.bannerImage} style={{"height":  "350px"}}/>  </div>

                              )
                            })
                          }
                    </Carousel>
             }
                    </div>


   </li>

			))
			:  'We are loading news...';





        return (
            <div className="center-module">

                <div className="news-module animated">
                    <div className="top-img-block">
                        <a className="top-img-link" href="javascript:;">
                            {imgBack}
                            <div className="text-block">
                                <a href="javascript:;" className="text-title"> {this.state.headline_news.headline} </a>
                                <p className="text">{this.state.headline_news.description} </p>
                              <a href="javascript:;" className="a-link">{this.state.headline_news.author} </a>
                                <div className="pinglun">
                                    <span className="img"></span>
                                    <span>8,170 people reacting</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="bottom-img-block swiper-container">
                        <div className="swiper-wrapper">
                            {news_swiper}
                          {/*  <div className="swiper-slide">
                                <a href="javascript:;">
                                    <img src={require('../../../assets/images/one.jpg')}/>
                                    <span className="text">Tennis player defends asking ball girl to peel banana</span>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:;">
                                    <img src={require('../../../assets/images/one.jpg')}/>
                                    <span className="text">Tennis player defends asking ball girl to peel banana</span>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:;">
                                    <img src={require('../../../assets/images/one.jpg')}/>
                                    <span className="text">Tennis player defends asking ball girl to peel banana</span>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:;">
                                    <img src={require('../../../assets/images/one.jpg')}/>
                                    <span className="text">Tennis player defends asking ball girl to peel banana</span>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:;">
                                    <img src={require('../../../assets/images/one.jpg')}/>
                                    <span className="text">Tennis player defends asking ball girl to peel banana</span>
                                </a>
                            </div>  */}
                        </div>
                    </div>
                </div>
                <ul className="news-list">

                    {newsList}


                </ul>
            </div>
        )


    }


}


export default CenterModule
