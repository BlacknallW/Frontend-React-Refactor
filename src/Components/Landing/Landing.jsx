import React from "react";
import BrazilFlag from "./images/BrazilFlag.png";
import ParrotCamo from "./images/animal-brazil-camouflage-57021.jpg";
import ArrailDoCabo from "./images/arraildocabo.jpg";
import CachoeiraDoSerrado from "./images/brazil-cachoeira-do-serrado-cliff-1068795.jpg";
import USFlag from "./images/americanflag.jpg";
import BayBridge from "./images/bay-bridge-connection-2872915.jpg";
import KeyWest from "./images/atlantic-ocean-beach-blue-sky-2785216.jpg";
import NewYork from "./images/buildings-city-city-view-597909.jpg";

export default function LandingContent() {
    return (
        <React.Fragment>
            <div className="introduction-container hero is-dark">
                <h2 className="title hero-body">Welcome to NSAmericas! Where would you like to go?</h2>
            </div>
            <main className="tile is-ancestor section">
            <div className="brazil-container section tile is-parent">
                <div className="brazil-content box tile is-child">
                    <img src={BrazilFlag} className="image" alt="Brazil Flag" />
                    <a href="Brazil.html">
                        <h1 className="title">Brazil</h1>
                    </a>
                    <p>
                        With its fun and festive vibe, Brazil has much to see
                        and much more to do. Visit the booming tourism hubs of
                        Rio de Janeiro and São Paulo. Travel through the dense
                        greenery of the Amazon Jungle, or swim in one of the
                        many beautiful beaches and bays that line the coast.
                    </p>
                    <br />
                    <figure>
                        <a
                            href={ParrotCamo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={ParrotCamo}
                                className="imagecontent"
                                alt="Brazil Parrot Camouflage"
                            />
                        </a>
                        <figcaption>
                            Camouflaged green parrot found in rainforest.
                        </figcaption>
                    </figure>
                    <br />
                    <h3 className="subtitle">Quick Facts:</h3>
                    <ul>
                        <li>Brazil's currency is the Brazilian Real.</li>
                        <li>
                            The Baia do Sancho, one of Brazil's beaches, is
                            considered to be the world's best beach.
                        </li>
                        <li>
                            Enjoy a nice cup of joe? Brazil has been the world's
                            largest exporter of coffee for more than 150 years!
                        </li>
                    </ul>
                    <br />
                    <figure>
                        <a
                            href={ArrailDoCabo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={ArrailDoCabo}
                                className="imagecontent"
                                alt="Arrail Do Cabo"
                            />
                        </a>
                        <figcaption>Arrail Do Cabo Brazillian Coast</figcaption>
                    </figure>
                    <br />
                    <h3 className="subtitle">Climate Information:</h3>
                    <p>
                        With Brazil being such a large country, it's climate
                        varies considerably from north to south. That being
                        said, 60% of it's land mass lies within a tropical
                        climate, meaning some toasty temperatures and lots of
                        rainfall year round.
                    </p>
                    <br />
                    <h3 className="subtitle">What to Wear:</h3>
                    <p>
                        With Brazil's warm temperatures, you should definitely
                        bring light clothes, both in color and fabric. In
                        Brazil, when it rains it pours! So make sure to bring
                        rainproof clothing and a few ponchos while you're at it.
                        The sun is bright here, so make sure to pack at least
                        one pair of shades and a wide-brimmed hat. Visiting the
                        jungle or rainforest? It'd be a good idea to wear long
                        cotton clothing to protect yourself from critter bites.
                    </p>
                    <br />
                    <figure>
                        <a
                            href={CachoeiraDoSerrado}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img
                                src={CachoeiraDoSerrado}
                                className="imagecontent"
                                alt="Cachoeira Do Serrando Cliff"
                            />
                        </a>
                        <figcaption>Cachoeria Do Serrando Cliff</figcaption>
                    </figure>
                    <br />
                    <h3 className="subtitle">Places to Go:</h3>
                    <br />
                    <ol>
                        <li>
                            <h4>Sao Paulo</h4>
                        </li>
                        <p>
                            If you're going to go to brazil, you have to go to
                            Brazil's largest city, Sao Paulo. Not only is this
                            the largest city in Brazil, but it is also the
                            largest city in the world by population! This
                            concrete jungle is known for its many skyscrapers,
                            diverse cultures, and public parks.{" "}
                        </p>
                        <br />
                        <li>
                            <h4>Brasilia</h4>
                        </li>
                        <p>
                            As the country's capital, this city has many
                            architectural wonders, such as the Three Power
                            Square, home to the Presidential Palace, the
                            Congress, and the Supreme Court. Make sure to stop
                            by the Brasilia Cathedral before you leave!
                        </p>
                        <br />
                        <li>
                            <h4>Olinda</h4>
                        </li>
                        <p>
                            This one is for all you history buffs! Olinda is one
                            of Brazil's colonial cities, and arguably the
                            best-preserved. Take in the sights of Olinda's
                            historic downtown with it's preserved churches,
                            houses, resturaunts, and museums. You won't want to
                            miss the town's unique Carnival celebration, which
                            shows off the music, dances, and traditions of
                            African culture!
                        </p>
                    </ol>
                    <br />
                    <h3 className="subtitle">Media:</h3>
                    <iframe
                        className="brazilvid"
                        title="Introducing Brazil"
                        src="https://www.youtube.com/embed/sW1SWAN6zlQ"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                    <br />
                    <a href="#top">
                        <button className="totop button">Back to top</button>
                    </a>
                </div>
            </div>
            <div className="united-states-container tile is-parent">
                <div className="united-states-content tile is-child box">
                    <img src={USFlag} className="image" alt="US Flag" />
                    <a href="US.html">
                        <h1 className="title">The United States</h1>
                    </a>
                    <p>
                        Land of the Free and Home of the Brave, the United
                        States is home to a whole host of must-see tourism
                        spots. Go to great locations like New York City, Los
                        Angeles, and Washington D.C.!
                    </p>
                    <br />
                    <figure>
                        <a
                            href={BayBridge}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img
                                src={BayBridge}
                                className="imagecontent"
                                alt="Golden Gate Bridge"
                                rel="noreferrer noopener"
                            />
                        </a>
                        <figcaption>
                            Golden Gate Bridge - San Francisco
                        </figcaption>
                    </figure>
                    <br />
                    <h3 className="subtitle">Quick Facts:</h3>
                    <ul>
                        <li>The United States currency is the U.S. Dollar.</li>
                        <li>
                            Are you a fake Italian? Good news! 100 acres of
                            pizza are served in the United States every day!
                        </li>
                        <li>
                            Being a cultural melting pot, the United States
                            actually has no official language recognized
                            federally.
                        </li>
                    </ul>
                    <br />
                    <figure>
                        <a
                            href={KeyWest}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img
                                src={KeyWest}
                                className="imagecontent"
                                alt="Key West Sandy Beach"
                            />
                        </a>
                        <figcaption>Sandy Beach - Key West</figcaption>
                    </figure>
                    <br />
                    <h3 className="subtitle">Climate Information:</h3>
                    <p>
                        Considering the size of the US, it's no surprise that
                        it's home to a wide range of climates depending on where
                        you visit. In general, the winters are cold and the
                        summers are hot, but there are a few extremes and
                        exceptions. For instance, Florida, the nation's
                        southernmost state off the coast, has more of a tropical
                        climate.
                    </p>
                    <br />
                    <h3 className="subtitle">What to Wear:</h3>
                    <p>
                        You may actually want to bring a wide variety of
                        clothing to tour across America. Generally, in the
                        Summer, you'll want to bring short sleeves, shorts, and
                        maybe a wide-brimmed hat or two to block out the sun. In
                        states like Texas and California, temperatures can reach
                        over 100 degrees fahrenheit! While most stays relatively
                        cool during the Winter, northern states such as New York
                        and Michigan may get several inches of snow and even
                        experience blizzards. Make sure you bring your winter
                        jacket!
                    </p>
                    <br />
                    <figure>
                        <a
                            href={NewYork}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img
                                src={NewYork}
                                className="imagecontent"
                                alt="New York Cityscape"
                            />
                        </a>
                        <figcaption>New York Cityscape</figcaption>
                    </figure>
                    <br />
                    <ol>
                        <li>
                            <h4>Walt Disney World in Orlando</h4>
                        </li>
                        <p>
                            Unless you've been living under a rock, you've
                            definitely heard of the Magic Kingdom!
                            Interestingly, the Magic Kingdom is only one theme
                            park in the multitude of parks available to visit at
                            Disney World! These parks include Epcot, Hollywood
                            Studios, Animal Kingdom, and the Blizzard Beach
                            Water Park. It would be a crime to visit the US and
                            not go to the Happiest Place on Earth!
                        </p>
                        <br />
                        <li>
                            <h4>White House in Washington DC</h4>
                        </li>
                        <p>
                            In the capital of the U.S. lies one of the most
                            important structures in the country; The White
                            House! This building is both the residence and
                            office of the President of the United States. You
                            will also find museums and memorials nearby, such as
                            the Washington, Lincoln, and Martin Luther King Jr.
                            Memorials.
                        </p>
                        <br />
                        <li>
                            <h4>Las Vegas Strip</h4>
                        </li>
                        <p>
                            Have a bit of change in your pocket and a budding
                            crippling gambling addiction? Then Las Vegas is the
                            place to be! This bustling strip is located in Last
                            Vegas, Nevada, as the name would suggest. Remember:
                            What Happens in Vegas, Stays in Vegas.
                        </p>
                    </ol>
                    <br />
                    <h3 className="subtitle">Media:</h3>
                    <iframe
                        className="usvid"
                        src="https://www.youtube.com/embed/98H5AN_vfOY"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="US Top 10 Tourist Attractions"
                    ></iframe>
                    <br />
                    <a href="#top">
                        <button className="totop button">Back to top</button>
                    </a>
                </div>
            </div>
            </main>
        </React.Fragment>
    );
}
