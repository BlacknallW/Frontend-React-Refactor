import React from 'react';
import './Landing.css';
import BrazilFlag from './images/BrazilFlag.png';
import ParrotCamo from './images/animal-brazil-camouflage-57021.jpg';
import ArrailDoCabo from './images/arraildocabo.jpg';
import CachoeiraDoSerrado from './images/brazil-cachoeira-do-serrado-cliff-1068795.jpg'

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
                      <img src={ParrotCamo} className="imagecontent" alt="Brazil Parrot Camouflage"/>
                  </a>
                  <figcaption>
                      Camouflaged green parrot found in rainforest.
                  </figcaption>
              </figure>
              <br/>
            <h3>Quick Facts:</h3>
            <ul>
                <li>Brazil's currency is the Brazilian Real.</li>
                <li>The Baia do Sancho, one of Brazil's beaches, is considered to be the world's best beach.</li>
                <li>Enjoy a nice cup of joe? Brazil has been the world's largest exporter of coffee for more than 150 years!</li>
            </ul>
        <br/>
            <figure>
                <a href={ArrailDoCabo} target="_blank" rel="noopener noreferrer">
                    <img src={ArrailDoCabo} className="imagecontent" alt="Arrail Do Cabo" />
                </a>
                <figcaption>
                    Arrail Do Cabo Brazillian Coast
                </figcaption>
            </figure>
        <br/>
          <h3>Climate Information:</h3>
          <p>With Brazil being such a large country, it's climate varies considerably from north to south. That being said, 60% of it's land mass lies within a tropical climate, meaning some toasty temperatures and lots of rainfall year round.
          </p>
        <br/>
          <h3>What to Wear:</h3>
          <p>With Brazil's warm temperatures, you should definitely bring light clothes, both in color and fabric. In Brazil, when it rains it pours! So make sure to bring rainproof clothing and a few ponchos while you're at it. The sun is bright here, so make sure to pack at least one pair of shades and a wide-brimmed hat. Visiting the jungle or rainforest? It'd be a good idea to wear long cotton clothing to protect yourself from critter bites.</p>
        <br/>
          <figure>
            <a href={CachoeiraDoSerrado} target="_blank" rel="noreferrer noopener">
            <img src={CachoeiraDoSerrado} class="imagecontent" alt="Cachoeira Do Serrando Cliff"/>
            </a>
            <figcaption>Cachoeria Do Serrando Cliff</figcaption>
          </figure>
        <br/>
          <h3>Places to Go:</h3>
        <br/>
          <ol>
            <li><h4>Sao Paulo</h4></li>
            <p>If you're going to go to brazil, you have to go to Brazil's largest city, Sao Paulo. Not only is this the largest city in Brazil, but it is also the largest city in the world by population! This concrete jungle is known for its many skyscrapers, diverse cultures, and public parks. </p>
        <br/>
            <li><h4>Brasilia</h4></li>
            <p>As the country's capital, this city has many architectural wonders, such as the Three Power Square, home to the Presidential Palace, the Congress, and the Supreme Court. Make sure to stop by the Brasilia Cathedral before you leave!</p>
        <br/>
            <li><h4>Olinda</h4></li>
            <p>This one is for all you history buffs! Olinda is one of Brazil's colonial cities, and arguably the best-preserved. Take in the sights of Olinda's historic downtown with it's preserved churches, houses, resturaunts, and museums. You won't want to miss the town's unique Carnival celebration, which shows off the music, dances, and traditions of African culture!</p>
          </ol>
        <br/>
          <h3>Media:</h3>
          <iframe className="brazilvid" title="Introducing Brazil" src="https://www.youtube.com/embed/sW1SWAN6zlQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        <br/>
          <a href="#top"><button class="totop">Back to top</button></a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
