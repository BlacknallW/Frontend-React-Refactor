import React from "react";
import CurrencyBox from "./Currency/Currency";
import InfoBox from "./InfoBox/InfoBox";
import WeatherBox from "./Weather/Weather";
import "./Navigation.css";

class Navigation extends React.Component {
	state = {
		location: "Baltimore"
	}

	componentDidMount = () => {
		this.setState({location: this.props.location})
	}


	render() {
		console.log(this.state)
		return (
			<>
				<div className="box" id="box">
					<WeatherBox location={this.state.location} />
					<InfoBox />
					<CurrencyBox currency={this.props.currency} />
				</div>
			</>
		);
	}
}

export default Navigation;
