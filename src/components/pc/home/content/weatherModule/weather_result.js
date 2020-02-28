import React from "react";
import './pcWeather.scss';

const WeatherResult = props => (
	<div className="weather__info">
	 {
	 	props.city && props.country && <p className="weather__key">
	 		<span className="weather__value" style={{marginLeft:"0px", marginTop:"0px"}}> { props.city }, { props.country }</span>
			<span className="weather__value" style={{marginLeft:"30px", marginTop:"0px"}}> <span style={{color:"red"}}>↑</span> <span style={{color:"red"}}> { props.temperature+8 },</span>  <span style={{color:"grey"}}>↓</span>   <span style={{color:"grey"}}> { props.temperature-15 }</span></span>

	 	</p>
	 }
	 {

		props.humidity && <p className="weather__key">

		<img src={require('../../../../../assets/images/droplet.png')} alt="logo" style={{marginLeft:"-10px", marginTop:"5px", width:"10%"}}/>：
		<span className="weather__value" style={{marginLeft:"-10px", marginTop:"-30px"}}> { props.humidity } </span>

		<span className="weather__value" style={{color:"green", marginLeft:"110px", marginTop:"-20px", fontSize:"60px", fontweight:"800", float:"right"}} > { props.temperature }℉</span>
		<img src={require('../'+ props.img)} alt="logo" style={{marginLeft:"87px", marginTop:"-90px", width:"30%", float: "left"}}/>

		</p>
	 }
	 {
	 	props.description && <p className="weather__key">
	 		<span className=""  style={{color:"blue",marginLeft:"20px", marginTop:"0px",width:"100%"}}> { props.description } </span>
	 </p>
	 }
	 <span style={{color:"white"}}>222222222</span>
	 {
		props.current_location && <p className="weather__key">
			<span className="weather__value" > { props.current_location } </span>
	 </p>
	 }


	 {
	 	props.error && <p className="weather__error">{ props.error }</p>
	 }
	</div>
);

export default WeatherResult;
