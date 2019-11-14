import React from "react";
import Axios from "axios";
import "./Currency.css";

class CurrencyBox extends React.Component {
	render() {
		return (
			<>
				<div className="currency-box">
					<form className="form-box form" id="currencyForm">
						<div class="trip-box control">
							<label class="travelers label">Guests:</label>
							<input
								type="number"
								step="1"
								value="1"
								min="1"
								class="traveler-number"
								id="travelerNumber"
								className="input"
							/>
							<label
								class="nights label"
							>
								Nights:
							</label>
							<input
								type="number"
								step="1"
								className="nights-number input"
								value="1"
								min="1"
								id="nightsNumber"
							/>
						</div>
						<div class="currency-input-column">
							<label className="label">User Currency:</label>
							<input
								list="currencyInput"
								className="currency-input input"
								id="userCurrency"
							/>
							<datalist id="currencyInput">
								<option value="USD">
									United States Dollar
								</option>
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
						<input
							type="submit"
							value="Calculate"
							className="calculate input"
						/>
						<label class="description label">Description</label>
						<label className="avg-cost label">Avg Cost USD</label>
						<label className="cost-tab label" id="costTab"></label>
						<div className="hotel">
							<label for="hotel" className="hotel-name label">
								Hotel
							</label>
						</div>
						<div className="food">
							<label for="food" className="food-name label">
								Food
							</label>
						</div>
						<div className="entertainment">
							<label
								for="entertainment"
								className="entertainment-name label"
							>
								Entertainment
							</label>
						</div>
						<div className="transportation">
							<label
								for="transportation"
								className="transportation-name label"
							>
								Transportation
							</label>
						</div>
						<label class="hotel-us-cost" id="hotelUsCost">
							$150
						</label>
						<label class="food-us-cost" id="foodUsCost">
							$82
						</label>
						<label
							class="entertainment-us-cost"
							id="entertainmentUsCost"
						>
							$150
						</label>
						<label
							class="transportation-us-cost"
							id="transportationUsCost"
						>
							$1060
						</label>
						<label
							class="hotel-user-cost"
							id="hotelUserCost"
						></label>
						<label class="food-user-cost" id="foodUserCost"></label>
						<label
							class="entertainment-user-cost"
							id="entertainmentUserCost"
						></label>
						<label
							class="transportation-user-cost"
							id="transportationUserCost"
						></label>
					</form>
				</div>
			</>
		);
	}
}

export default CurrencyBox;
