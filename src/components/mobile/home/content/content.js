import React, { Component } from 'react';
import 'lib-flexible';
import style from './content.module.scss';
import Menu from '@/components/mobile/home/content/menuList/menu';
import Newslist from '@/components/mobile/home/content/newsList/news';
import Life from '@/components/mobile/home/content/lifemodule/life';

class Content extends Component {
    render() {
        return (
            <div className={style.content} id="contentModule">
                <Menu/>
                <Newslist/>
                <Life/>

                <p className={style.title}>
                    <svg className={style.icon} aria-hidden="true" style={{width: 26,height: 21}}>
                        <use xlinkHref="#icon-shangjia"></use>
                    </svg>
                    business review
                </p>
                <div className={style.storemodule}>
                    <a href="javascript:;">
                        <span>food</span>
                        <img src="https://c3.nychinaren.com/images/mobile/cat_index_restaurant.png"/>
                    </a>
                    <a href="javascript:;">
                        <span>doctor</span>
                        <img src="https://c3.nychinaren.com/images/mobile/cat_index_restaurant.png"/>
                    </a>
                    <a href="javascript:;">
                        <span>lawyer</span>
                        <img src="https://c3.nychinaren.com/images/mobile/cat_index_restaurant.png"/>
                    </a>
                    <a href="javascript:;">
                        <span>restaurant</span>
                        <img src="https://c3.nychinaren.com/images/mobile/cat_index_restaurant.png"/>
                    </a>
                    <a href="javascript:;">
                        <span>pet</span>
                        <img src="https://c3.nychinaren.com/images/mobile/cat_index_restaurant.png"/>
                    </a>
                    <a href="javascript:;">
                        <span>car</span>
                        <img src="https://c3.nychinaren.com/images/mobile/cat_index_restaurant.png"/>
                    </a>
                    <a href="javascript:;">
                        <span>wash</span>
                        <img src="https://c3.nychinaren.com/images/mobile/cat_index_restaurant.png"/>
                    </a>
                    <a href="javascript:;">
                        <span>web</span>
                        <img src="https://c3.nychinaren.com/images/mobile/cat_index_restaurant.png"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Content
