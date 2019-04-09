import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const PostDate = ({ date }) => (<div>
  <If condition={date}>
    <p>{moment().utc(date).format('MMM Do YY') }</p>
  </If>

</div>);

PostDate.propTypes = {
  date: PropTypes.number,
};

export default PostDate;
