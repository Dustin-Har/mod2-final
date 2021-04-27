const upcomingBttn = document.getElementById('upcomingTrips');
const pendingBttn = document.getElementById('pendingTrips');
const pastBttn = document.getElementById('pastTrips');
const presentBttn = document.getElementById('presentTrips');
const destinationOptions = document.getElementById('whereTo');
const travelerSelector = document.getElementById('numTravelers');


updateUsername = (name) => {
  userName.innerText = `${name}`;
}

showTrips = (travelerTrips, traveler) => {
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
        <div class="price-box">
          <span>TRIP PRICE</span>
          <span>$${traveler.trips.calculateTripPrice(trip)}</span>
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

removeActiveClass = () => {
  const tabsArray = [upcomingBttn, pendingBttn, pastBttn, presentBttn];
  tabsArray.forEach(tab => tab.classList.remove('active'));
}

addActiveClass = (tab) => {
  tab.classList.add('active');
}

addDestinationChoices = (destinationsObj) => {
  let destinationList = ""
  destinationsObj.destinations.forEach(destination => destinationList += `<option value="${destination.destination}"/>`);
  destinationOptions.innerHTML = destinationList;
};

addTravelerChoices = () => {
  const numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  numberList.forEach(num => travelerSelector.insertAdjacentHTML('beforeend', `<option value="${num}">${num}</option>`));
}

