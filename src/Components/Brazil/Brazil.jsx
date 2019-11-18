import React from "react";
import RioRedeemer from "./images/riodejaneiro.jpg";
import Centro from "./images/centrobrazil.jpg";
import BahiaSalvador from "./images/salvador-brazil-postcard.webp";
import BahiaStreet from "./images/bahiacity.jpg";
import FozDoIguacu from "./images/foz-iguazufalls.jpg";
import SaoPaulo from "./images/saopaulo.jpg";
import Brasilia from "./images/brasilia.jpg";
import Agronomica from "./images/agronomica.jpg";
import Navigation from "../Navigation/Navigation";

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
			<main className="brazil-background">
				<div className="tile is-ancestor">
					<div className="tile is-vertical is-8">
						<div className="tile is-parent">
							<article className="tile is-child">
								<div className="content">
									<figure>
										<img
											className="imagecontent"
											src={Agronomica}
											alt="Agronomica"
											id="Agronomica"
										/>
										<figcaption className="subtitle">
											Agronomica
										</figcaption>
									</figure>
								</div>
							</article>
							<article className="tile is-child">
								<figure>
									<img
										className="imagecontent"
										src={SaoPaulo}
										alt="Sao Paulo"
										id="SaoPaulo"
									/>
									<figcaption className="subtitle">
										Sao Paulo
									</figcaption>
								</figure>
							</article>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child">
								<div className="content">
									<figure>
										<img
											className="imagecontent"
											src={Brasilia}
											alt="Brasilia"
											id="Brasilia"
										/>
										<figcaption className="subtitle">
											Brasilia
										</figcaption>
									</figure>
								</div>
							</article>
							<article className="tile is-child">
								<div className="content">
									<figure>
										<img
											className="imagecontent"
											src={FozDoIguacu}
											alt="Foz do Iguacu"
											id="Foz do Iguacu"
										/>
										<figcaption className="subtitle">
											Foz do Iguacu
										</figcaption>
									</figure>
								</div>
							</article>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child">
								<figure>
									<img
										className="imagecontent"
										src={RioRedeemer}
										alt="Rio De Janerio"
										id="Rio de Janerio"
									/>
									<figcaption className="subtitle">
										Rio De Janerio
									</figcaption>
								</figure>
							</article>
							<article className="tile is-child">
								<figure>
									<img
										className="imagecontent"
										src={Centro}
										alt="Centro"
										id="Centro"
									/>
									<figcaption className="subtitle">
										Centro
									</figcaption>
								</figure>
							</article>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child">
								<figure>
									<img
										className="imagecontent"
										src={BahiaSalvador}
										alt="Bahia"
										id="Bahia"
									/>
									<figcaption className="subtitle">
										Salvador
									</figcaption>
								</figure>
							</article>
							<article className="tile is-child">
								<figure>
									<img
										className="imagecontent"
										src={BahiaStreet}
										alt="Bahia City"
										id="Bahia City"
									/>
									<figcaption className="subtitle">
										Bahia City
									</figcaption>
								</figure>
							</article>
						</div>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child">
							<div className="content">
								<Navigation location="Brazil" currency="BRL"/>
							</div>
						</article>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
}
