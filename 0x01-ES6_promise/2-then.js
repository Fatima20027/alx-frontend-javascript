export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(new Error());
    }
  });
}

handleResponseFromAPI()
  .then((value) => { console.log(value); console.log('Got a response from the API'); })
  .catch((error) => console.log(error));
