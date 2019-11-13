import React from "react";
import Axios from "axios";

class Currency extends React.Component {
    render() {
        return (<>
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
        </>)
    }
}

export default Currency;