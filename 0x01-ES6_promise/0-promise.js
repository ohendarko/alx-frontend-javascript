/* eslint-disable no-constant-condition */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(true);
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}
