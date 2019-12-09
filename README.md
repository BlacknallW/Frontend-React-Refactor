# NSAmericas Travel Website

The functionality of this website is pretty simple, done entirely in ReactJS with BulmaCSS for styling. On the welcome page, you can read up on different information about Brazil and the US, and some places a tourist might want to visit.

## API Calls

### OpenWeatherMap
This project uses the OpenWeatherMap 5-day 3-hour forecast API to get weather data from the various locations pictured throughout the site. What's odd about this particular API, is that the weather data is given in increments of 3 hours, instead of just offering the daily forecast for each day. So, when you actually get the weather data from the NSAmericas website, what you're actually seeing is the projected forecast throughout the week from exact time you called the data. For example, it is currently 11:34PM. I can see the current weather for New York, but the forecasted weather for Monday is actually telling you the forecasted weather for 11:34PM Monday, then 11:34PM Tuesday, and so on. It's kind of funky, but it works.

### ExchangeRatesAPI
This is the api used to do the currency conversions on both country's pages. It's a pretty straightforward API, which is a blessing compared to the weather API. All of the calculations had to be done "manually", but even that was as simple as multiplying the user's currency by the currency of the country they were attempting to go to, in addition to the calculations multiplying the number of guests and nights and adding them back into the final sum. The hardest part, having refactored this project into ReactJS, was setting up ternaries to determine if the api should be using USD or BRL, as the currency exchange api is its own component. This was ultimately solved by just setting the props of the component to "USD" on the US page, and "BRL" on the Brazil page, which was then passed as a parameter in the api call.

## Why the Refactor?
Mostly to see if I could. At the time, ReactJS was fairly new to me (and still is). My first attempt with refactoring this project involved cramming every ounce of the JSX into App.js and patting myself on the back. Obviously, that didn't work. Then I tried to load all of the api functionality in the separate Brazil.js and US.js files, which also didn't work, and actually just made more work for me when I could have just used props. It wasn't until I finally starting making everything its own component that the wheels actually started turning again.

That being said, one of the biggest issues I had with the previous iteration of this project was the styling. Version 1.0 (I guess) was done entirely in native HTML, CSS, and JQuery. I used CSS Grid for my portion of the project (home page and side panel), but when attempting to merge the CSS I wrote for the side panel with the CSS my other team members used, it basically destroyed the structure of the grid I created. Ultimately it ended up with broken lines and awkward spacing in the panel. This time, the styling is done almost entirely through BulmaCSS, which I have come to love, despite not being a huge fan of its namesake. I'd definitely say it looks better, though the page-spanning background images might look a bit tacky.
