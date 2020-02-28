import React from "react";
import './pcWeather.scss';

const WeatherForm = props => (
	<form >
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>

	</form>
);

export default WeatherForm;
