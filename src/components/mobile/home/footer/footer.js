import React, { Component } from 'react';
import 'lib-flexible';
import style from './footer.module.scss';

class Footer extends Component {
    render(){
        return (
            <div className={style.footer}>
                <p>Copyright © 2016-2020 LuoXun Inc.All rights reserved.</p>
                <div className={style.FooterProtocol}>
                    <a href="javascript:;">《服务条款》</a>
                    <a href="javascript:;">《隐私权政策》</a>
                </div>
            </div>
        )
    }
}

export default Footer