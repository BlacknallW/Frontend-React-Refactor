import React from "react";
import "./Weather.css";

class WeatherBox extends React.Component {
	state = {
		Today: null
	};

	render() {
		return (
			<>
				<div className="weather-box" id="weatherBox">
					<table className="table is-bordered is-hoverable">
							<tr>
								<td className="has-text-centered" Span="4" >City Name</td>
							</tr>
							<tr>
								<td rowSpan="4">Current Temp</td>
								<td>50</td>
							</tr>
							</table>
							<table className="table is-bordered is-hoverable">
							<tr>
								<td>Monday</td>
								<td>Tuesday</td>
								<td>Wednesday</td>
								<td>Thursday</td>
							</tr>
						<tr>
							<td>10</td>
							<td>10</td>
							<td>10</td>
							<td>10</td>
						</tr>
					</table>
				</div>
			</>
		);
	}
}

export default WeatherBox;
