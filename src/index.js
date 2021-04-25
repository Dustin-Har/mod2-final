
import './css/base.scss';
import './dom-Update';

import {getTravelers, getSingleTraveler, getTrips, getDestinations, getAllApi} from './apiData/getData';
import Traveler from './traveler';

const userName = document.getElementById('userName');
const flightsBox = document.getElementById('flightsBox');
const upcomingBttn = document.getElementById('upcomingTrips');
const pendingBttn = document.getElementById('pendingTrips');
const pastBttn = document.getElementById('pastTrips');
const presentBttn = document.getElementById('presentTrips');

upcomingBttn.addEventListener('click', showUpcoming);
// pendingBttn.addEventListener('click', showpending);
// pastBttn.addEventListener('click', showPast);
// presentBttn.addEventListener('click', showPresent);


getAllApi(49)
  .then(data => {
    const newTraveler = new Traveler(data.singleTraveler, data.trips.trips, data.destinations.destinations);
    console.log(newTraveler.trips.tripsArray);
    updateUsername(newTraveler.name);
    showUpcoming(newTraveler);
  })
  .catch(err => err.message);
  

