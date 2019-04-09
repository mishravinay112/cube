import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <div>
    Comment: {comment}
  </div>
);

Comment.propTypes = {
  comment: PropTypes.number
};

export default Comment;
