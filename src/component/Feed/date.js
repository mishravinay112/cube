import React from 'react';
import moment from 'moment';

const PostDate = ({date}) => (<div>
  <If condition={date}>
    <p>{moment(date).format('MMM Do YY') }</p>
  </If>

</div>);

export default PostDate;
