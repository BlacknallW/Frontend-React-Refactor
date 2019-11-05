import React from 'react';
import './Landing.css';
import BrazilFlag from './images/BrazilFlag.png'
import ParrotCamo from './images/animal-brazil-camouflage-57021.jpg'
import ArrailDoCabo from './images/arraildocabo.jpg'

function App() {
  return (
    <React.Fragment>
      <div className="introduction-container">
        <h2>Welcome to NSAmericas! Where would you like to go?</h2>
      </div>
      <div className="brazil-container">
        <div className="brazil-content">
          <img src={BrazilFlag} className="image" alt="Brazil Flag"/>
              <a href="Brazil.html"><h1>Brazil</h1></a>
              <p>With its fun and festive vibe, Brazil has much to see and much more to do. Visit the booming tourism hubs of Rio de Janeiro and São Paulo. Travel through the dense greenery of the Amazon Jungle, or swim in one of the many beautiful beaches and bays that line the coast.</p>
            <br/>
              <figure>
                <a href={ParrotCamo} target="_blank" rel="noopener noreferrer">
                      <img src={ParrotCamo} class="imagecontent" alt="Brazil Parrot Camouflage"/>
                  </a>
                  <figcaption>
                      Camouflaged green parrot found in rainforest.
                  </figcaption>
              </figure>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
