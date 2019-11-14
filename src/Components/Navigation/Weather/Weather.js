import React from "react";
import Axios from "axios";
import "./Weather.css"

class WeatherBox extends React.Component {
    state = {
        Today: null
    }

    render(){
        return(<>
        <div class="weather-box" id="weatherBox">
                    <p class="city-name" id="cityName">
                        
                    </p>
                    <p class="day1" id="day1">
                        
                    </p>
                    <ul class="condition-list">
                        <li id="precipitation"></li>
                        <li id="humidity"></li>
                        <li id="windSpeed"></li>
                        <li id="highLow"></li>
                    </ul>
                    <p class="day2" id="day2"><span class="days" id="day2Name"><br/></span></p>
                    <p class="day3" id="day3"><span class="days" id="day3Name"><br/></span></p>
                    <p class="day4" id="day4"><span class="days" id="day4Name"><br/></span></p>
                    <p class="day5" id="day5"><span class="days" id="day5Name"><br/></span></p>
                    <p class="ext-forecast">Extended Forecast</p>
                </div>
        </>)
    }   
}

export default WeatherBox;