import React from "react";
import RioRedeemer from "./images/Christ-the-Redeemer-980x613.jpg";
import RioEscalera from "./images/Escalera coloridas-Selaron5-.jpeg";
import BahiaSalvador from "./images/salvador-brazil-postcard.webp";
import BahiaStreet from "./images/Bahia-street.jpg";
import FozDoIguacu from "./images/foz-iguazufalls.jpg";

export default function BrazilContent() {
	return (
		<React.Fragment>
			<nav className="breadcrumb is-centered" aria-label="breadcrumbs">
				<ul className="nav">
					<li>
						<a href="index.html">Home</a>
					</li>
					<li>
						<a
							href="https://www.lonelyplanet.com/brazil/rio-de-janeiro"
							target="_blank"
							rel="noreferrer noopener"
						>
							Rio De Janerio
						</a>
					</li>
					<li>
						<a
							href="https://www.lonelyplanet.com/brazil/bahia"
							target="_blank"
							rel="noreferrer noopener"
						>
							{" "}
							Bahia
						</a>
					</li>
					<li>
						<a
							href="https://www.lonelyplanet.com/brazil/the-south/foz-do-iguacu"
							target="_blank"
							rel="noreferrer noopener"
						>
							Foz do Iguacu
						</a>
					</li>
					<li>
						<a
							href="https://www.chimuadventures.com/blog/2016/10/culture-and-customs-of-brazil/"
							target="_blank"
							rel="noreferrer noopener"
						>
							Culture
						</a>
					</li>

					<li>
						<a
							href="https://brazilian.report/"
							target="_blank"
							rel="noreferrer noopener"
						>
							The Brazilian Report
						</a>
					</li>
				</ul>
			</nav>
			<div className="tile is-ancestor ">
				<div className="tile is-parent">
					<div className="tile is-child">
						<figure>
							<img
								className="image1img"
								src={RioRedeemer}
								alt="Rio De Janerio"
								id="Rio de Janerio"
							/>
						</figure>
					</div>
					<div className="tile is-child">
						<figure>
							<img
								className="image2"
								src={RioEscalera}
								alt="Rio De Janerio"
								id="Rio De Janerio"
							/>
						</figure>
					</div>
				</div>
			</div>
			<div className="tile is-ancestor">
				<div className="tile is-parent">
					<div className="tile is-child">
						<figure>
							<img
								className="image3"
								src={BahiaSalvador}
								alt="Bahia"
								id="Bahia"
							/>
						</figure>
					</div>
					<div className="tile is-child">
						<figure>
							<img
								className="image4"
								src={BahiaStreet}
								alt="Bahia City"
								id="Bahia City"
							/>
						</figure>
					</div>
				</div>
			</div>
			<div className="tile is-ancestor">
				<div className="tile is-parent">
					<div className="tile is-child">
						<figure>
						<img
							className="image5"
							src={FozDoIguacu}
							alt="Foz do Iguacu"
							id="Foz do Iguacu"
						/>
						</figure>
					</div>
					<div className="tile is-child">
						<figure>
							<img />
						</figure>
					</div>
				</div>
			</div>
			<div className="tile is-ancestor">
				<div className="tile is-parent">
					<div className="tile is-child">
						<figure>
							<img />
						</figure>
					</div>
					<div className="tile is-child">
						<figure>
							<img />
						</figure>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
