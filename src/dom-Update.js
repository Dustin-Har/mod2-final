
updateUsername = (name) => {
  userName.innerText = `${name}`;
}

showTrips = (travelerTrips) => {
  console.log(travelerTrips);
  flightsBox.innerHTML = '';
  travelerTrips.forEach(trip => {
    flightsBox.innerHTML += `
      <div class="flight-box" id="flightBox" style="background-image: url('${trip.destinationInfo.image}');">
        <div class="destination-box">
          <span>DESTINATION</span>
          <span>${trip.destinationInfo.destination}</span>
        </div>
        <div class="departure-box">
          <span>DEPARTURE</span>
          <span>${trip.date} for ${trip.duration} days</span>
        </div>
        <div class="travelers-box">
          <span>TRAVELERS</span>
          <span>${trip.travelers}</span>
        </div>
        <div class="status-box">
          <span>STATUS</span>
          <span>${trip.status}</span>
        </div>
      </div>`
      flightsBox.style.backgroundImage=`url(${trip.destinationInfo.image})`;
  })
}

showMessage = (travelerTrips) => {
  flightsBox.innerHTML = "";
  flightsBox.innerHTML = `
    <div class="message-box">
      <h1>${travelerTrips}</h1>
    </div>`
}