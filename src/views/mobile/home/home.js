import React, { Component } from 'react';
import 'lib-flexible';
import './home.scss';
import Header from '@/components/mobile/home/header/header';
import Content from '@/components/mobile/home/content/content';
import Footer from '@/components/mobile/home/footer/footer';

class MobileHome extends Component {
    render() {
        return (
            <div className="mobileApp">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default MobileHome
