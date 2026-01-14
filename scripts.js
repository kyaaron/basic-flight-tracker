/*
Aviationstack Dashboard: https://aviationstack.com/dashboard
Aviationstack Documentation: https://docs.apilayer.com/aviationstack/docs/api-documentation

INSTRUCTIONS:
1. Clone the repository onto your local machine
2. Create an API key on the Aviationstack API website and place it on line 14
3. Open index.html in your browser
*/

const searchButton = document.querySelector("button");

const getFlightData = () => {
    fetch("https://api.aviationstack.com/v1/flights?access_key=INSERT_API_KEY_HERE")
        .then(res => res.json())
        .then(data => {
            const flightArr = data.data;
            document.querySelector("h2").innerText = `Flight Information`;
            flightArr.forEach((flight) => displayFlightData(flight));
        })
        .catch(err => {
            console.log(`API Error: ${err}`)
        });
}

const displayFlightData = flightObj => {
    const flightInfoContainer = document.querySelector(".flight-info-container");
  
    flightInfoContainer.innerHTML += `
        <article class="flight-info-card">
        <p>Flight: ${flightObj.airline.name} ${flightObj.flight.number}</p>
        <p>Departs: ${flightObj.departure.airport} at ${flightObj.departure.scheduled}</p>
        <p>Arrives: ${flightObj.arrival.airport} at ${flightObj.arrival.scheduled}</p>
        </article>
    `;
}

searchButton.addEventListener("click", getFlightData);
