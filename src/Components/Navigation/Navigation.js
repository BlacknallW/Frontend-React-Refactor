import React from "react";
import CurrencyBox from "./Currency/Currency";
import WeatherBox from "./Weather/Weather";
import "./Navigation.css";

class Navigation extends React.Component {
	render() {
		return (
			<>
				<div className="box" id="box">
					<div className="has-text-centered">
						<h1>Weather</h1>
						</div>
					<WeatherBox location={this.props.location} />
					<br/>
					<div className="has-text-centered">
						<h1>Currency Exchange</h1>
					</div>
					<CurrencyBox currency={this.props.currency} />
				</div>
			</>
		);
	}
}

export default Navigation;
