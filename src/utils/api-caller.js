import axios from 'axios';

const apiCaller = (url, method = 'GET', data = {}, params = {}) => {
  return axios({
    url,
    method,
    data,
    params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    }
  })
    .then(response => {
      // This is response from server so,
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};

export default apiCaller;
