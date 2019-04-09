import React from 'react';
import PropTypes from 'prop-types';

const Author = ({ author }) => (
  <div>
    Author: {author}
  </div>
);

Author.propTypes = {
  author: PropTypes.string,
};

export default Author;
