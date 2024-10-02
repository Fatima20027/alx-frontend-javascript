export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstName && lastName) {
        resolve(`${firstName} ${lastName}`);
      } else {
        reject();
      }
    });
  });
}

signUpUser()
  .then((value) => { console.log(value); })
  .catch((error) => console.error(error));
