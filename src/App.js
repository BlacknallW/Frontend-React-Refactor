/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bulma/css/bulma.css";
import Landing from "./Components/Landing/Landing.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Brazil from "./Components/Brazil/Brazil.js";
import US from "./Components/US/US.js";
import NSAmericasLogo from "./NSAmericas-logo-200x200.png";

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<nav
						className="navbar"
						role="navigation"
						aria-label="main navigation"
					>
						<div className="navbar-brand">
							<div className="navbar-item">
								<img src={NSAmericasLogo} alt="Logo" />
							</div>
							<a
								role="button"
								className="navbar-burger burger"
								aria-label="menu"
								aria-expanded="false"
								data-target="navbarBasicExample"
							>
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
							</a>
						</div>
						<div id="navbarBasicExample" className="navbar-menu">
							<div className="navbar-start">
								<Link to="/">
									<p className="navbar-item">Home</p>
								</Link>
								<Link to="/brazil">
									<p className="navbar-item">Brazil</p>
								</Link>
								<Link to="/us">
									<p className="navbar-item">US</p>
								</Link>
							</div>
						</div>
					</nav>
					<Switch>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route path="/brazil">
							<Brazil />
						</Route>
						<Route path="/us">
							<US />
						</Route>
					</Switch>
				</Router>
			</>
		);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll(".navbar-burger"),
		0
	);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach(el => {
			el.addEventListener("click", () => {
				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			});
		});
	}
});

export default App;
