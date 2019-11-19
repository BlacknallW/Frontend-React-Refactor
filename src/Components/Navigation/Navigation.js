import React from "react";
import CurrencyBox from "./Currency/Currency";
import InfoBox from "./InfoBox/InfoBox";
import WeatherBox from "./Weather/Weather";
import "./Navigation.css";

class Navigation extends React.Component {
	render() {
		return (
			<>
				<div className="box" id="box">
					<WeatherBox location={this.props.location} />
					<InfoBox />
					<CurrencyBox currency={this.props.currency} />
				</div>
			</>
		);
	}
}

export default Navigation;
