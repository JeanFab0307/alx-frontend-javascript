export default function getFullResponseFromAPI(success) {
  const resp = {
    status: 200,
    body: 'Success',
  };
  const errMessage = new Error('The fake API is not working currently');
  // const promise = new Promise((resolve, reject) => {
  //   if (success) {
  //     resolve(resp);
  //   } else {
  //     reject(Error(errMessage));
  //   }
  // });
  // promise
  //   .then((resp) => resp)
  //   .catch((fail) => fail);

  if (success)
    return Promise.resolve(resp);
  return Promise.reject(errMessage);
}
