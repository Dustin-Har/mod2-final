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
    const filteredPast = pastTrips.sort((a, b) => new Date(a.date) - new Date(b.date))
    if(filteredPast.length){
      return filteredPast;   
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
    const filteredPending = pendingTrips.sort((a, b) => new Date(a.date) - new Date(b.date))
    if(filteredPending.length) {
      return filteredPending;
    }
    return 'No trips are pending!';
  }

  getUpcomingTrips() {
    const today = new Date();
    const upcomingTrips = this.trips.tripsArray.filter(trip => {
      const tripDate = new Date(trip.date);
      if(today < tripDate) {
        return trip;
      }
    })
    const filteredUpcoming = upcomingTrips.sort((a, b) => new Date(b.date) - new Date(a.date))
    if(filteredUpcoming.length){
      return filteredUpcoming;
    }
    return 'You have no upcoming trips, Schedule a new trip above';
  }
  
  getTripInfo () {
    return this.trips.getTrips();
  }
  
  getTotalTripCostForYear() {
    const today = new Date();
    let lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    const totalYearCost = this.trips.tripsArray.reduce((total, trip) => {
      const tripDate = new Date(trip.date);
      if(tripDate < today && tripDate > lastYear) {
        return total + (this.trips.calculateTripPrice(trip));
      }
      return total;
    },0);
    return totalYearCost;
  }
}