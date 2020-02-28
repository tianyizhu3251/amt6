import React, { Component } from 'react';
import './footer.scss';
import { Input, Button } from 'antd';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="email-module">
                    <span className="title">Subscribe Our Newsletter</span>
                    <Input className="input-ment" size="large" placeholder="Enter your email" />
                    <Button className="btn-ment" type="primary" size={'large'}>Subscribe</Button>
                </div>
                <div className="list-module">
                    <div className="introduce-module">
                        <span className="big-title">ABOUT AMT</span>
                        <p className="text">Hudfvj edvo ongue ultricies arcu. Vivamus sit amet erat orci.Cras cong arcu. Vivamus sit amet erat orci.Cras congue ligue ligulaumet eros.</p>
                        <a href="javascript:;" className="link-read">Read More</a>
                        {/* <span className="small-title">Follow Us</span>
                        <ul className="icon-list">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul> */}
                    </div>
                    <div className="introduce-module">
                        <span className="big-title">SPORT</span>
                        <ul className="text-list-module">
                            <li>
                                <span>></span>
                                <a href="javascript:;">About Us</a>
                            </li>
                            <li>
                                <span>></span>
                                <a href="javascript:;">Contact Us</a>
                            </li>
                            <li><span>></span><a href="javascript:;">Complaints & corrections</a></li>
                            <li><span>></span><a href="javascript:;">Work for us</a></li>
                            <li><span>></span><a href="javascript:;">Privacy policy</a></li>
                            <li><span>></span><a href="javascript:;">Cookie policy</a></li>
                            <li><span>></span><a href="javascript:;">Terms & conditions</a></li>
                        </ul>
                    </div>
                    <div className="introduce-module">
                        <span className="big-title">CULTURE</span>
                        <ul className="text-list-module">
                            <li>
                                <span>></span>
                                <a href="javascript:;">All topics</a>
                            </li>
                            <li>
                                <span>></span>
                                <a href="javascript:;">All writers</a>
                            </li>
                            <li>
                                <span>></span>
                                <a href="javascript:;">Digital newspaper</a>
                            </li>
                            <li>
                                <span>></span>
                                <a href="javascript:;">archive</a>
                            </li>
                            <li>
                                <span>></span>
                                <a href="javascript:;">Facebook</a>
                            </li>
                            <li>
                                <span>></span>
                                <a href="javascript:;">Twitter</a>
                            </li>
                            <li>
                                <span>></span>
                                <a href="javascript:;">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="introduce-module">
                        <span className="big-title">Contact Us</span>
                        <ul className="text-list-module">
                            <li>
                                <img src={require('../../../../assets/images/envelope.png')} style={{ width: 25 }} />
                                info@dummyemail.com
                            </li>
                            <li>
                                <img src={require('../../../../assets/images/mobile.png')} />
                                0351-xxxxxxx
                            </li>
                            <li>
                                <img src={require('../../../../assets/images/address.png')} />
                                Digital newspaperDigital newspaper
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="footer-text">Copyright © AMT. All Right Reserved 2020</p>
            </div>
        )
    }
}

export default Footer
