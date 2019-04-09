import React from 'react';
import PropTypes from 'prop-types';

const Score = ({ score }) => (
  <div>
    Score: {score}
  </div>
);

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
