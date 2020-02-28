import React, { Component } from 'react';
import $ from 'jquery';
import "animate.css";
import { Tabs } from 'antd-mobile';
import style from './news.module.scss'
import './style.scss';

class NewsList extends Component {
    componentDidMount() {
        this.scrollAnimate(0);
    }

    onTabClick(tab, index){
        if(tab == 1){
            this.scrollAnimate(1);
        } else if (tab == 2){
            this.scrollAnimate(2);
        }
    }

    //动画
    scrollAnimate(tab) {
        let num = 0, topArr = [],
            numtwo = 0, toptwoArr = [],
            numthree = 0, topthreeArr = [];

        if(tab == 0){
            $("#newsboxOne").find(".newslist").each(function(){
                topArr.push($(this).offset().top + 50);
            });

            for(let i = 0; i < topArr.length; i++){
                if(num < topArr.length && $(window).height() > topArr[num]){
                    $("#newsboxOne").find(".newslist").eq(num).addClass('fadeInUp');
                    num += 1;
                }
            }
        } else if (tab == 1){
            $("#newsboxTwo").find(".newslist").each(function(){
                toptwoArr.push($(this).offset().top + 50);
            });

            for(let i = 0; i < toptwoArr.length; i++){
                if(numtwo < toptwoArr.length && $(window).height() > toptwoArr[numtwo]){
                    $("#newsboxTwo").find(".newslist").eq(numtwo).addClass('fadeInUp');
                    numtwo += 1;
                }
            }
        } else {
            $("#newsboxThree").find(".newslist").each(function(){
                topthreeArr.push($(this).offset().top + 50);
            });

            for(let i = 0; i < topthreeArr.length; i++){
                if(numthree < topthreeArr.length && $(window).height() > topthreeArr[numthree]){
                    $("#newsboxThree").find(".newslist").eq(numthree).addClass('fadeInUp');
                    numthree += 1;
                }
            }
        }

        $(window).scroll(res => {
            if(num < topArr.length && ($(window).height() + $(window).scrollTop()) > topArr[num]){
                $("#newsboxOne").find(".newslist").eq(num).addClass('fadeInUp');
                num += 1;
            }
            if(numtwo < toptwoArr.length && ($(window).height() + $(window).scrollTop()) > toptwoArr[numtwo]){
                $("#newsboxTwo").find(".newslist").eq(numtwo).addClass('fadeInUp');
                numtwo += 1;
            }
            if(numthree < topthreeArr.length && ($(window).height() + $(window).scrollTop()) > topthreeArr[numthree]){
                $("#newsboxThree").find(".newslist").eq(numthree).addClass('fadeInUp');
                numthree += 1;
            }
        })
    }

    render(){
        let imgUrl = '/static/media/onePhoto.bb45fbbf.jpg';
        let showImage = {
            backgroundImage: 'url(' + imgUrl + ')'
        }
        let imgBack = <div className={style.imgBack} style={showImage}></div>;


        const tabs = [
            { title: 'news' },
            { title: 'faith' },
            { title: 'law' },
        ];

        return (
            <Tabs
                tabs={tabs}
                initialPage={0}
                useOnPan={true}
                onTabClick={(tab, index) => this.onTabClick((tab, index))}
            >
                <div style={{padding: '15px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <div className={style.contentmodule}>
                        <div id="newsboxOne" className={[`${style.newsbox}`].join(' ')}>
                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{padding: '15px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <div className={style.contentmodule}>
                        <div id="newsboxTwo" className={[`${style.newsbox}`].join(' ')}>
                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{padding: '15px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <div className={style.contentmodule}>
                        <div id="newsboxThree" className={[`${style.newsbox}`].join(' ')}>
                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>

                            <div className={[`${style.newslist}`, 'animated newslist'].join(' ')} ref="newslist">
                                <a href="javascript:;" className={style.alink}>
                                    {imgBack}
                                    <div className={style.textbox}>
                                        <p className={style.author}>Celebrity TheBlast</p>
                                        <p className={style.content}>Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs>
        )
    }
}

export default NewsList
