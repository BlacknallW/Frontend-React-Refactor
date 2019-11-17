import React from "react";
import RioRedeemer from "./images/Christ-the-Redeemer-980x613.jpg";
import RioEscalera from "./images/Escalera coloridas-Selaron5-.jpeg";
import BahiaSalvador from "./images/salvador-brazil-postcard.webp";
import BahiaStreet from "./images/Bahia-street.jpg";
import FozDoIguacu from "./images/foz-iguazufalls.jpg";
import SaoPaulo from "./images/saopaulo.jpg"
import Brasilia from "./images/brasilia.jpg"
import Agronomica from "./images/agronomica.jpg"

export default function BrazilContent() {
	return (
		<React.Fragment>
			<nav className="breadcrumb is-centered" aria-label="breadcrumbs">
				<ul className="nav">
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
								className="imagecontent"
								src={RioRedeemer}
								alt="Rio De Janerio"
								id="Rio de Janerio"
							/>
							<figcaption>Rio De Janerio</figcaption>
						</figure>
					</div>
					<div className="tile is-child">
						<figure>
							<img
								className="imagecontent"
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
								className="imagecontent"
								src={BahiaSalvador}
								alt="Bahia"
								id="Bahia"
							/>
							<figcaption>Salvador</figcaption>
						</figure>
					</div>
					<div className="tile is-child">
						<figure>
							<img
								className="imagecontent"
								src={BahiaStreet}
								alt="Bahia City"
								id="Bahia City"
							/>
							<figcaption>Bahia City</figcaption>
						</figure>
					</div>
				</div>
			</div>
			<div className="tile is-ancestor">
				<div className="tile is-parent">
					<div className="tile is-child">
						<figure>
						<img
							className="imagecontent"
							src={FozDoIguacu}
							alt="Foz do Iguacu"
							id="Foz do Iguacu"
						/>
						<figcaption>Foz do Iguacu</figcaption>
						</figure>
					</div>
					<div className="tile is-child">
						<figure>
							<img
							className="imagecontent"
							src={SaoPaulo}
							alt = "Sao Paulo"
							id = "SaoPaulo"
							/>
							<figcaption>Sao Paulo</figcaption>
						</figure>
					</div>
				</div>
			</div>
			<div className="tile is-ancestor">
				<div className="tile is-parent">
					<div className="tile is-child">
						<figure>
							<img
							className="imagecontent"
							src={Brasilia}
							alt = "Brasilia"
							id = "Brasilia"
							/>
							<figcaption>Brasilia</figcaption>
						</figure>
					</div>
					<div className="tile is-child">
						<figure>
							<img
							className="imagecontent"
							src={Agronomica}
							alt="Agronomica"
							id = "Agronomica"
							/>
							<figcaption>Agronomica</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
