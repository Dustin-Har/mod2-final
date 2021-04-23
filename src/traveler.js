class Traveler {
  constructor(travelerInfo, tripInfo, destinationInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.type = travelerInfo.travelerType;
    this.trips = new TripData(tripInfo);
    this.destination = destinationInfo;
    this.init();
  }

  init() {
    this.trips.setDestinations(this.id, this.destinations);
  }
  
  getTripInfo() {
    return this.trips.getTripInfo();
  }

    calculateTripPrice(trip) {
    const agentFee = 1.1;
    const flyingCost = (trip.travelers * trip.destinationInfo.estimatedFlightCostPerPerson);
    const dailyCost = (trip.duration * trip.destinationInfo.estimatedLodgingCostPerDay);
    const tripPrice = ((flyingCost + dailyCost) * agentFee);
    return Math.round(tripPrice);
  }

  totalCost() {
    const totalTripCost = this.trips.reduce((total, trip) => total + (this.calculateTripPrice(trip)),0);
    return totalTripCost;
  }
}

export default Traveler;