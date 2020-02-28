import React, { Component } from 'react';
import './headerNav.scss';
import $ from 'jquery';
import { Input, Button , Menu , Icon , Modal ,	Tabs, message,Form,	CheckBox} from 'antd';

import { Router, Route, Link, browserHistory } from 'react-router-dom';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
const { Search } = Input;
class HeaderNav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      category: [],
      	current: '94821302-a50b-48dc-9252-964b708d1d40',  // 默认recommend
        usercurrentCondition: 'top',
        modalVisible: false,
        action: 'login',
        hasLogined: false,
        usertocken: '',
        userid: 0,
        userNickName:'test'
    }
  }
  toQueryString(obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
				var val = obj[key];
				if (Array.isArray(val)) {
						return val.sort().map(function (val2) {
								return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
						}).join('&');
				}
				return encodeURIComponent(key) + '=' + encodeURIComponent(val);
		}).join('&') : '';
};
  handleLogin(e) {
    console.log(e.target.type);
  if (this.state.hasLogined == false) {
    this.setState({usercurrentCondition: 'register'});
    this.setModalVisible(true);
  } else {
    {
      this.setState({usercurrentCondition: 'logout'});
    }
  }
};
logout(){
  localStorage.userid= '';
  localStorage.usertocken = '';
  localStorage.userNickName= '';
  this.setState({hasLogined:false});
};
  setModalVisible(value)
	{
		this.setState({modalVisible: value});
	};
  handleSubmit_login(e){
		e.preventDefault();
		let initHeaders = new Headers()

		initHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
// 		body 数据，格式 key=val&key=val&key=val
		var formData = this.props.form.getFieldsValue();
				console.log(formData)
			console.log(formData.username)

		let body={
				"grant_type" : "password",
				"username": formData.username,
				"password": formData.password
			};
			console.log(body);
			body=this.toQueryString(body);
		//	body = JSON.stringify(body, null, 2);

			console.log(body);

		var myFetchOptions = {

					method: 'POST',//
					headers:{
						"Content-Type":"application/x-www-form-urlencoded",
						"Authorization":"Basic YW10LWNsaWVudDphbXQtY2xpZW50LXNlY3JldA=="

					},
				body: body
		};
		console.log(myFetchOptions);
	//	console.log(typeof(myFetchOptions));
	//	console.log(formData);
		fetch("https://api.americanmuslimtoday.net/amt-news/oauth/token", myFetchOptions)
		.then(response => {
			console.log((response));
			console.log((response.status));
			if (response.status=="200") {
				message.success("register success!");
				this.setState({hasLogined:true});
				this.setModalVisible(false);
			}
			else {
				message.success("Please check your keyword and account email again");
				this.setState({hasLogined:false});
			//	this.setModalVisible(true);
		//		return 0;
			}
		  return response.json();
			console.log(response);

		})
		.then(json => {
			console.log(json);
			console.log(json.access_token);
			if (json.access_token!="undefined"){
				this.setState({
					usertocken: json.access_token,
					userNickName: json.name,
					userid: json.userId

				});
			localStorage.userid= json.userId;
			localStorage.usertocken = json.access_token;
			localStorage.userNickName = json.name
			}

		console.log(localStorage);
		})
		.catch(e => console.log(e));

	//	message.success("请求成功！");

	}
  handleSubmit_reg(e)
	{
		//页面开始向 API 进行提交数据
		e.preventDefault();
		let initHeaders = new Headers()

		initHeaders.append('Content-Type', 'application/json')
// 		body 数据，格式 key=val&key=val&key=val
		var formData = this.props.form.getFieldsValue();
		console.log(formData)
		let body={
				"name": formData.r_userName,
				"email":formData.r_userEmail,
				"password": formData.r_password,
				"confirmPassword":formData.r_confirmPassword,
				"timeZone":"US/Central"
			};
			console.log(body);
			body = JSON.stringify(body, null, 2);

			console.log(body);

		var myFetchOptions = {

					method: 'POST',//
					headers:{
						"Content-Type":"application/json"

					},
				body

		};

		console.log(myFetchOptions);
		console.log(typeof(myFetchOptions));
		console.log(formData);
		fetch("https://api.americanmuslimtoday.net/amt-news/account", myFetchOptions)
		.then(response => {
			console.log((response.status));
			if (response.status=="201") {
				message.success("register success!");
					this.setModalVisible(false);
			}
			else {
				message.success("Please check your input again, or maybe change a new email address");
			}
			response.json()

		})
		.then(json => {
			console.log(json);

		//	this.setState({userNickName: json.name, userid: json.userId});
		//	localStorage.userid= json.userId;
		//	localStorage.usertocken = json.name;
		})
		.catch(e => console.log(e));
		if (this.state.action=="login") {
			this.setState({hasLogined:false});
		}
	//	message.success("请求成功！");

	};
  handleClick = e => {    // 点击分类标签后传参
  console.log('click ', e.key);
    this.props.passCategory(e.key)   // 回调父组件传进来的函数 传值


  this.setState({
    current: e.key,
  });  }

  callback = key => {
  console.log(key);

  if (key == 1) {
    this.setState({action: 'login'});
  } else if (key == 2) {
    this.setState({action: 'register'});
  }
};


    componentDidMount() {
      // 判断是否已经登陆
      if (localStorage.userid!='undefined' & localStorage.userid!='') {
  this.setState({hasLogined:true});
  this.setState({usertocken:localStorage.usertocken,userid:localStorage.userid,userNickName:localStorage.userNickName});
}
// request for all category
var myFetchOptions = {
  method: 'GET'
};
fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/news/categories?showArchived=true", myFetchOptions)
.then(response => response.json())
.then(json => {

  var tmp_list = json;

  for (var i=0 ; i < tmp_list.length; i++){
    if (tmp_list[i].category=="Advertisement1"){
       tmp_list.splice(i,1);
    }
    if (tmp_list[i].category=="Advertisement2"){
       tmp_list.splice(i,1);
    }
    if (tmp_list[i].category=="Advertisement3"){
       tmp_list.splice(i,1);
    }
    if (tmp_list[i].category=="Logo-video"){
       tmp_list.splice(i,1);
    }
      if (tmp_list[i].category=="Video"){
         tmp_list.splice(i,1);
      }


  }
  this.setState({category: tmp_list})



});



// 处理头部

        $(window).scroll(res => {
            if($(window).scrollTop() > 10){
                $(".header-nav").css({
                    'box-shadow': '0 0 10px 0 rgba(0,0,0,.4)',
                    '-webkit-box-shadow': '0 0 10px 0 rgba(0,0,0,.4)',
                    '-moz-box-shadow': '0 0 10px 0 rgba(0,0,0,.4))',
                    '-o-box-shadow': '0 0 10px 0 rgba(0,0,0,.4)'
                })
            } else {
                $(".header-nav").css({
                    'box-shadow': 'none',
                    '-webkit-box-shadow': 'none',
                    '-moz-box-shadow': 'none',
                    '-o-box-shadow': 'none'
                })
            }
        })
    }
    handleSearch = value => {
      this.props.passSearch(value)
    };
    // handleSearch(e){
    //   console.log(e);
    //   this.props.passSearch(e)
    // }

    render() {
      		const getFieldProps = this.props.form.getFieldProps;
      console.log(this.props);
      const {category} = this.state


      const newsCatelist =  category.map((newsItem, index) => (

      <Menu.Item key={newsItem.categoryId} className="category"  >
         <span href="javascript:;" className="amt-font">AMT</span>  {newsItem.category}
      </Menu.Item>

  ))
        const userShow = this.state.hasLogined
        ? <Menu.Item key="logout" class="">
            <Button type="link" shape="round" ghost size={'large'} style={{display:"inline-block"}} >{this.state.userNickName}</Button>

            <Link target="_blank" to={`/profile`} style={{display:"inline-block"}}>
              <Button type="primary" shape="round" size={'large'} style={{display:"inline-block"}} >Profile</Button>
            </Link>

            <Button type="ghost" shape="round" size={'large'} onClick={this.logout.bind(this)} style={{display:"inline-block",float:'right'}} >Log Out</Button>
          </Menu.Item>
        :


        <Menu.Item key="register" class="">
          <Button type="link" className="register" shape="round" ghost size={'large'} >Register</Button>
          <Button type="primary" className="login" shape="round" size={'large'} onClick={(e) => this.handleLogin(e) }  >Login</Button>
        </Menu.Item>;


        return (
            <div className="header-nav">

                <div className="nav-important">
                    <Link to={``} target="_blank">
                    <div className="logo">
                        <img src={require('../../../../assets/images/logo.png')}/>
                    </div>
                     </Link>

                    <div className="search-block">
                    <Search
                        placeholder="Please enter your search"
                        enterButton="Search"
                        size="large"
                    //    onSearch={value => console.log(value)}
                      onSearch={value => this.handleSearch(value)}
                      // onSearch={this.handleSearch.bind(this)}  这种也行 不用es6  onsearch自动value传上去
                    />

                    </div>
                    {/*
// 这里而已在menu 上绑定handleclcik 拿到e 用e.key去判断哪个栏目然后执行操作 但是 为了方便我们直接在menu下面的button绑定 避免e.key判断*/}
                  <Menu mode="horizontal" selectedKeys={[this.state.current]} style={{background:"#02478A"}} >
                    <Menu.Item key="shishang" >
                    <Link to={`/classifiedhome`} target="_blank">   {/*// `classifiedhome/` 这种用法就是在当前页面下加claasifedd 而实际用法是在主页后加 */}
                      <Icon type="appstore"/>Classified
                    </Link>
                    </Menu.Item>
          					{userShow}
          				</Menu>
{/*
                    <div className="login-module">
                        <Button type="link" className="register" shape="round" ghost size={'large'} >Register</Button>
                        <Button type="primary" className="login" shape="round" size={'large'} onClick={(e) => this.handleLogin(e) }  >Login</Button>
                    </div>    */}
                </div>
                <div className="nav-text">
                  {/*  <ul>
                        {newsCatelist}

                       <li> <a> <span href="javascript:;" className="amt-font">AMT</span> <span href="javascript:;" >News</span> </a> </li>

                    </ul>

                  */}


				<Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} className="category-list" >
			       {newsCatelist}

				</Menu>
                </div>


        {/*       // onCancel= {this.setModalVisible.bind(this,false)} this is same function as below   */}
                		<Modal title="User Center" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)}
                									footer={[
                										null
                									]}
                									>
                										<Tabs type="card" onChange={this.callback.bind(this)}>
                											<TabPane tab="Login" key="1">
                												<Form horizontal onSubmit={this.handleSubmit_login.bind(this)}>
                												<FormItem label="username">
                													<Input type="text" placeholder="input your username" {...getFieldProps('username')}/>
                												</FormItem>
                													<FormItem label="Key">
                														<Input type="password" placeholder="Enter your key" {...getFieldProps('password')}/>
                													</FormItem>
                													<Button type="primary" htmlType="submit">Log In</Button>
                												</Form>
                											</TabPane>
                											<TabPane tab="Register" key="2">
                												<Form horizontal onSubmit={this.handleSubmit_reg.bind(this)}>
                													<FormItem label="Account">
                														<Input placeholder="Enter your account" {...getFieldProps('r_userName')}/>
                													</FormItem>
                													<FormItem label="email">
                														<Input placeholder="Enter your email" {...getFieldProps('r_userEmail')}/>
                													</FormItem>
                													<FormItem label="Password">
                														<Input type="password" placeholder="Enter your key" {...getFieldProps('r_password')}/>
                													</FormItem>
                													<FormItem label="Confirm Password">
                														<Input type="password" placeholder="Enter Key" {...getFieldProps('r_confirmPassword')}/>
                													</FormItem>
                													<Button type="primary" htmlType="submit">Register</Button>
                												</Form>
                											</TabPane>
                										</Tabs>
                									</Modal>

            </div>

        )
    }
}

export default HeaderNav = Form.create({})(HeaderNav);
