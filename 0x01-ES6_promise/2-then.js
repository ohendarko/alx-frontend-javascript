/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return promise.then((response) => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  }).catch((error) => {
    console.error('An error occurred while handling the response:', error);
    return new Error();
  });
}
