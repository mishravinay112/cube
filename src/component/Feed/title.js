import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div>
    Title: {title || 'not available'}
  </div>
);

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
