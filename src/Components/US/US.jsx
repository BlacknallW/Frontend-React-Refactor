import React from "react";
import Alaska from "./images/alaska.jpg";
import Florida from "./images/florida.jpg";
import LosAngeles from "./images/la.jpg";
import Hawaii from "./images/Hawaii.PNG";
import WashingtonDC from "./images/washingtonDC.jpeg";
import NewYork from "./images/newyork.jpg";
import SanDiego from "./images/sandiego.jpeg";
import LasVegas from "./images/la.jpg";

export default function USContent() {
  return (
    <React.Fragment>
      <nav>
        <div id="logo">NS Americas</div>
        <label for="drop" class="toggle">
          Menu
        </label>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <label for="drop-1" class="toggle">
              Brazil
            </label>
            <a
              href="https://www.usatoday.com/sports/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Sports
            </a>
          </li>
          <li>
            <label for="drop-2" class="toggle">
              Blog
            </label>
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
          <li class="search-box">
            <form
              action="https://www.google.com/search"
              autocomplete="off"
              name="searchform"
              method="get"
              target="_blank"
            >
              <input
                type="text"
                name="q"
                placeholder="       Search . . ."
                required
              />
              <button type="submit" hidden></button>
            </form>
          </li>
        </ul>
      </nav>

      <main class="body-content">
        <div class="main-content">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child">
                <figure>
                  <img id="Florida" src={Florida} alt="Florida" />
                  <figcaption>Florida</figcaption>
                </figure>
              </div>
              <div class="tile is-child">
                <figure>
                  <img id="NewYork" src={NewYork} alt="New York" />
                  <figcaption>New York</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child">
                <figure>
                  <img id="losangeles" src={LosAngeles} alt="Los Angeles" />
                  <figcaption>Los Angeles</figcaption>
                </figure>
              </div>
              <div class="tile is-child">
                <figure>
                  <img id="sandiego" src={SanDiego} alt="San Diego" />
                  <figcaption>San Diego</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child">
                <figure>
                  <img id="dc" src={WashingtonDC} alt="Washington D.C." />
                  <figcaption>Washington D.C.</figcaption>
                </figure>
              </div>
              <div class="tile is-child">
                <figure>
                  <img id="alaska" src={Alaska} alt="Alaska" />
                  <figcaption>Alaska</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child">
                <figure>
                  <img id="vegas" src={LasVegas} alt="Las Vegas" />
                  <figcaption>Las Vegas</figcaption>
                </figure>
              </div>
              <div class="tile is-child">
                <figure>
                  <img id="hawaii" src={Hawaii} alt="Hawaii" />
                  <figcaption>Hawaii</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
