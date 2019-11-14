import React from "react";
import USContent from "./US.jsx";
import "./US.css";
import Navigation from "../Navigation/Navigation";
export default class US extends React.Component {
	render() {
		return (
			<>
				<Navigation />
				<USContent onClick={this.props.location} />
			</>
		);
	}
}
