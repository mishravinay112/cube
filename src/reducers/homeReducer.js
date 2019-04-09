import { Actions } from '../actions/homeActions';

const initialState = {
  feedData: []
};

export default function HomeReducer(state = initialState, action = {}) {
  switch (action.type) {
  case Actions.GET_FEED_DATA_SUCCESFULLY:
    return {
      ...state,
      feedData: action.payload
    };
  default:
    return state;
  }
}
