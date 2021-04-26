
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

upcomingBttn.addEventListener('click', function() {
  showTripStatus(newTraveler.getUpcomingTrips(), upcomingBttn);
}); 
pendingBttn.addEventListener('click', function() {
  showTripStatus(newTraveler.getPendingTrips(), pendingBttn);
}); 
pastBttn.addEventListener('click', function() {
  showTripStatus(newTraveler.getPastTrips(), pastBttn);
}); 
presentBttn.addEventListener('click', function() {
  showTripStatus(newTraveler.getCurrentTrips(), presentBttn);
}); 

let newTraveler;

window.addEventListener('load', onStartup);

function onStartup() {
  getAllApi(10) 
  .then(data => {
    newTraveler = new Traveler(data.singleTraveler, data.trips.trips, data.destinations.destinations);
    updateUsername(newTraveler.name);
    showTripStatus(newTraveler.getUpcomingTrips(), upcomingBttn);
    addDestinationChoices(data.destinations);
    addTravelerChoices();
  })
  .catch(err => err.message);
}


function showTripStatus(method, bttn) {
  if(method.includes('')){
    showMessage(method);
  } else {
    showTrips(method);
  }
  removeActiveClass();
  addActiveClass(bttn);
}





