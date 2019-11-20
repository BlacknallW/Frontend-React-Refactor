import React from "react";
import "./Currency.css";
import currencyexchange from "../../../API/currencyexchange";

class CurrencyBox extends React.Component {
	state = {
		currency: this.props.currency,
		userCurrency: null,
		userHotelPrice: 0,
		userFoodCost: 0,
		userEntertainmentCost: 0,
		userTransportationCost: 0,
		usHotelPrice: 0,
		usFoodCost: 0,
		usEntertainmentCost: 0,
		usTransportationCost: 0,
		travelerCurrency: 0,
		travelerNumber: 0,
		nightsNumber: 0,
		brazilEntertainmentCost: 0,
		brazilFoodCost: 0,
		brazilHotelCost: 0,
		brazilTransportationCost: 0
	};

	calculateExchangeRates = async currency => {
		const res = await currencyexchange.get("/latest", {
			params: {
				base: this.state.currency,
				symbols: currency
			}
		});
		//Pulling data from both the API for currency rate and the user-input from the HTML document for traveler number and nights.
		const travelerCurrency = res.data.rates[this.state.userCurrency];

		this.setState({ travelerCurrency: travelerCurrency });
	};

	updateValues = e => {
		this.setState({
			travelerNumber: document.querySelector("#travelerNumber").value,
			nightsNumber: document.querySelector("#nightsNumber").value,
			userCurrency: document.querySelector("#userCurrency").value
		});
	};

	onCurrencySubmit = e => {
		e.preventDefault();
		const travelerNumber = document.querySelector("#travelerNumber").value;
		const nightsNumber = document.querySelector("#nightsNumber").value;
		//Calculating the cost of each category based on general average price statistics.
		const usHotelPrice = 150 * (nightsNumber * travelerNumber);
		const usFoodCost = 82 * (travelerNumber * nightsNumber);
		const usEntertainmentCost = 150 * (travelerNumber * nightsNumber);
		const usTransportationCost =
			1000 + 60 * (travelerNumber * nightsNumber);


		//Brazil category costs
		const brazilHotelCost = 340 * (nightsNumber * travelerNumber)
        const brazilFoodCost = 56 * (travelerNumber * nightsNumber)
        const brazilEntertainmentCost = 50 * (travelerNumber * nightsNumber)
		const brazilTransportationCost = 4100 + (100 * (travelerNumber * nightsNumber))
		
		//Calculates the user cost in their native currency by multiplying it times USD
		const userHotelPrice = `${((this.props.currency !== "BRL" ?  
			usHotelPrice : brazilHotelCost) * this.state.travelerCurrency
		).toFixed(2)}${this.state.userCurrency}`;
		const userFoodCost = `${(
			(this.props.currency !== "BRL" ?  
			usFoodCost : brazilFoodCost) * this.state.travelerCurrency
		).toFixed(2)}${this.state.userCurrency}`;

		const userEntertainmentCost = `${(
			(this.props.currency !== "BRL" ?  
			usEntertainmentCost : brazilEntertainmentCost) * this.state.travelerCurrency
		).toFixed(2)}${this.state.userCurrency}`;

		const userTransportationCost = `${(
			(this.props.currency !== "BRL" ?  
			usTransportationCost : brazilTransportationCost) * this.state.travelerCurrency
		).toFixed(2)}${this.state.userCurrency}`;

		this.setState({
			userHotelPrice: userHotelPrice,
			userFoodCost: userFoodCost,
			userEntertainmentCost: userEntertainmentCost,
			userTransportationCost: userTransportationCost,
			usHotelPrice: usHotelPrice,
			usFoodCost: usFoodCost,
			usTransportationCost: usTransportationCost,
			usEntertainmentCost: usEntertainmentCost,
			brazilEntertainmentCost: brazilEntertainmentCost,
			brazilFoodCost: brazilFoodCost,
			brazilHotelCost: brazilHotelCost,
			brazilTransportationCost: brazilTransportationCost,
			travelerNumber: travelerNumber,
			nightsNumber: nightsNumber
		});
		this.calculateExchangeRates(this.state.userCurrency);
	};

	render() {
		return (
			<>
				<div className="currency-box">
					<form
						className="form-box field is-grouped-multiline"
						id="currencyForm"
					>
						<div className="trip-box control">
							<label className="travelers label">Guests:</label>
							<input
								type="number"
								step="1"
								min="1"
								className="traveler-number input"
								id="travelerNumber"
								defaultValue="1"
								onChange={this.updateValues}
							/>
							<label className="nights label">Nights:</label>
							<input
								type="number"
								step="1"
								className="nights-number input"
								min="1"
								id="nightsNumber"
								defaultValue="1"
								onChange={this.updateValues}
							/>
						</div>
						<div className="currency-input-column control">
							<label className="label">User Currency:</label>
							<input
								list="currencyInput"
								className="currency-input input"
								id="userCurrency"
								onChange={this.updateValues}
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
							className="calculate input button is-dark"
							onClick={this.onCurrencySubmit}
						/>
						<table className="table is-bordered is-hoverable is-fullwidth">
							<thead>
								<tr>
									<th>Description</th>
									<th>Avg Cost {this.props.currency}</th>
									<th>Avg Cost {this.state.userCurrency}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Hotel</td>
									<td>
										{this.props.currency !== "BRL"
											? `$${this.state.usHotelPrice}`
											: `R$${this.state.brazilHotelCost}`}
									</td>
									<td>{this.state.userHotelPrice}</td>
								</tr>
								<tr>
									<td>Food</td>
									<td>
										{this.props.currency !== "BRL"
											? `$${this.state.usFoodCost}`
											: `R$${this.state.brazilFoodCost}`}
									</td>
									<td>{this.state.userFoodCost}</td>
								</tr>
								<tr>
									<td>Entertainment</td>
									<td>
										{this.props.currency !== "BRL"
											? `$${this.state.usEntertainmentCost}`
											: `R$${this.state.brazilEntertainmentCost}`}
									</td>
									<td>{this.state.userEntertainmentCost}</td>
								</tr>
								<tr>
									<td>Transportation</td>
									<td>
										{this.props.currency !== "BRL"
											? `$${this.state.usTransportationCost}`
											: `R$${this.state.brazilTransportationCost}`}
									</td>
									<td>{this.state.userTransportationCost}</td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
			</>
		);
	}
}

export default CurrencyBox;
