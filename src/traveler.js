import Trips from './trips'
export default class Traveler {
  constructor(travelerInfo, tripInfo, destinationInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.type = travelerInfo.travelerType;
    this.trips = new Trips(tripInfo, destinationInfo);
    this.init();
  }

  init() {
    this.trips.setDestinations(this.id);
  }

  getPastTrips() {
    const today = new Date();
    const pastTrips = this.trips.tripsArray.filter(trip => {
      const tripDate = new Date(trip.date);
      if(today > tripDate) {
        return trip;
      }
    })
    if(pastTrips.length){
      return pastTrips;   
    } 
    return 'You have no Past trips!';
  }

  getCurrentTrips() {
    const today = new Date();
    const currentTrips = this.trips.tripsArray.filter(trip => {
      const tripDate = new Date(trip.date);
      if(today === tripDate) {
        return trip;
      }
    })
    if(currentTrips.length){
      return currentTrips;
    }
    return 'You are not on any trips right now';
  }

  getPendingTrips() {
    const pendingTrips = this.trips.tripsArray.filter(trip => trip.status === "pending");
    if(pendingTrips.length) {
      return pendingTrips;
    }
    return 'No trips are pending!';
  }

  getUpcomingTrips() {
    const today = new Date();
    const UpcomingTrips = this.trips.tripsArray.filter(trip => {
      const tripDate = new Date(trip.date);
      if(today < tripDate) {
        return trip;
      }
    })
    if(UpcomingTrips.length){
      return UpcomingTrips;
    }
    return 'You have no upcoming trips, Schedule a new trip above';
  }
  
  getTripInfo () {
    return this.trips.getTrips();
  }
  
  getTotalTripCost() {
    const totalTripCost = this.trips.tripsArray.reduce((total, trip) => total + (this.trips.calculateTripPrice(trip)),0);
    return totalTripCost;
  }
}