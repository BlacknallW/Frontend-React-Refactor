import React from "react";
import "./Weather.css";
import weatherapi from "../../../API/weatherapi";

class WeatherBox extends React.Component {
	state = {
		Location: null
	};

	onImageClick = async location => {
		const res = await weatherapi.get("/forecast", {
			params: {
				q: location,
				units: "imperial",
				APPID: "d5bfe8a65a2dce437fd2e6c635989395"
			}
		});
		console.log(res.data.list)
		const tomato = "Tomato"
        //Gets the current temperature
        const currentDayTemp = res.data.list[0].main.temp
        //Gets the current sky conditions
        const currentDayPrecipitation = res.data.list[0].weather[0].main
        // Gets the current humidity level
        const currentDayHumidity = res.data.list[0].main.humidity
        //Gets the current wind speed
        const currentDayWind = res.data.list[0].wind.speed
        //Gets the current day's low temperature
        const currentDayLow = res.data.list[0].main.temp_min
        //Gets the current day's high temperature
        const currentDayHigh = res.data.list[0].main.temp_max

        //The following methods just input the variable values into the document

        //The API lists temperatures per 3 hour interval, meaning 8 indexes per day, so each day's index list retrieval increments by 8, then the temperature is rounded.
        const secondDayTemp = Math.round(res.data.list[8].main.temp)
        const thirdDayTemp = Math.round(res.data.list[16].main.temp)
        const fourthDayTemp = Math.round(res.data.list[24].main.temp)
        const fifthDayTemp = Math.round(res.data.list[32].main.temp)

        //This long-winded series of code blocks just caluate the date using unix timecodes, converts that date into a string, splits it into an array, then takes the first index of that array, which is the three-letter day abbreviation.
        let secondDayDate = new Date(res.data.list[8].dt*1000);
        let dateToString = secondDayDate.toString();
        let dateToArray = dateToString.split(" ")
        let secondDayName = dateToArray[0]

        let thirdDayDate = new Date(res.data.list[16].dt*1000);
        dateToString = thirdDayDate.toString();
        dateToArray = dateToString.split(" ")
        let thirdDayName = dateToArray[0]
        
        let fourthDayDate = new Date(res.data.list[24].dt*1000);
        dateToString = fourthDayDate.toString();
        dateToArray = dateToString.split(" ")
        let fourthDayName = dateToArray[0]
        
        let fifthDayDate = new Date(res.data.list[32].dt*1000);
        dateToString = fifthDayDate.toString();
        dateToArray = dateToString.split(" ")
		let fifthDayName = dateToArray[0]
	};


	render() {
		return (
			<>
				<div className="weather-box" id="weatherBox">
					<table className="table is-bordered is-hoverable">
						<tbody>
							<tr>
								<td className="has-text-centered" colSpan="4">
									City Name
								</td>
							</tr>
							<tr>
								<td rowSpan="4">Current Temp</td>
								<td>50</td>
							</tr>
						</tbody>
					</table>
					<table className="table is-bordered is-hoverable">
						<tbody>
							<tr>
								<td>Monday</td>
								<td>Tuesday</td>
								<td>Wednesday</td>
								<td>Thursday</td>
							</tr>
							<tr>
	<td>{this.onImageClick.tomato}</td>
								<td>10</td>
								<td>10</td>
								<td>10</td>
							</tr>
						</tbody>
					</table>
				</div>
			</>
		);
	}
}

export default WeatherBox;
