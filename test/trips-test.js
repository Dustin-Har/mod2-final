import chai from 'chai';
const expect = chai.expect;

import Trips from "../src/trips";
import Traveler from "../src/traveler"
import testData from "./test-data"



let traveler;

describe('Trips', () => {
  beforeEach(() => {
    traveler = new Traveler(testData.travelersTestData[1], testData.tripTestData, testData.destinationTripData);
  });

  it('Should be a function', () => {
    expect(Trips).to.be.a('function');
  });

  it('Should take an array of trips as an argument and filter users trip', () => {
    expect(traveler.trips.tripsArray).to.deep.equal(
      [{
        "id": 1,
        "userID": 2,
        "destinationID": 4,
        "travelers": 1,
        "date": "2019/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": [],
        "destinationInfo": {
            "id": 4,
            "destination": "Cartagena, Colombia",
            "estimatedLodgingCostPerDay": 65,
            "estimatedFlightCostPerPerson": 350,
            "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "alt": "boats at a dock during the day time"
          }
        }, {
        "id": 5,
        "userID": 2,
        "destinationID": 3,
        "travelers": 3,
        "date": "2020/04/30",
        "duration": 18,
        "status": "approved",
        "suggestedActivities": [],
        "destinationInfo": {
          "id": 3,
          "destination": "Sydney, Austrailia",
          "estimatedLodgingCostPerDay": 130,
          "estimatedFlightCostPerPerson": 950,
          "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          "alt": "opera house and city buildings on the water with boats"
        }
      }, {
        "id": 6,
        "userID": 2,
        "destinationID": 6,
        "travelers": 3,
        "date": "2020/06/29",
        "duration": 9,
        "status": "approved",
        "suggestedActivities": [],
        "destinationInfo": {
          "id": 6,
          "destination": "Jakarta, Indonesia",
          "estimatedLodgingCostPerDay": 70,
          "estimatedFlightCostPerPerson": 890,
          "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          "alt": "lit up city at night"
        }
    }]);
  });
})

it.skip('Should calculate ', () => {

});