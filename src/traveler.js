import Trips from './trips'
export default class Traveler {
  constructor(travelerInfo, tripInfo, destinationInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.type = travelerInfo.travelerType;
    this.trips = new Trips(tripInfo);
    this.destinations = destinationInfo;
    this.init();
  }

  init() {
    this.trips.setDestinations(this.id, this.destinations);
  }
  
  getTripInfo() {
    return this.trips.getTripInfo();
  }
  
  getTotalTripsCost() {
    return this.trips.getTotalCost() 
  } 
}