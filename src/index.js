
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
const submitBttn = document.getElementById('submit');
const destinationInput = document.getElementById('destinationPicked');
const destinationStart = document.getElementById('startDate');
const destinationEnd = document.getElementById('endDate');
const travelersSelected = document.getElementById('numTravelers');

submitBttn.addEventListener('click', getFormInfo);

upcomingBttn.addEventListener('click', function() {
  showTripStatus(newTraveler.getUpcomingTrips(), upcomingBttn, newTraveler);
}); 
pendingBttn.addEventListener('click', function() {
  showTripStatus(newTraveler.getPendingTrips(), pendingBttn, newTraveler);
}); 
pastBttn.addEventListener('click', function() {
  showTripStatus(newTraveler.getPastTrips(), pastBttn, newTraveler);
}); 
presentBttn.addEventListener('click', function() {
  showTripStatus(newTraveler.getCurrentTrips(), presentBttn, newTraveler);
}); 

let newTraveler;

window.addEventListener('load', onStartup);


// take login username and use the last 2 numbers as the argument
function onStartup() {
  getAllApi(27) 
  .then(data => {
    newTraveler = new Traveler(data.singleTraveler, data.trips.trips, data.destinations.destinations);
    updateUsername(newTraveler.name);
    showTripStatus(newTraveler.getUpcomingTrips(), upcomingBttn, newTraveler);
    addDestinationChoices(data.destinations);
    addTravelerChoices();
  })
  .catch(err => err.message);
}


function showTripStatus(method, bttn, traveler) {
  if(method.includes('')){
    showMessage(method);
  } else {
    showTrips(method, traveler);
  }
  removeActiveClass();
  addActiveClass(bttn);
}

function getFormInfo() {
if(destinationStart.value && destinationEnd.value && travelersSelected.value && destinationInput.value){
  event.preventDefault();
}
  makePostRequest(newTraveler.id, findDestinationInfo(destinationInput.value), changeStartDateFormat(destinationStart.value), calculateTripDuration(destinationStart.value, destinationEnd.value), travelersSelected.value);
}

function calculateTripDuration(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const differenceInDays = endDate.getTime() - startDate.getTime();
  const tripDays = differenceInDays / (1000 * 60 * 60 * 24);
  return tripDays;
}

function findDestinationInfo(requestedDestination) {
  const destinationRequestId = newTraveler.trips.destinations.find(destination => requestedDestination === destination.destination);
  return destinationRequestId.id;
}

function changeStartDateFormat(date) {
  const updatedFormat = date.replaceAll('-', '/');
  console.log(updatedFormat);
  return updatedFormat;
}

function makePostRequest(travelerId, id, startDate, duration, travelers) {
  console.log(startDate)
  fetch('http://localhost:3001/api/v1/trips',{
    method: 'POST',
    body: JSON.stringify({
      id: Date.now(),
      userID: travelerId,
      destinationID: id, 
      travelers: travelers,
      date: `${startDate}`,
      duration: duration,
      status: 'pending',
      suggestedActivities: [],
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => console.log(data));
}





