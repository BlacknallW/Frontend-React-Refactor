import React from 'react';
import Alaska from './images/alaska.jpg';
import Florida from './images/florida.jpg';
import LosAngeles from './images/la.jpg';
import Hawaii from './images/Hawaii.PNG';
import WashingtonDC from './images/washingtonDC.jpeg';
import NewYork from './images/newyork.jpg';
import SanDiego from './images/sandiego.jpeg';
import LasVegas from './images/la.jpg';

export default function USContent() {
    return (
        <React.Fragment>
        <nav>
            <div id="logo">NS Americas</div>
            <label for="drop" class="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul class="menu">
                <li><a href="index.html">Home</a></li>
                <li>
                    <label for="drop-1" class="toggle">Brazil</label>
                    <a href="https://www.usatoday.com/sports/" target="_blank" rel="noreferrer noopener">Sports</a>
                </li>
                <li>
                <label for="drop-2" class="toggle">Blog</label>
                <a href="https://www.americantravelblogger.com" target="_blank" rel="noreferrer noopener">Blog</a>
                </li>
                <li><a href="https://www.usnews.com" target="_blank" rel="noreferrer noopener">News</a></li>
                <li><a href="https://www.huffpost.com/life/travel" target="_blank" rel="noreferrer noopener">Posts</a></li>
                <li class="search-box">
                <form action="https://www.google.com/search" autocomplete ="off" name="searchform" method="get" target="_blank"> 
                    <input type="text"  name="q" placeholder="       Search . . ." required/>
                    <button type="submit" hidden></button>
                </form> 
                </li>
                
            </ul>
        </nav>
        
        <main class="body-content">
            
            <div class ="main-content" >
            <ul class ="img-content">
                <li><img id="Florida" src ={Florida} alt="Florida"/></li>
                <li><img id="NewYork" src ={NewYork} alt="New York"/></li>
                <li><img id ="losangeles"src ={LosAngeles} alt="Los Angeles"/></li>
                <li><img id ="sandiego"src ={SanDiego} alt="San Diego"/></li>
                <li><img id="dc" src ={WashingtonDC} alt="Washington D.C."/></li>
                <li><img id="vegas" src ={LasVegas} alt="Las Vegas"/></li>
                <li><img id="alaska" src ={Alaska} alt="Alaska"/></li>
                <li><img id="hawaii" src ={Hawaii} alt="Hawaii"/></li>
                
            </ul>
            </div>

    <div class="info-box">
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
        <div class="categories">
            <ul class="list">
                <li class="home" id="city">Home</li>
                <li class="attractions"><a id ="attractions"  target="_blank" rel="noreferrer noopener">Attractions</a></li>
                <li class="adventures"><a id ="link"  target="_blank" rel="noreferrer noopener">Adventures</a></li>
                <li class="shop"><a id ="shop"  target="_blank" rel="noreferrer noopener">Shopping</a></li>
                <li class="restaurant"><a id ="restaurant"  target="_blank" rel="noreferrer noopener">Restaurant</a></li>
                <li class="stay"><a id ="stay" target="_blank" rel="noreferrer noopener">Accomodation</a></li>
            </ul>
        </div>
        <div class="currency-box">
                <form class="form-box" id="currencyForm">
                    <div class="trip-box">
                        <label class="travelers">Guests:</label>
                        <input type="number" step="1" value="1" min="1" class="traveler-number" id="travelerNumber"/>
                        <label class="nights">Nights:</label>
                        <input type="number" step="1" class="nights-number" value="1" min="1" id="nightsNumber"/>
                    </div>
                    <div class="currency-input-column">
                        <label class="label">User Currency:</label>
                        <input list="currencyInput" class="currency-input" id="userCurrency"/>
                        <datalist id="currencyInput">
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
                    <input type="submit" value="Calculate" class="calculate"/>
                    <label class="description">Description</label>
                    <label class="avg-cost">Avg Cost USD</label>
                    <label class="cost-tab" id="costTab"></label>
                    <div class="hotel">
                        <label for="hotel"class="hotel-name">Hotel</label>
                    </div>
                    <div class="food">
                        <label for="food" class="food-name">Food</label>
                    </div>
                    <div class="entertainment">
                        <label for="entertainment" class="entertainment-name">Entertainment</label>
                    </div>
                    <div class="transportation"> 
                        <label for="transportation" class="transportation-name">Transportation</label>
    
                    </div>
                        <label class="hotel-us-cost" id="hotelUsCost">$150</label>
                        <label class="food-us-cost" id="foodUsCost">$82</label>
                        <label class="entertainment-us-cost" id="entertainmentUsCost">$150</label>
                        <label class="transportation-us-cost" id="transportationUsCost">$1060</label>
                        <label class="hotel-user-cost" id="hotelUserCost"></label>
                        <label class="food-user-cost" id="foodUserCost"></label>
                        <label class="entertainment-user-cost" id="entertainmentUserCost"></label>
                        <label class="transportation-user-cost" id="transportationUserCost"></label>
                </form>
    
            </div>
    </div>
    </main>
        </React.Fragment>
    )
}