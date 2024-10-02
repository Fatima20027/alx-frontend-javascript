import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUP = signUpUser(firstName, lastName);
  const upLoad = uploadPhoto(fileName);

  return Promise.allSettled([signUP, upLoad])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,

    })));
}
