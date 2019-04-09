import apiCaller from '../utils/api-caller';
import {fetchFailed, fetchSuccessful, startFetch} from './common-actions';
import apiURLs from '../utils/apiURLs';

export const Actions = {
  GET_FEED_DATA_REQUEST: 'A-QUBE/ACTIONS/GET_FEED_DATA_REQUEST',
  GET_FEED_DATA_SUCCESFULLY: 'A-QUBE/ACTIONS/GET_FEED_DATA_SUCCESFULLY',
  GET_FEED_DATA_FAILURE: 'A-QUBE/ACTIONS/GET_FEED_DATA',

};



export const getFeedData = () => async dispatch => {
  dispatch(startFetch(Actions.GET_FEED_DATA_REQUEST));

  const response = await apiCaller(apiURLs.getFeed, 'GET')
    .then(res => {

      if (res.data && res.data.data && res.data.data.children) {
        dispatch(fetchSuccessful(Actions.GET_FEED_DATA_SUCCESFULLY, res.data.data.children));

      }

    })
    .catch(err => {
      dispatch(fetchFailed(Actions.GET_FEED_DATA_FAILURE, err));
    });

  return response;
};
