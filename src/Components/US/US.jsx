import React from "react";
import Alaska from "./images/alaska.jpg";
import Florida from "./images/florida.jpg";
import LosAngeles from "./images/la.jpg";
import Hawaii from "./images/hawaii.jpg";
import WashingtonDC from "./images/WashingtonDC.jpg";
import NewYork from "./images/newyork.jpg";
import SanDiego from "./images/sandiego.jpg";
import LasVegas from "./images/lasvegas.jpg";
import Navigation from "../Navigation/Navigation";

export default class USContent extends React.Component {
	state = {
		location: "Florida"
	};

	handleImageClick = e => {
		e.preventDefault();
		this.setState({
			location: e.target.id
		});
	};

	render() {
		return (
			<React.Fragment>
				<nav
					className="breadcrumb is-centered"
					aria-label="breadcrumbs"
				>
					<ul>
						<li>
							<a
								href="https://www.usatoday.com/sports/"
								target="_blank"
								rel="noreferrer noopener"
							>
								Sports
							</a>
						</li>
						<li>
							<a
								href="https://www.americantravelblogger.com"
								target="_blank"
								rel="noreferrer noopener"
							>
								Blog
							</a>
						</li>
						<li>
							<a
								href="https://www.usnews.com"
								target="_blank"
								rel="noreferrer noopener"
							>
								News
							</a>
						</li>
						<li>
							<a
								href="https://www.huffpost.com/life/travel"
								target="_blank"
								rel="noreferrer noopener"
							>
								Posts
							</a>
						</li>
						<li className="search-box">
							<form
								action="https://www.google.com/search"
								autoComplete="off"
								name="searchform"
								method="get"
								target="_blank"
								className="form"
							>
								<input
									type="text"
									name="q"
									placeholder="Search . . ."
									required
									className="input is-rounded"
								/>
								<button type="submit" hidden></button>
							</form>
						</li>
					</ul>
				</nav>

				<main className="body-content us-background">
					<div className="tile is-ancestor">
						<div className="tile is-vertical is-8 section">
							<div className="tile is-parent">
								<div className="tile is-child">
									<figure>
										<img
											id="Florida"
											src={Florida}
											alt="Florida"
											className="imagecontent"
											onClick={e =>
												this.handleImageClick(e)
											}
										/>
										<figcaption className="subtitle">
											Florida
										</figcaption>
									</figure>
								</div>
								<div className="tile is-child">
									<figure>
										<img
											id="New York"
											src={NewYork}
											alt="New York"
											className="imagecontent"
											onClick={e =>
												this.handleImageClick(e)
											}
										/>
										<figcaption className="subtitle">
											New York
										</figcaption>
									</figure>
								</div>
							</div>

							<div className="tile is-ancestor">
								<div className="tile is-parent">
									<div className="tile is-child">
										<figure>
											<img
												className="imagecontent"
												id="Los Angeles"
												src={LosAngeles}
												alt="Los Angeles"
												onClick={e =>
													this.handleImageClick(e)
												}
											/>
											<figcaption className="subtitle">
												Los Angeles
											</figcaption>
										</figure>
									</div>
									<div className="tile is-child">
										<figure>
											<img
												className="imagecontent"
												id="San Diego"
												src={SanDiego}
												alt="San Diego"
												onClick={e =>
													this.handleImageClick(e)
												}
											/>
											<figcaption className="subtitle">
												San Diego
											</figcaption>
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
												id="District of Columbia"
												src={WashingtonDC}
												alt="Washington D.C."
												onClick={e =>
													this.handleImageClick(e)
												}
											/>
											<figcaption className="subtitle">
												Washington D.C.
											</figcaption>
										</figure>
									</div>
									<div className="tile is-child">
										<figure>
											<img
												className="imagecontent"
												id="Alaska"
												src={Alaska}
												alt="Alaska"
												onClick={e =>
													this.handleImageClick(e)
												}
											/>
											<figcaption className="subtitle">
												Alaska
											</figcaption>
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
												id="Las Vegas"
												src={LasVegas}
												alt="Las Vegas"
												onClick={e =>
													this.handleImageClick(e)
												}
											/>
											<figcaption className="subtitle">
												Las Vegas
											</figcaption>
										</figure>
									</div>
									<div className="tile is-child">
										<figure>
											<img
												className="imagecontent"
												id="Hawaii"
												src={Hawaii}
												alt="Hawaii"
												onClick={e =>
													this.handleImageClick(e)
												}
											/>
											<figcaption className="subtitle">
												Hawaii
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child">
								<div className="content section">
									<Navigation
										location={this.state.location}
										currency="USD"
									/>
								</div>
							</article>
						</div>
					</div>
				</main>
			</React.Fragment>
		);
	}
}
