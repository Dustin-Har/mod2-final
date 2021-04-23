export const travelApi = () => {
  const displayErrMessage = (err) => {
    const message = err.message === 'Failed to fetch' ? 'Something went wrong. Please check your internet connection' : err.message;
  }

  const travelersApi = fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  .catch(err => displayErrMessage(err));


}