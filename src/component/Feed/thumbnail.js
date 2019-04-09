import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ image }) => (
  <div>
    <img src={image} alt="thumbnail image" />
  </div>
);

Thumbnail.propTypes = {
  image: PropTypes.string,
};

export default Thumbnail;
