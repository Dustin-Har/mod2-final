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
  
  getTripInfo() {
    return this.trips.getTripInfo();
  }
  
  getTotalTripCost() {
    const totalTripCost = this.trips.tripsArray.reduce((total, trip) => total + (this.trips.calculateTripPrice(trip)),0);
    return totalTripCost;
  }
}