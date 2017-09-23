import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import ArticleCard from './ArticleCard';

class TopicPage extends React.Component {
  componentDidMount() {
    this.props.fetchTopicArticles(this.props.match.params.topic_slug);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.topic_slug !== nextProps.match.params.topic_slug) {
      this.props.fetchTopicArticles(nextProps.match.params.topic_slug);
    }
  }

  /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */ 
  render() {
    return (
      <div>{
        this.props.TopicArticles
          .sort((a, b) => b.votes - a.votes)
          .map(article =>
            (<ArticleCard
              id={article._id}
              title={article.title}
              votes={article.votes}
              key={article._id}
            />))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopicArticles: (id) => {
      dispatch(actions.fetchTopicArticles(id));
    },
  };
}

function mapStateToProps(state) {
  return {
    TopicArticles: state.articles,
  };
}

TopicPage.propTypes = {
  fetchTopicArticles: PropTypes.func.isRequired,
  TopicArticles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);