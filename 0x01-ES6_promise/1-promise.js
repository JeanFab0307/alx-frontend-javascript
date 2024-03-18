export default function getFullResponseFromAPI(success) {
  const resp = {
    status: 200,
    body: 'Success',
  };
  const errMessage = new Error('The fake API is not working currently');
  if (success) {
    return Promise.resolve(resp);
  }
  return Promise.reject(errMessage);
}
