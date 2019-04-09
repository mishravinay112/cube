import React, { Component } from 'react';
import Feed from '../component/Feed/Feed';
import { connect } from 'react-redux';
import { getFeedData } from '../actions/homeActions';
import {Link} from 'react-router-dom';


class Home extends Component {

  componentDidMount() {
    this.props.getFeedData();
  }

  render() {
    return (
      <div>
        <If condition={this.props.HomeReducer.feedData}>
          <For each="feed" of={this.props.HomeReducer.feedData}>
            <a href={`http://reddit.com${feed.data.permalink}`} target="_blank">
              <Feed key={index}
                thumbnail={feed.data.thumbnail}
                title={feed.data.title}
                date={feed.data.created}
                comment={feed.data.num_comments}
                score={feed.data.ups}
                author={feed.data.author}
              />
            </a>


          </For>
        </If>

      </div>

    );
  }
}

Home = connect(state => ({
  HomeReducer: state.HomeReducer,
}), dispatch => ({
  getFeedData: () => dispatch(getFeedData()),
}))(Home);


export default Home;
