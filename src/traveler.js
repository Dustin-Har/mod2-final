class Traveler {
  constructor(travelerInfo, tripInfo, destinationInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.type = travelerInfo.travelerType;
    this.trips = this.getTripInfo(tripInfo, destinationInfo);
  }

}

export default Traveler;