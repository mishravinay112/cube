import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './thumbnail';
import Title from './title';
import Author from './author';
import Score from './score';
import Comment from './comment';
import PostDate from './date';

const Feed = ({ thumbnail, title, date, comment, score, author }) => (
  <div className="container">
    <div className="row borderForFeed margin10px-top">
      <div className="col-md-2 margin10px borderForFeed center">
        <Thumbnail image={thumbnail} />
      </div>
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-6" />
          <div className="col-md-6 borderForFeed center">
            <PostDate date={date} />
          </div>
        </div>
        <div className="row margin10px">
          <div className="col-md-12 borderForFeed center">
            <Title title={title} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 borderForFeed center">
            <Author author={author} />
          </div>
          <div className="col-md-3 borderForFeed center">
            <Score score={score} />
          </div>
          <div className="col-md-3 borderForFeed center">
            <Comment comment={comment} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Feed.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.number,
  comment: PropTypes.number,
  score: PropTypes.number,
  author: PropTypes.string,
};

export default Feed;
