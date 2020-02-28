import React from 'react';
import {Card} from 'antd';
import {Tabs} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
import WeatherTitles from "./weather_titles";
import WeatherForm from "./weather_form";
import WeatherResult from "./weather_result";
import './pcWeather.scss';
//import WeatherDemo from './weather_demo';

export default class PCWeather extends React.Component {
	constructor() {
		super();
		this.state = {
			news: '',
			latitude: '',
			longitude:'',
			type:'',
			adv: 6,
			city:undefined,
			temperature: undefined,
			data: undefined,
			humidity: undefined,
			weather: undefined,
			error: undefined,
			country:undefined,
			user_city:'',
			user_country:'America',
			user_address:'',
			img:'cloudy.png'
		};
	}

	getType(key) {
	console.log("eee")
	console.log( "father"+ key);
	var tmp_img = '';
	// 这里已经拿到子组件给的地址参数在key 现在就是把key中的dallas提取出来 然后给api读取气候
	var arr=key.split(", ");

	var reg =/[\u4e00-\u9fa5]/g;

  console.log(key.replace(reg, ""));
	key=key.replace(reg, "");
 	this.setState(
		{
			user_city: arr[1],
	  	user_address: key
		 } // arr[1]保存了字符串地址解析出来以后剩下的dallas
			);

	var myFetchOptions = {
		method: 'GET'
	};

	fetch("http://api.openweathermap.org/data/2.5/weather?q="+arr[1]+","+this.state.user_country+"&appid=afa570de413ba776fbc8c1107a059088&units=metric", myFetchOptions).then(response => response.json())
	.then(json =>
		{
			var tmp_temp = parseInt(json.main.temp*1.8+32);
			this.setState(
		{
			 news: json.weather[0],
			 temperature: tmp_temp,
			 city: json.name,
			 humidity: json.main.humidity,
			 country: json.sys.country,
			 error: ""
		});

		tmp_img=json.weather[0].description;
		console.log(tmp_img.indexOf("haze")!= -1 );
		if (tmp_img.indexOf("cloud")!= -1) {
			this.setState({img:'cloudy.png'});
			return true;
		}
		if (tmp_img.indexOf("haze")!= -1) {
				this.setState({img:'haze.png'});
				return true;
			}
		if (tmp_img.indexOf("sunny")!= -1) {
					this.setState({img:'sunny.png'});
					return true;
				}
		if (tmp_img.indexOf("rain")!= -1) {
						this.setState({img:'raining.png'});
						return true;
					}
		if (tmp_img.indexOf("snow")!= -1) {
							this.setState({img:'snowing.png'});
											return true;
						}
		if (tmp_img.indexOf("storm")!= -1) {
								this.setState({img:'storm.png'});
												return true;

							}

		this.setState({img:'sky.png'});


					})  }


	componentWillMount() {
		var tmp_img = '';
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("http://api.openweathermap.org/data/2.5/weather?q=dallas,america&appid=afa570de413ba776fbc8c1107a059088&units=metric", myFetchOptions).then(response => response.json())
		.then(json =>{
			var tmp_temp = parseInt(json.main.temp*1.8+32);
			 this.setState(
			{
				 news: json.weather[0],
				 temperature: tmp_temp,
				 city: json.name,
				 humidity: json.main.humidity,
				 country: json.sys.country,
				 error: ""
			})
			console.log(json.weather[0].description);
			tmp_img=json.weather[0].description;
			console.log(tmp_img.indexOf("haze")!= -1 );
			if (tmp_img.indexOf("cloud")!= -1) {
				this.setState({img:'cloudy.png'});
				return true;
			}
			if (tmp_img.indexOf("haze")!= -1) {
					this.setState({img:'haze.png'});
					return true;
				}
			if (tmp_img.indexOf("sunny")!= -1) {
						this.setState({img:'sunny.png'});
						return true;
					}
			if (tmp_img.indexOf("rain")!= -1) {
							this.setState({img:'raining.png'});
							return true;
						}
			if (tmp_img.indexOf("snow")!= -1) {
								this.setState({img:'snowing.png'});
												return true;
							}
			if (tmp_img.indexOf("storm")!= -1) {
									this.setState({img:'storm.png'});
													return true;

								}

			this.setState({img:'sky.png'});


						})  }
	render() {
		var settings2 = {
		dots: false,
		infinite: true,
		autoplayInterval: 6000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay:true
	};
  console.log(this.state.img);


		return (
			<div class="topNewsList" >
		{/*	<WeatherDemo getType={this.getType.bind(this)}/> */}
{/* 		<div className="col-xs-5 title-container">
				<WeatherTitles />
			</div>  */}

			<div className="col-xs-7 form-container">

			<form>
				<input type="text" name="city" placeholder="City..."
							value={this.state.user_city}
							onChange={this.handleInputChange1.bind(this)}

				/ >
				<input type="text" name="country" placeholder="Country..."
				value={this.state.user_country}
				onChange={this.handleInputChange2.bind(this)}
				/>

			</form>

{/*
			<WeatherResult
			temperature={this.state.temperature}
			humidity={this.state.humidity}
			city={this.state.city}
			country={this.state.country}
			description={this.state.news.description}
			error={this.state.error}
			current_location={this.state.user_address}
			img={this.state.img}

			/>
*/}
      <div className="weather__info">
    	 {
    	 	this.state.city && 	this.state.country && <p className="weather__key">
    	 		<span className="weather__value" style={{marginLeft:"0px", marginTop:"0px"}}> { 	this.state.city }, { 	this.state.country }</span>
    			<span className="weather__value" style={{marginLeft:"30px", marginTop:"0px"}}> <span style={{color:"red"}}>↑</span> <span style={{color:"red"}}> { 	this.state.temperature+8 },</span>  <span style={{color:"grey"}}>↓</span>   <span style={{color:"grey"}}> { 	this.state.temperature-15 }</span></span>

    	 	</p>
    	 }
    	 {

    			this.state.humidity && <p className="weather__key">

    		<img src={require('../../../../../assets/images/droplet.png')} alt="logo" style={{marginLeft:"-10px", marginTop:"5px", width:"10%"}}/>：
    		<span className="weather__value" style={{marginLeft:"-10px", marginTop:"-30px"}}> { 	this.state.humidity } </span>

    		</p>
    	 }
       {
         <div style={{display:"flex",justifyContent:"space-around"}}>
             		<span className="weather__value" style={{color:"green",  fontSize:"60px", fontweight:"800"}} > { 	this.state.temperature }℉</span>
             		<img src={require('../../../../../assets/images/' + this.state.img)}  alt="logo" style={{ marginTop:"", width:"30%",}}/>

         </div>
       }
    	 {
    	 		this.state.description && <p className="weather__key">
    	 		<span className=""  style={{color:"blue",marginLeft:"20px", marginTop:"0px",width:"100%"}}> { 	this.state.description } </span>
    	 </p>
    	 }

    	 {
    			this.state.current_location && <p className="weather__key">
    			<span className="weather__value" > { 	this.state.current_location } </span>
    	 </p>
    	 }


    	 {
    	 		this.state.error && <p className="weather__error">{ 	this.state.error }</p>
    	 }
    	</div>






			</div>





		</div>






		);
	};

	handleInputChange1(e){
				var tmp_img = '';
		console.log(e.target.value);
//		const city = e.target.elements.city.value;
//	 	const country = e.target.elements.country.value;
		console.log("111");
		 this.setState({
		 	user_city: e.target.value

		 })
		console.log("222");
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("http://api.openweathermap.org/data/2.5/weather?q="+e.target.value+","+this.state.user_country+"&appid=afa570de413ba776fbc8c1107a059088&units=metric", myFetchOptions).then(response => response.json())
		.then(json => {
      console.log(json);
      if (json.cod=='404'){
      return false;}
			var tmp_temp = parseInt(json.main.temp*1.8+32);
			console.log("this is weather " + tmp_temp);
			 this.setState(
			{
				 news: json.weather[0],
				 temperature: tmp_temp,
				 city: json.name,
				 humidity: json.main.humidity,
				 country: json.sys.country,
				 error: ""
			});
			console.log("333");
			tmp_img=json.weather[0].description;
			console.log(tmp_img.indexOf("haze")!= -1 );
			if (tmp_img.indexOf("cloud")!= -1) {
				this.setState({img:"cloudy.png"});
				return true;
			}
			if (tmp_img.indexOf("haze")!= -1) {
					this.setState({img:"haze.png"});
					return true;
				}
			if (tmp_img.indexOf("sunny")!= -1) {
						this.setState({img:"sunny.png"});
						return true;
					}
			if (tmp_img.indexOf("rain")!= -1) {
							this.setState({img:"raining.png"});
							return true;
						}
			if (tmp_img.indexOf("snow")!= -1) {
								this.setState({img:"snowing.png"});
												return true;
							}
			if (tmp_img.indexOf("storm")!= -1) {
									this.setState({img:"storm.png"});
													return true;

								}

			this.setState({img:"sky.png"});


			})  }

	handleInputChange2(e){
		console.log(e.target.value);
//		const city = e.target.elements.city.value;
//	 	const country = e.target.elements.country.value;
		console.log("111");
		 this.setState({
			user_country: e.target.value

		 })
		console.log("222");
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.state.user_city+","+e.target.value+"&appid=afa570de413ba776fbc8c1107a059088&units=metric", myFetchOptions).then(response => response.json())
		.then(json =>{
			var tmp_temp = parseInt(json.main.temp*1.8+32);
			 this.setState(
			{
				 news: json.weather[0],
				 temperature: tmp_temp,
				 city: json.name,
				 humidity: json.main.humidity,
				 country: json.sys.country,
				 error: ""
			})});
			console.log("333");
	}
}
