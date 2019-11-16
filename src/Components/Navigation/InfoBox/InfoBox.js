import React from "react";
import "./InfoBox.css";

class InfoBox extends React.Component {
	render() {
		return (
			<>
				<div className="categories list is-hoverable">
					<p
						className="list-item is-active has-text-centered"
						id="city"
					>
						Home
					</p>
					<a
						id="attractions"
						target="_blank"
						rel="noreferrer noopener"
						className="list-item"
					>
						Attractions
					</a>
					<a
						id="link"
						target="_blank"
						rel="noreferrer noopener"
						className="list-item"
					>
						Adventures
					</a>
					<a
						id="shop"
						target="_blank"
						rel="noreferrer noopener"
						className="list-item"
					>
						Shopping
					</a>
					<a
						id="restaurant"
						target="_blank"
						rel="noreferrer noopener"
						className="list-item"
					>
						Restaurant
					</a>
					<a
						id="stay"
						target="_blank"
						rel="noreferrer noopener"
						className="list-item"
					>
						Accomodation
					</a>
				</div>
			</>
		);
	}
}

export default InfoBox;
