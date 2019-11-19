import React from "react";
import "./Weather.css";
import weatherapi from "../../../API/weatherapi";

class WeatherBox extends React.Component {
  state = {
    location: null,
    currentTemp: 0,
    currentPrecip: 0,
    currentHumid: 0,
    currentWind: 0,
    currentHigh: 0,
    currentLow: 0,
    secondDayTemp: 0,
    thirdDayTemp: 0,
    fourthDayTemp: 0,
    fifthDayTemp: 0,
    secondDayName: null,
    thirdDayName: null,
    fourthDayName: null,
    fifthDayName: null
  };

  componentDidMount() {
    this.updateWeather();
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.updateWeather();
    }
  }

  updateWeather = async () => {
    const location = this.props.location;
    const res = await weatherapi.get("/forecast", {
      params: {
        q: this.props.location,
        units: "imperial",
        APPID: "d5bfe8a65a2dce437fd2e6c635989395"
      }
    });

    console.log(this.props.location);
    //Gets the current temperature
    const currentDayTemp = Math.round(res.data.list[0].main.temp);
    //Gets the current sky conditions
    const currentDayPrecipitation = res.data.list[0].weather[0].main;
    // Gets the current humidity level
    const currentDayHumidity = res.data.list[0].main.humidity;
    //Gets the current wind speed
    const currentDayWind = res.data.list[0].wind.speed;
    //Gets the current day's low temperature
    const currentDayLow = Math.round(res.data.list[0].main.temp_min);
    //Gets the current day's high temperature
    const currentDayHigh = Math.round(res.data.list[0].main.temp_max);

    //The following methods just input the variable values into the document

    //The API lists temperatures per 3 hour interval, meaning 8 indexes per day, so each day's index list retrieval increments by 8, then the temperature is rounded.
    const secondDayTemp = Math.round(res.data.list[8].main.temp);
    const thirdDayTemp = Math.round(res.data.list[16].main.temp);
    const fourthDayTemp = Math.round(res.data.list[24].main.temp);
    const fifthDayTemp = Math.round(res.data.list[32].main.temp);

    //This long-winded series of code blocks just caluate the date using unix timecodes, converts that date into a string, splits it into an array, then takes the first index of that array, which is the three-letter day abbreviation.
    let secondDayDate = new Date(res.data.list[8].dt * 1000);
    let dateToString = secondDayDate.toString();
    let dateToArray = dateToString.split(" ");
    let secondDayName = dateToArray[0];

    let thirdDayDate = new Date(res.data.list[16].dt * 1000);
    dateToString = thirdDayDate.toString();
    dateToArray = dateToString.split(" ");
    let thirdDayName = dateToArray[0];

    let fourthDayDate = new Date(res.data.list[24].dt * 1000);
    dateToString = fourthDayDate.toString();
    dateToArray = dateToString.split(" ");
    let fourthDayName = dateToArray[0];

    let fifthDayDate = new Date(res.data.list[32].dt * 1000);
    dateToString = fifthDayDate.toString();
    dateToArray = dateToString.split(" ");
    let fifthDayName = dateToArray[0];

    this.setState({
      location: location,
      currentTemp: currentDayTemp,
      currentPrecip: currentDayPrecipitation,
      currentHumid: currentDayHumidity,
      currentHigh: currentDayHigh,
      currentLow: currentDayLow,
      currentWind: currentDayWind,
      secondDayTemp: secondDayTemp,
      thirdDayTemp: thirdDayTemp,
      fourthDayTemp: fourthDayTemp,
      fifthDayTemp: fifthDayTemp,
      secondDayName: secondDayName,
      thirdDayName: thirdDayName,
      fourthDayName: fourthDayName,
      fifthDayName: fifthDayName
    });
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <>
        <div className="weather-box" id="weatherBox">
          <table className="table is-bordered is-hoverable">
            <tbody>
              <tr>
                <td className="has-text-centered" colSpan="4">
                  {this.state.location}
                </td>
              </tr>
              <tr>
                <td rowSpan="4">
                  Current Temp: <br />
                  {this.state.currentTemp}°F
                </td>
                <td>Sky Conditions: {this.state.currentPrecip} </td>
              </tr>
              <tr>
                <td>Humidity: {this.state.currentHumid}% </td>
              </tr>
              <tr>
                <td>Wind: {this.state.currentWind}mph</td>
              </tr>
              <tr>
                <td>
                  High/Low: {this.state.currentHigh}°/
                  {this.state.currentLow}°
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table is-bordered is-hoverable">
            <tbody>
              <tr>
                <td>{this.state.secondDayName}</td>
                <td>{this.state.thirdDayName}</td>
                <td>{this.state.fourthDayName}</td>
                <td>{this.state.fifthDayName}</td>
              </tr>
              <tr>
                <td>{this.state.secondDayTemp}°</td>
                <td>{this.state.thirdDayTemp}°</td>
                <td>{this.state.fourthDayTemp}°</td>
                <td>{this.state.fifthDayTemp}°</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default WeatherBox;
