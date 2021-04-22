class Traveler {
  constructor(travelerInfo, tripInfo, destinationInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.type = travelerInfo.travelerType;
    this.trips = this.getTripInfo(tripInfo, destinationInfo);
  }
  
  getTripInfo(tripInfo, destinationData) {
    let allTripInfo = tripInfo.filter(trip => trip.userID === this.id);
    allTripInfo.forEach(trip => {
      const destinationIndex = destinationData.findIndex(destination => destination.id === trip.destinationID);
      trip.destinationInfo = destinationData[destinationIndex];
    });
    return allTripInfo;
  }

}

export default Traveler;