import React, { Component } from 'react';
import './rightModule.scss';
import $ from 'jquery';
import "animate.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';
import ReactPlayer from 'react-player';
import {Player, ControlBar} from 'video-react';
import Carousel from 'nuka-carousel';
import PollingDetail from '@/components/pc/home/content/pollingDetail';
import PCWeather from '@/components/pc/home/content/weatherModule/pcWeather.js';
class RightModule extends Component {
  constructor() {
  super();
  this.state = {
    video:'',
    autoplay:false,
        polling:[],
  };


}
    componentDidMount() {
      console.log(localStorage);
var myFetchOptions = {
  method: 'GET'
};
fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/news?page=1&category=169346d7-67d6-4be6-864e-6ceabea69a27", myFetchOptions)
.then(response => response.json())
.then(json => {
  console.log(json.list);
  var tmp_list=json.list;
  var tmp_video='';
  var video_arr=[]; // 保存所有video字符串id得数组
this.setState({video: json.list})  // videoarry 后面取值便利渲染

});
// 下面开始交互拿polling的题目答案

var myFetchOptions = {
  method: 'GET',

};
fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/polls?showArchived=true", myFetchOptions)
.then(response => response.json())
.then(json => {
  console.log(json.list);
  var tmp_list=json.list;

this.setState({polling: tmp_list})  // videoarry 后面取值便利渲染
});
//  // 09f38fd0817948539d840bd426f92294

        this.scrollFadeIn();
    }

    scrollFadeIn() {
        let num = 0,
            topArr = [];

        $(".right-module").find(".module-box").each(function(){
            topArr.push($(this).offset().top - $(window).height() + 25);
        });

        $(window).scroll(res => {
            if($(window).scrollTop() > 20){
                $(".right-module").find(".module-box").eq(0).addClass('fadeInRight');
            }
            if(num < topArr.length && $(window).scrollTop() > topArr[num]){
                $(".right-module").find(".module-box").eq(num).addClass('fadeInRight');
                num += 1;
            }
        })
    }
    componentDidUpdate(prevProps,prevState){

    }
    render() {
      const poll =  this.state.polling.map((item,index)=>{
        return(

          <PollingDetail title={"question"+ (index+1)} questionid={item.questionId} question={item.question} ans1={item.pollOptions[0].option} ans1id={item.pollOptions[0].optioId} ans2={item.pollOptions[1].option} ans2id={item.pollOptions[1].optioId}   ans3={item.pollOptions[2].option} ans1id={item.pollOptions[2].optioId}  ans4={item.pollOptions[3].option} ans4id={item.pollOptions[3].optioId} />
        )
//传optionid 以及将questionid 作为索引index
      })
      console.log(this.state.video);
      const {video} = this.state
      const newsVideo = video.length
    			? video.map((item, index) => (
            <div className='player-wrapper'>
                  <ReactPlayer
                    className='react-player'
                    url={item.video}
                    width='100%'
                    height='100%'
                    controls='true'

                  />
            </div>
          ))
        			:   <div> "loading news" </div>   ;
    console.log(newsVideo)
        return (
            <div className="right-module">

            <div className="module-box animated">
                <div className="module-title" style={{marginTop: 20}}>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-Yahoo"></use>
                    </svg>
                    <a> <span className="title-text" style={{color:'#6001D2',fontStyle:'italic'}}>AMT</span> <span className="title-text" style={{color:'#6001D2'}}> Video</span> </a>
                </div>
                <div className="news-block">

<Carousel>
{newsVideo}

</Carousel>

                </div>
            </div>
{/*轮播图 polling*/}

                        <div className="module-box animated" style={{marginBottom: "15px"}}>
                            <div className="module-title" style={{marginTop: 20}} >
                              <svg t="1582054185418" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3012" width="200" height="200"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FFFFFF" p-id="3013"></path><path d="M930.4 764.8H109.6l39.2-104c11.2-29.6 40-49.6 72-49.6h599.2c32 0 60.8 20 72 49.6l38.4 104z m-784-25.6h747.2l-25.6-69.6c-7.2-20-26.4-33.6-48-33.6h-600c-21.6 0-40.8 13.6-48 33.6l-25.6 69.6z" fill="#333333" p-id="3014"></path><path d="M555.2 98.4l256 207.2c13.6 11.2 16 31.2 4.8 44.8L548 681.6c-11.2 13.6-31.2 16-44.8 4.8l-256-207.2c-13.6-11.2-16-31.2-4.8-44.8l267.2-331.2c11.2-14.4 32-16 45.6-4.8z" fill="#09C45E" p-id="3015"></path><path d="M523.2 705.6c-9.6 0-20-3.2-28-9.6l-256-207.2c-9.6-7.2-15.2-18.4-16-30.4-1.6-12 2.4-23.2 9.6-32.8l267.2-330.4c7.2-9.6 18.4-15.2 30.4-16 12-1.6 23.2 2.4 32.8 9.6l256 207.2c9.6 7.2 15.2 18.4 16 30.4 1.6 12-2.4 23.2-9.6 32.8L557.6 689.6c-8.8 10.4-21.6 16-34.4 16zM535.2 104h-2.4c-4.8 0.8-9.6 3.2-12.8 7.2L252 441.6c-3.2 4-4.8 8.8-4 14.4 0.8 4.8 3.2 9.6 7.2 12.8l256 207.2c8 6.4 20 5.6 27.2-3.2l268-330.4c3.2-4 4.8-8.8 4-14.4s-3.2-9.6-7.2-12.8l-256-207.2c-4-2.4-8-4-12-4z" fill="#333333" p-id="3016"></path><path d="M512 460.8c-6.4 0-12.8-2.4-18.4-6.4L440 410.4c-5.6-4.8-6.4-12.8-1.6-17.6 4.8-5.6 12.8-6.4 17.6-1.6l54.4 43.2c1.6 0.8 3.2 0.8 4.8-0.8L605.6 328c4.8-5.6 12.8-5.6 18.4-1.6 5.6 4.8 5.6 12.8 1.6 18.4L533.6 450.4c-5.6 6.4-13.6 10.4-21.6 10.4z" fill="#FFFFFF" p-id="3017"></path></svg>
                              <a> <span className="title-text" style={{color:'#1b841b',fontStyle:'italic'}}>AMT</span> <span className="title-text" style={{color:'#1b841b'}}>Polling</span></a>
                            </div>
                            <div className="news-block">

                            <Carousel>
                        {poll}


                        </Carousel>





                            </div>
                        </div>




                <div className="module-box animated" style={{maeginTop: "35px"}}>
                    <div className="module-title">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-facebook"></use>
                        </svg>
                      <a> <span className="title-text" style={{color:'#15549B',fontStyle:'italic'}}>AMT</span>  <span className="title-text" style={{color:'#15549B'}}>Facebook</span> </a>
                    </div>
                    <div style={{ overflow: "hidden",
                      width: "100%",
                      height: "325px",
                      borderRadius: "5px",
                      backgroundColor: "#EDEEF2",
                      boxShadow: "0px 6px 20px 0px rgba(0, 0, 0, 0.1)",
                      marginBottom: "15px",
                      }}>
                        {/* <a href="javascript:;" className="toLink">
                            <img src={require('../../../assets/images/one.jpg')} alt=""/>
                        </a>
                        */}



                      <iframe  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAmericanMuslimToday%2F&tabs=timeline&height=390&width=278&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"  height="400" width="278" small_header="true" style={{border:"none",overflow:"hidden",position: "relative", top: "-70px"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>


                    </div>
                </div>

                <div className="module-box animated">
                    <div className="module-title" style={{marginTop: 20}}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-twitter"></use>
                        </svg>
                    <a> <span className="title-text" style={{color:'#078BC9',fontStyle:'italic'}}>AMT</span>    <span className="title-text" style={{color:'#078BC9'}}>Twitter</span> </a>
                    </div>
                    <div className="news-block">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        noHeader
                        noFooter
                        screenName="AmericanMuslimT"
                        options={{height: 330}}
                        />
                    </div>
                </div>

                <div className="module-box animated">
                    <div className="module-title" style={{marginTop: 20}}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-githair-instagram"></use>
                        </svg>
                    <a> <span className="title-text" style={{color:'#CE4A95',fontStyle:'italic'}}>AMT</span>  <span className="title-text" style={{color:'#CE4A95'}}>instagram</span> </a>
                    </div>
                    <div className="news-block">
                    <div className="insBlock">
                    <InstagramEmbed
                      url='https://www.instagram.com/p/B5gFd3qpp4R/'
                      maxWidth={278}
                      hideCaption={true}
                      containerTagName='div'
                      protocol=''
                      injectScript
                      onLoading={() => {}}
                      onSuccess={() => {}}
                      onAfterRender={() => {}}
                      onFailure={() => {}}
                      />
                        </div>
                    </div>
                </div>



                                <div className="module-box animated">
                                    <div className="module-title" style={{marginTop: 20}}>
                                        <svg t="1581730555428" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1114" width="200" height="200"><path d="M426.666667 682.666667V384l256 149.845333L426.666667 682.666667z m587.093333-355.541334s-10.026667-71.04-40.704-102.357333c-38.954667-41.088-82.602667-41.258667-102.613333-43.648C727.168 170.666667 512.213333 170.666667 512.213333 170.666667h-0.426666s-214.954667 0-358.229334 10.453333c-20.053333 2.389333-63.658667 2.56-102.656 43.648-30.677333 31.317333-40.661333 102.4-40.661333 102.4S0 410.538667 0 493.952v78.293333c0 83.456 10.24 166.912 10.24 166.912s9.984 71.04 40.661333 102.357334c38.997333 41.088 90.154667 39.765333 112.938667 44.074666C245.76 893.568 512 896 512 896s215.168-0.341333 358.442667-10.752c20.053333-2.432 63.658667-2.602667 102.613333-43.690667 30.72-31.317333 40.704-102.4 40.704-102.4s10.24-83.413333 10.24-166.869333v-78.250667c0-83.456-10.24-166.912-10.24-166.912z" fill="#FF0000" p-id="1115" data-spm-anchor-id="a313x.7781069.0.i1" class="selected"></path></svg>
                                        <a> <span className="title-text" style={{color:'#ff0000',fontStyle:'italic'}}>AMT</span>        <span className="title-text" style={{color:'#FF0000'}}>Youtube</span> </a>
                                    </div>
                                    <div className="news-block">

                                    <Player

                                    autoPlay

                                    >

                                    <source src="https://amt-news.s3.us-east-2.amazonaws.com/dev/media/news/video/Virus" />
                                  </Player>


                                    </div>
                                </div>

                <div className="module-box animated">
                    <div className="module-title" style={{marginTop: 20}}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon---"></use>
                        </svg>
                    <a> <span className="title-text" style={{color:'black',fontStyle:'italic'}}>AMT</span>    <span className="title-text" style={{color:'#000000'}}>Classified</span> </a>
                    </div>
                    <div className="news-block">
                        <a href="javascript:;" className="toLink">
                            <img src={require('../../../../assets/images/one.jpg')} alt=""/>
                        </a>
                    </div>
                </div>

                <div className="module-box animated">
                    <div className="module-title" style={{marginTop: 20}}>
                        {/*
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-Yahoo"></use>
                        </svg>
                         */}
                        <svg t="1582053557305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2170" width="200" height="200"><path d="M512 512m-414 0a414 414 0 1 0 828 0 414 414 0 1 0-828 0Z" fill="#F0C48A" p-id="2171"></path><path d="M928.2 744H95.8c-46.4 0-84-37.6-84-84V140.4C11.8 94 49.4 56.2 96 56.2h832.2c46.4 0 84.2 37.6 84.2 84.2V660c-0.2 46.4-37.8 84-84.2 84z" fill="#D3E6F8" p-id="2172"></path><path d="M925.8 56.2c47.8 0 86.4 38.6 86.4 86.4v488.4h-86.4V56.2z" fill="#A4CFF2" p-id="2173"></path><path d="M11.8 631V660c0 46.4 37.6 84.2 84.2 84.2h832.2c46.4 0 84.2-37.6 84.2-84.2v-29H11.8z" fill="#FFFFFF" p-id="2174"></path><path d="M405 744h214.2v143H405zM754.2 967.8H269.8v-40c0-22.4 18.2-40.8 40.8-40.8h403c22.4 0 40.8 18.2 40.8 40.8v40z" fill="#FFFFFF" p-id="2175"></path><path d="M667.8 967.8h86.4v-40c0-22.4-18.2-40.8-40.8-40.8h-45.6v80.8zM925.8 749.2c47.8 0 86.4-38.6 86.4-86.4v-38.4h-86.4v124.8zM568 744h51v139.6H568z" fill="#D3E6F8" p-id="2176"></path><path d="M928.2 755.8H95.8C43 755.8 0 712.8 0 660V140.4c0-52.8 43-95.8 95.8-95.8H928c52.8 0 95.8 43 95.8 95.8V660c0.2 52.8-42.8 95.8-95.6 95.8zM95.8 68c-40 0-72.4 32.4-72.4 72.4V660c0 40 32.4 72.4 72.4 72.4H928c40 0 72.4-32.4 72.4-72.4V140.4c0-40-32.4-72.4-72.4-72.4H95.8z" fill="#4C4372" p-id="2177"></path><path d="M619 898.8h-214c-6.4 0-11.8-5.2-11.8-11.8V744c0-6.4 5.2-11.8 11.8-11.8h214.2c6.4 0 11.8 5.2 11.8 11.8v143c-0.2 6.6-5.4 11.8-12 11.8z m-202.4-23.4h190.8v-119.6h-190.8v119.6z" fill="#4C4372" p-id="2178"></path><path d="M754.2 979.4H269.8c-6.4 0-11.8-5.2-11.8-11.8v-40c0-29 23.6-52.4 52.4-52.4h403c29 0 52.4 23.6 52.4 52.4v40c0.2 6.6-5 11.8-11.6 11.8zM281.4 956h461v-28.2c0-16-13-29-29-29H310.4c-16 0-29 13-29 29V956zM995.8 642.6H17.6c-6.4 0-11.8-5.2-11.8-11.8 0-6.4 5.2-11.8 11.8-11.8h978.2c6.4 0 11.8 5.2 11.8 11.8-0.2 6.6-5.4 11.8-11.8 11.8z" fill="#4C4372" p-id="2179"></path><path d="M247.2 316m-90.2 0a90.2 90.2 0 1 0 180.4 0 90.2 90.2 0 1 0-180.4 0Z" fill="#FD919E" p-id="2180"></path><path d="M247.2 418c-56.2 0-102-45.8-102-102s45.8-102 102-102 102 45.8 102 102-45.8 102-102 102z m0-180.6c-43.2 0-78.4 35.2-78.4 78.4s35.2 78.4 78.4 78.4 78.4-35.2 78.4-78.4c0.2-43.2-35.2-78.4-78.4-78.4z" fill="#4C4372" p-id="2181"></path><path d="M210.4 535.6c-54.6 0-99-44.2-99-99 0-54.6 44.2-99 99-99 15.8 0 30.6 3.6 43.8 10.2 27-35.8 69.8-59 118.2-59 73.6 0 134.6 53.8 145.8 124.4 3.6-0.6 7.2-1 10.8-1 34 0 61.6 27.6 61.6 61.6s-27.6 61.6-61.6 61.6H210.4z" fill="#FFFFFF" p-id="2182"></path><path d="M529 547.2H210.4c-61 0-110.6-49.6-110.6-110.6 0-61 49.6-110.6 110.6-110.6 14 0 27.4 2.6 40.2 7.6 30.4-36 74.2-56.4 121.6-56.4 38.2 0 75 13.6 104 38.6 25.8 22.2 43.8 52 51.4 84.8 41-0.8 74.8 32.4 74.8 73.4 0 40.4-32.8 73.2-73.4 73.2z m-318.6-197.8c-48 0-87.2 39.2-87.2 87.2s39.2 87.2 87.2 87.2h318.6c27.6 0 50-22.4 50-50s-22.4-50-50-50c-2.8 0-5.8 0.2-8.8 0.8-3 0.6-6.2-0.2-8.8-2-2.6-1.8-4.2-4.6-4.8-7.8-5-31.6-21.2-60.6-45.6-81.6-24.6-21.2-56.2-32.8-88.6-32.8-43.2 0-82.8 19.8-108.8 54.4-3.4 4.6-9.6 6-14.6 3.4-12-5.8-25-8.8-38.6-8.8zM243.6 201.6c-6.4 0-11.8-5.2-11.8-11.8V154.2c0-6.4 5.2-11.8 11.8-11.8s11.8 5.2 11.8 11.8v35.6c0 6.6-5.2 11.8-11.8 11.8zM330.4 237.4c-3 0-6-1.2-8.2-3.4-4.6-4.6-4.6-12 0-16.6l25.2-25.2c4.6-4.6 12-4.6 16.6 0 4.6 4.6 4.6 12 0 16.6L338.6 234c-2.2 2.4-5.2 3.4-8.2 3.4zM121.2 324.2H85.4c-6.4 0-11.8-5.2-11.8-11.8s5.2-11.8 11.8-11.8h35.6c6.4 0 11.8 5.2 11.8 11.8s-5.2 11.8-11.6 11.8z" fill="#4C4372" p-id="2183"></path><path d="M157 237.4c-3 0-6-1.2-8.2-3.4l-25.2-25.2c-4.6-4.6-4.6-12 0-16.6 4.6-4.6 12-4.6 16.6 0l25.2 25.2c4.6 4.6 4.6 12 0 16.6-2.4 2.4-5.4 3.4-8.4 3.4z" fill="#4C4372" p-id="2184"></path><path d="M691 232.6h86.6v86.6h-86.6z" fill="#FFFFFF" p-id="2185"></path><path d="M832.4 232.6h86.6v86.6h-86.6z" fill="#FD919E" p-id="2186"></path><path d="M691 370.4h86.6v86.6h-86.6z" fill="#A4CFF2" p-id="2187"></path><path d="M832.4 370.4h86.6v86.6h-86.6z" fill="#7BABF1" p-id="2188"></path><path d="M777.6 331h-86.6c-6.4 0-11.8-5.2-11.8-11.8v-86.6c0-6.4 5.2-11.8 11.8-11.8h86.6c6.4 0 11.8 5.2 11.8 11.8v86.6c0 6.6-5.2 11.8-11.8 11.8z m-74.8-23.4H766v-63.2h-63.2v63.2zM919 331h-86.6c-6.4 0-11.8-5.2-11.8-11.8v-86.6c0-6.4 5.2-11.8 11.8-11.8h86.6c6.4 0 11.8 5.2 11.8 11.8v86.6c0 6.6-5.4 11.8-11.8 11.8zM844 307.6h63.2v-63.2H844v63.2zM777.6 468.8h-86.6c-6.4 0-11.8-5.2-11.8-11.8v-86.6c0-6.4 5.2-11.8 11.8-11.8h86.6c6.4 0 11.8 5.2 11.8 11.8v86.6c0 6.6-5.2 11.8-11.8 11.8z m-74.8-23.4H766v-63.2h-63.2v63.2zM919 468.8h-86.6c-6.4 0-11.8-5.2-11.8-11.8v-86.6c0-6.4 5.2-11.8 11.8-11.8h86.6c6.4 0 11.8 5.2 11.8 11.8v86.6c0 6.6-5.4 11.8-11.8 11.8zM844 445.4h63.2v-63.2H844v63.2z" fill="#4C4372" p-id="2189"></path></svg>



                      <a> <span className="title-text" style={{color:'#eda522',fontStyle:'italic'}}>AMT</span>      <span className="title-text" style={{color:'#eda522'}}>Weather</span> </a>
                    </div>
                    <div className="news-block">
                            <PCWeather/>
                    </div>
                </div>

            </div>
        )
    }
}

export default RightModule
