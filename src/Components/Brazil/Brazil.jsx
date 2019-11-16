import React from "react";
import RioRedeemer from "./images/Christ-the-Redeemer-980x613.jpg";
import RioEscalera from "./images/Escalera coloridas-Selaron5-.jpeg";
import BahiaSalvador from "./images/salvador-brazil-postcard.webp";
import BahiaStreet from "./images/Bahia-street.jpg";
import FozDoIguacu from "./images/foz-iguazufalls.jpg";

export default function BrazilContent() {
	return (
		<React.Fragment>
			<nav>
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
			<div className="flexbox">
				<main className="grid">
					<div className="image1" id="Rio de Janerio">
						<img
							className="image1img"
							src={RioRedeemer}
							alt="Rio De Janerio"
						/>
					</div>
					<div className="image2" id="Rio De Janerio">
						<img
							className="image2"
							src={RioEscalera}
							alt="Rio De Janerio"
						/>
					</div>
					<div className="image3" id="Bahia">
						<img
							className="image3"
							src={BahiaSalvador}
							alt="Bahia"
						/>
					</div>
					<div className="image4" id="Bahia City">
						<img
							className="image4"
							src={BahiaStreet}
							alt="Bahia City"
						/>
					</div>
					<div className="image5" id="Foz do Iguacu">
						<img
							className="image5"
							src={FozDoIguacu}
							alt="Foz do Iguacu"
						/>
					</div>
				</main>
					</div>
		</React.Fragment>
	);
}
