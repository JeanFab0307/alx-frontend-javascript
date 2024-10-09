import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(filename);
  const res = [];

  return Promise.allSettled([user, photo]).then((results) => {
    results.map((result) => (
      res.push({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason.toString(),
      })
    ));
    return res;
  });
}
