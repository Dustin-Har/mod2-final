const displayErrMessage = (err) => {
  const message = err.message === 'Failed to fetch' ? 'Something went wrong. Please check your internet connection' : err.message;
};

const getTravelers = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  .catch(err => displayErrMessage(err));
};

const getSingleTraveler = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
  .then(response => response.json())
  .catch(err => displayErrMessage(err));
}

const getTrips = () => {
return fetch('http://localhost:3001/api/v1/trips')
  .then(response => response.json())
  .catch(err => displayErrMessage(err));
};

const getDestinations = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
  .then(response => response.json())
  .catch(err => displayErrMessage(err));
}

const getAllApi = () => {
  return Promise.all([getTravelers(),getSingleTraveler, getTrips(), getDestinations()])
  .then(data => {
    let apiData = {}
    apiData.traveler = data[0];
    apiData.singleTraveler = data[1];
    apiData.trips = data[2];
    apiData.destinations = data[3];
    return apiData;
  })
  .catch(err => displayErrMessage(err));
};

export {getTravelers, getSingleTraveler, getTrips, getDestinations, getAllApi}