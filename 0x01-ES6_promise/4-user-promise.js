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
