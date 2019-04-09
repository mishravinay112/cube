import axios from 'axios';

const apiCaller = (url, method = 'GET', data = {}, params = {}) => {
  return axios({
    url,
    method,
    data,
    params,
  })
    .then(response => {
      // This is response from server so,
      // it only matters for server related status chariot status is different from this.
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};

export default apiCaller;
