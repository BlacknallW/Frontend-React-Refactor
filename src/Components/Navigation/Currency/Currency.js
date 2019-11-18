import React from "react";
import "./Currency.css";
import currencyexchange from "../../../API/currencyexchange";

class CurrencyBox extends React.Component {
	state = {
		currency: this.props.currency
	};

	componentDidMount = async currency => {
		const res = await currencyexchange.get("/latest", {
			params: {
				base: "USD",
				symbols: this.state.currency
			}
		});
		console.log(res.data.rates);
	};

	onCurrencySubmit = e => {
		e.preventDefault();
	}

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
							/>
							<label className="nights label">Nights:</label>
							<input
								type="number"
								step="1"
								className="nights-number input"
								min="1"
								id="nightsNumber"
							/>
						</div>
						<div className="currency-input-column control">
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
							className="calculate input button is-dark"
							onClick={this.onCurrencySubmit}
						/>
						<table className="table is-bordered is-hoverable is-fullwidth">
							<thead>
								<tr>
									<th>Description</th>
									<th>Avg Cost {this.props.currency}</th>
		<th>Avg Cost {document.getElementById('currencyInput')}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Hotel</td>
									<td>$150</td>
									<td></td>
								</tr>
								<tr>
									<td>Food</td>
									<td>$82</td>
									<td></td>
								</tr>
								<tr>
									<td>Entertainment</td>
									<td>$150</td>
									<td></td>
								</tr>
								<tr>
									<td>Transportation</td>
									<td>$1060</td>
									<td></td>
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
