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
    // console.log('in traveler class',this.trips.tripsArray)
  }
  
  getTripInfo() {
    return this.trips.getTripInfo();
  }
  
  getTotalTripsCost() {
    return this.trips.getTotalCost() 
  } 
}