function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const responseAPI = true;
    if (responseAPI) {
      resolve();
    } else {
      reject();
    }
  });
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);
