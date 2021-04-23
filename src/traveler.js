class Traveler {
  constructor(travelerInfo, tripInfo, destinationInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.type = travelerInfo.travelerType;
    this.trips = this.getTripInfo(tripInfo, destinationInfo);
  }
  
  getTripInfo(tripInfo, destinationData) {
    const filteredTripInfo = tripInfo.filter(trip => trip.userID === this.id);
    const tripsWithDestinations = filteredTripInfo.map(trip => {
      const destinationIndex = destinationData.findIndex(destination => destination.id === trip.destinationID);
      trip.destinationInfo = destinationData[destinationIndex];
      return trip
    });
    return tripsWithDestinations;
  }

    calculateTripPrice(trip) {
    const agentFee = 1.1;
    let flyingCost = (trip.travelers * trip.destinationInfo.estimatedFlightCostPerPerson);
    let dailyCost = (trip.duration * trip.destinationInfo.estimatedLodgingCostPerDay);
    let tripPrice = ((flyingCost + dailyCost) * agentFee);
    return Math.round(tripPrice);
  }

  totalCost() {
    const totalTripCost = this.trips.reduce((total, trip) => total + (this.calculateTripPrice(trip)),0);
    return totalTripCost;
  }
}

export default Traveler;