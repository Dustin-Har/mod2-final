export const travelApi = () => {
  const displayErrMessage = (err) => {
    const message = err.message === 'Failed to fetch' ? 'Something went wrong. Please check your internet connection' : err.message;
  }


}