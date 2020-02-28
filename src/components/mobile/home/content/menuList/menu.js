import React, { Component } from 'react';
import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';
import './menu.scss';

class Menu extends Component {
    componentDidMount() {
        new Swiper('.menuListSwiper', {
            pagination: {
                el: '.swiper-pagination',
            }
        });

        new Swiper('.adverSwiper');
    }

    render(){
        return (
            <div className="menuList">
                <div className="swiper-container menuListSwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-news.png"/>
                                <span className="menutitle">news</span>
                            </a>
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-star.png"/>
                                <span className="menutitle">review</span>
                            </a>
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-forum.png"/>
                                <span className="menutitle">blog</span>
                            </a>
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-video.png"/>
                                <span className="menutitle">video</span>
                            </a>
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-house-rent.png"/>
                                <span className="menutitle">house</span>
                            </a>
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-job.png"/>
                                <span className="menutitle">job</span>
                            </a>
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-live.png"/>
                                <span className="menutitle">living</span>
                            </a>
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-deals.png"/>
                                <span className="menutitle">deal</span>
                            </a>
                        </div>
                        <div className="swiper-slide">
                        <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-travel.png"/>
                                <span className="menutitle">travel</span>
                            </a>
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-food.png"/>
                                <span className="menutitle">food</span>
                            </a>
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-house.png"/>
                                <span className="menutitle">housing</span>
                            </a>
                            <a href="javascript:;" className="menublock">
                                <img src="https://c3.nychinaren.com/images/mobile/menu-law.png"/>
                                <span className="menutitle">lawer</span>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                <div className="swiper-container adverSwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={require('assets/images/adver.jpg')}/>
                        </div>
                        <div className="swiper-slide">
                            <img src={require('assets/images/adver.jpg')}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu
