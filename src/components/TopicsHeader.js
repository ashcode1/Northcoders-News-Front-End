import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

import Popular from '../images/Popular.png';
import Football from '../images/Football.png';
import Cooking from '../images/Cooking.png';
import Coding from '../images/Coding.png';

// for mapping datat with images

class TopicsHeader extends React.Component {
  componentDidMount() {
    this.props.fetchTopicTitles();
  }

  getImage(str) {
    const imgs = {
      Football,
      Cooking,
      Coding,
    };
    return imgs[str];
  }

  render() {
    return (
      <div id="TopicHeader" className="columns" >
        <div className="column">
          <NavLink className="nav_wrap" to={'/'}>
            <figure className="image is 3by2">
              <img src={Popular} alt="popular" />
            </figure>
          </NavLink>
        </div>
        {this.props.topicsTitles
          .map(topic => (
            <div className="column">
              <NavLink
                className="nav_wrap"
                to={`/articles/${topic.slug}`}
              >
                <figure className="image is-3by2">
                  <img src={this.getImage(topic.title)} alt={topic.title} />
                  {console.log(topic.id)}
                </figure>
              </NavLink>
            </div>
          ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopicTitles: () => {
      dispatch(actions.fetchTopicTitles());
    },
  };
}

function mapStateToProps(state) {
  return {
    topicsTitles: state.topics,
  };
}

TopicsHeader.propTypes = {
  topicsTitles: PropTypes.array.isRequired,
  fetchTopicTitles: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsHeader);
