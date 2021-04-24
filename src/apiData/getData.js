const displayErrMessage = (err) => {
  const message = err.message === 'Failed to fetch' ? 'Something went wrong. Please check your internet connection' : err.message;
};

const getTraveler = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  .catch(err => displayErrMessage(err));
};

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
  return Promise.all([getTraveler(), getTrips(), getDestinations()])
  .then(data => {
    let apiData = {}
    apiData.traveler = data[0];
    apiData.trips = data[1];
    apiData.destinations = data[2];
    return apiData;
  })
  .catch(err => displayErrMessage(err));
};

export {getTraveler, getTrips, getDestinations, getAllApi}