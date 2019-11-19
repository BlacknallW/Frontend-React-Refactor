import React from "react";
import CurrencyBox from "./Currency/Currency";
import InfoBox from "./InfoBox/InfoBox";
import WeatherBox from "./Weather/Weather";
import "./Navigation.css";

const Navigation = (props) => {
	return (
		<>
			<div className="box" id="box">
				<WeatherBox location={props.location} />
				<InfoBox />
				<CurrencyBox currency={props.currency}/>
			</div>
		</>
	);
};

export default Navigation;
