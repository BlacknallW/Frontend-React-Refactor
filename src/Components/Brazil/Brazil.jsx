import React from "react";
import RioRedeemer from "./images/Christ-the-Redeemer-980x613.jpg";
import RioEscalera from "./images/Escalera coloridas-Selaron5-.jpeg";
import BahiaSalvador from "./images/salvador-brazil-postcard.webp";
import BahiaStreet from "./images/Bahia-street.jpg";
import FozDoIguacu from "./images/foz-iguazufalls.jpg"

export default function BrazilContent() {
    return (
        <React.Fragment>
            <nav>
                <ul className="nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="https://www.lonelyplanet.com/brazil/rio-de-janeiro" target="_blank" rel="noreferrer noopener">Rio De Janerio</a></li>
                    <li><a href="https://www.lonelyplanet.com/brazil/bahia" target="_blank" rel="noreferrer noopener"> Bahia</a></li>
                    <li><a href="https://www.lonelyplanet.com/brazil/the-south/foz-do-iguacu" target="_blank" rel="noreferrer noopener">Foz do Iguacu</a></li>
                    <li><a href="https://www.chimuadventures.com/blog/2016/10/culture-and-customs-of-brazil/" target="_blank" rel="noreferrer noopener">Culture</a></li>

                    <li><a href="https://brazilian.report/" target="_blank" rel="noreferrer noopener">The Brazilian Report</a></li>
                </ul>    
            </nav>
            <div className="flexbox">
                <main className="grid">
                    <div className="image1" id="Rio de Janerio" >
                        <img  className="image1img" src={RioRedeemer} alt="Rio De Janerio"/>
                    </div>
                    <div className="image2" id="Rio De Janerio" >
                        <img className="image2" src={RioEscalera} alt="Rio De Janerio"/>
                    </div>
                    <div className="image3"  id="Bahia">
                        <img className="image3" src={BahiaSalvador} alt="Bahia" />
                    </div>
                    <div className="image4" id="Bahia City">
                        <img className="image4" src={BahiaStreet} alt="Bahia City"/>
                    </div>
                    <div className="image5" id="Foz do Iguacu" >
                        <img className="image5" src={FozDoIguacu} alt="Foz do Iguacu"/>     
                    </div>
                </main>
        <div className="info-box">
                <div className="weather-box" id="weatherBox">
                    <p className="city-name" id="cityName">
                    
                    </p>
                    <p className="day1" id="day1">
                    
                    </p>
                    <ul className="condition-list">
                        <li id="precipitation"></li>
                        <li id="humidity"></li>
                        <li id="windSpeed"></li>
                        <li id="highLow"></li>
                    </ul>
                    <p className="day2" id="day2"><span className="days" id="day2Name"><br/></span></p>
                    <p className="day3" id="day3"><span className="days" id="day3Name"><br/></span></p>
                    <p className="day4" id="day4"><span className="days" id="day4Name"><br/></span></p>
                    <p className="day5" id="day5"><span className="days" id="day5Name"><br/></span></p>
                    <p className="ext-forecast">Extended Forecast</p>
                </div>
                <div className="location-box">
                    <ul className="link-list">
                        <li className="home" id ="City">Home</li> 
                        <li className="Flights"><a id ="Flights" target="_blank" rel="noreferrer noopener">Flights</a></li>
                        <li className="Accomodations"><a id ="Accomodations" target="_blank" rel="noreferrer noopener">Accomodations</a></li>
                        <li className="Restaurants"><a id ="Restaurants" target="_blank" rel="noreferrer noopener">Restaurants</a></li>
                        <li className="MainAttractions"><a id ="MainAttractions" target="_blank" rel="noreferrer noopener">Main Attractions</a></li>
                        <li className="Tours"><a id ="Tours" target="_blank" rel="noreferrer noopener">Tours</a></li>
                        <li className="Shopping"><a id ="Shopping" target="_blank" rel="noreferrer noopener">Shopping</a></li>
                    </ul>
                </div>
        <div className="currency-box">
                <form className="form-box" id="currencyForm">
                <div className="trip-box">
                        <label className="travelers">Guests:</label>
                        <input type="number" step="1" value="1" min="1" className="traveler-number" id="travelerNumber"/>
                        <label className="nights">Nights:</label>
                        <input type="number" step="1" className="nights-number" value="1" min="1" id="nightsNumber"/>
                    </div>  
                    <div className="currency-input-column">
                        <label className="label">Currency:</label>
                        <input list="currencyinput" className="currency-input" id="userCurrency"/>
                        <datalist id="currencyinput">
                            <option value="USD">United States Dollar</option>
                            <option value="CAD">Canadian Dollar</option>
                            <option value="HKD">Hong Kong Dollar</option>
                            <option value="ISK">Icelandic Króna</option>
                            <option value="PHP">Philippine Peso</option>
                            <option value="DKK">Danish Krone</option>
                            <option value="HUF">Hungarian Forint</option>
                            <option value="CZK">Czech Koruna</option>
                            <option value="GBP">Pound Sterling</option>
                            <option value="RON">Romanian Leu</option>
                            <option value="SEK">Swedish Krona</option>
                            <option value="IDR">Indonesian Rupiah</option>
                            <option value="INR">Indian Rupee</option>
                            <option value="BRL">Brazilian Real</option>
                            <option value="RUB">Russian Ruble</option>
                            <option value="HRK">Croatian Kuna</option>
                            <option value="JPY">Japanese Yen</option>
                            <option value="THB">Thai Baht</option>
                            <option value="CHF">Swiss Franc</option>
                            <option value="EUR">Euro</option>
                            <option value="MYR">Malaysian Ringgit</option>
                            <option value="BGN">Bulgarian Lev</option>
                            <option value="TRY">Turkish Lira</option>
                            <option value="CNY">Chinese Yuan</option>
                            <option value="NOK">Norwegian Krone</option>
                            <option value="NZD">New Zealand Dollar</option>
                            <option value="ZAR">South African Rand</option>
                            <option value="MXN">Mexican Peso</option>
                            <option value="SGD">Singapore Dollar</option>
                            <option value="AUD">Australian Dollar</option>
                            <option value="ILS">Israeli New Shekel</option>
                            <option value="KRW">South Korean Won</option>
                            <option value="PLN">Poland Zloty</option>
                        </datalist>
                    </div>
                    <input type="submit" value="Calculate" className="calculate"/>
                    <label className="description">Description</label>
                    <label className="avg-cost">Avg Cost BRL</label>
                    <label className="cost-tab" id="costTab">Cost in</label>
                    <div className="hotel">
                        <label for="hotel"className="hotel-name">Hotel</label>
                    </div>
                    <div className="food">
                        <label for="food" className="food-name">Food</label>
                    </div>
                    <div className="entertainment">
                        <label for="entertainment" className="entertainment-name">Entertainment</label>
                    </div>
                    <div className="transportation"> 
                        <label for="transportation" className="transportation-name">Transportation</label>
                    </div>
                        <label className="hotel-us-cost" id="hotelBrazilCost">R$340</label>
                        <label className="food-us-cost" id="foodBrazilCost">R$56</label>
                        <label className="entertainment-us-cost" id="entertainmentBrazilCost">R$50</label>
                        <label className="transportation-us-cost" id="transportationBrazilCost">R$4200</label>
                        <label className="hotel-user-cost" id="hotelUserCost"></label>
                        <label className="food-user-cost" id="foodUserCost"></label>
                        <label className="entertainment-user-cost" id="entertainmentUserCost"></label>
                        <label className="transportation-user-cost" id="transportationUserCost"></label>
                </form>
    
        </div>
                </div>
        </div>
        </React.Fragment>
    )
} 