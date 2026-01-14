const searchButton = document.querySelector("button");

const getFlightData = () => {
    fetch("https://api.aviationstack.com/v1/flights?access_key=d654dcd0fa36e50d5cc8cf6d184b0d3b")
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