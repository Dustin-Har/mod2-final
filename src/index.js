
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
pendingBttn.addEventListener('click', showpending);
pastBttn.addEventListener('click', showPast);
presentBttn.addEventListener('click', showCurrent);

let newTraveler;

window.addEventListener('load', onStartup);

function onStartup() {
  getAllApi(6) 
  .then(data => {
    newTraveler = new Traveler(data.singleTraveler, data.trips.trips, data.destinations.destinations);
    // console.log(newTraveler.trips.tripsArray);
    updateUsername(newTraveler.name);
    // console.log(newTraveler.getUpcomingTrips())
    showUpcoming(newTraveler.getUpcomingTrips());
  })
  .catch(err => err.message);
}
// console.log(newTraveler)

function showUpcoming() {
  if(newTraveler.getUpcomingTrips().includes('')){
    console.log(newTraveler.getUpcomingTrips().includes(''))
    showMessage(newTraveler.getUpcomingTrips());
    } else {
      showTrips(newTraveler.getUpcomingTrips());
    }
}

function showpending() {
  if(newTraveler.getPendingTrips().includes('')){
    showMessage(newTraveler.getPendingTrips());
  } else {
    showTrips(newTraveler.getPendingTrips())
  }
}

function showPast() {
  if(newTraveler.getPastTrips().includes('')){
    showMessage(newTraveler.getPastTrips());
  } else {
    showTrips(newTraveler.getPastTrips())
  }
}

function showCurrent () {
  if(newTraveler.getCurrentTrips().includes('')){
    showMessage(newTraveler.getCurrentTrips());
  } else {
    showTrips(newTraveler.getCurrentTrips())
  }
}




