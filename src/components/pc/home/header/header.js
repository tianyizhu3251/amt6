import React, { Component } from 'react';
import $ from 'jquery';
import './header.scss';
import { Icon } from 'antd';
import {Player, ControlBar} from 'video-react';
import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isPlay: true
    }

    this.videoPlayer = React.createRef();
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    $("#videoPlayer").find(".video-react-big-play-button").remove();

    let mySwiper = new Swiper('.header-swiper-container', {
      autoplay: false,
      loop: true,
      delay: 100,
      speed: 700,
		  centeredSlides: false,       //为true设置模块居中
		  spaceBetween : 20,          //slide之间的距离
      slidesOffsetBefore: 50,     //设定slides与wrapper左边框的偏移量
      slidesOffsetAfter: 50,      //设定slides与wrapper右边框的偏移量
		  slidesPerView : 'auto',
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
  }

  play(){
    $("#videoPlayer").find(".video-react-control-bar").remove();
  }

  pause(){
    const videoPlayer = this.player.getState();
    if(videoPlayer.player.ended){
      this.player.load();
    }
  }

  goPlay(){
    this.player.play();
    this.setState({
      isPlay: true
    })
  }

  goPause(){
    this.player.pause();
    this.setState({
      isPlay: false
    })
  }

  render() {
    const isPlay = this.state.isPlay;

    return (
      <header className="header">
        <div className="banner-module" id="videoPlayer">
          <div className="img-module">
            <img src={require('../../../../assets/images/photo.jpg')}/>
          </div>
          <div className="banner-content">
            {/*背景视频*/}
            <Player
              className="video-module"
              style={{height:'100%'}}
              ref={player => { this.player = player }}
              autoPlay
              muted={false}
              fluid={false}
              height={'100%'}
              onPlay={(e) => this.play(e)}
              onPause={(e) => this.pause(e)}
            >
              <source src={require("../../../../assets/images/headvideo.mp4")}/>
              <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
              <ControlBar autoHide={true}></ControlBar>
            </Player>
            {/*头部内容*/}
            <div className="header-content">
              <div className="banCont">
                <div className="banTitle">
                  <p className="bigTitle">American Muslim Today</p>
                  <p className="smallTitle">Inspiring The Change - Makers Of Tomorrow</p>
                </div>
                {isPlay ?
                <Icon type="pause-circle" style={{fontSize:'56px',color:'#AEAEAE'}} onClick={(e) => this.goPause(e)}/>
                : <Icon type="play-circle" style={{fontSize:'56px', color:'#AEAEAE'}} onClick={(e) => this.goPlay(e)}/>}
              </div>
            </div>

            <div className="swiper-module">
              <div className="swiper-container header-swiper-container">
                <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="javascript:;">
                    <img src='https://tse3.mm.bing.net/th?id=OIP.mBzmf-vow2ve4EBBh4HBlQHaEv&pid=Api&P=0&w=253&h=163'/>
                  </a>
                </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src='https://tse3.mm.bing.net/th?id=OIP.srgvQbvyJCHKOweHaGF1ngHaEK&pid=Api&P=0&w=286&h=162'/>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src='https://tse1.mm.bing.net/th?id=OIP.2RPAAurmQB6HMvKokPuoKAHaIK&pid=Api&P=0&w=300&h=300'/>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src='https://tse1.mm.bing.net/th?id=OIP.wWUpjfpf2TC82y7Rz3S6cQHaDo&pid=Api&P=0&w=359&h=177'/>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src='https://tse3.mm.bing.net/th?id=OIP.aaDxkntODiEwDSjvCfpiRwHaEK&pid=Api&P=0&w=324&h=183'/>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src='https://tse1.mm.bing.net/th?id=OIP.qHGIRlL9MBxZOxxHzA20XgAAAA&pid=Api&P=0&w=300&h=300'/>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src='https://tse2.mm.bing.net/th?id=OIP.ksypwAACSPcSpbWhDR9XWwHaCQ&pid=Api&P=0&w=503&h=154'/>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src='https://tse2.mm.bing.net/th?id=OIP.ZpRmZD88kmEq8gQTXFriogHaEc&pid=Api&P=0&w=283&h=170'/>
                    </a>
                  </div>
                </div>


                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
