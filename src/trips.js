export default class Trips {
  constructor(tripData, destinationInfo) {
    this.tripsArray = tripData;
    this.destinations = destinationInfo;
  }
  
  setDestinations(userId) {
    const filteredTripInfo = this.tripsArray.filter(trip => trip.userID === userId);
    const tripsWithDestinations = filteredTripInfo.map(trip => {
      const destinationIndex = this.destinations.findIndex(destination => destination.id === trip.destinationID);
      trip.destinationInfo = this.destinations[destinationIndex];
      return trip
    });
    this.tripsArray = tripsWithDestinations;
    console.log(this.tripsArray)
  }
  
  calculateTripPrice(trip) {
    const agentFee = 1.1;
    const flyingCost = (trip.travelers * trip.destinationInfo.estimatedFlightCostPerPerson);
    const dailyCost = (trip.duration * trip.destinationInfo.estimatedLodgingCostPerDay);
    const tripPrice = ((flyingCost + dailyCost) * agentFee);
    return Math.round(tripPrice);
  }
  
  getTripInfo() {
    return this.tripsArray;
  }
}
