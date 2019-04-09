export const startFetch = type => ({
  type
});

export const fetchSuccessful = (type, payload) => ({
  type,
  payload
});

export const fetchFailed = (type, payload) => ({
  type,
  payload
});
