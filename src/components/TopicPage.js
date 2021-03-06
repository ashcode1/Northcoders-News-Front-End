import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import TopicArticle from './TopicArticle';

export class TopicPage extends React.Component {
  componentDidMount() {
    this.props.fetchTopicArticles(this.props.match.params.topic_slug);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.topic_slug !== nextProps.match.params.topic_slug) {
      this.props.fetchTopicArticles(nextProps.match.params.topic_slug);
    }
  }

  render() {
    console.log('###############################', this.props.TopicArticles);
    return (
      <section className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            {this.props.TopicArticles
              .map(article =>
                (<TopicArticle
                  article={article}
                  id={article._id}
                  title={article.title}
                  votes={article.votes}
                  key={article._id}
                  avatarUrl={this.props.users[article.created_by].avatar_url}
                  voteOnTopicArticles={this.props.voteOnTopicArticles}
                />))}
          </div>
        </div>
      </section>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchTopicArticles: (id) => {
      console.log('CALLED FROM TOPICPAGE')
      dispatch(actions.fetchTopicArticles(id));
    },
    voteOnTopicArticles: (articleId, vote) => {
      dispatch(actions.voteOnTopicArticles(articleId, vote));
    },
    fetchUsers: () => {
      dispatch(actions.fetchUsers());
    },
  };
}


function mapStateToProps(state) {
  return {
    TopicArticles: state.topicArticles,
    users: state.users,
  };
}

TopicPage.defaultProps = {
  TopicArticles: [],
  match: {},
  users: {},
  fetchTopicArticles: () => ({
    value: 'default value',
  }),
  voteOnTopicArticles: () => ({
    value: 'default value',
  }),
};

TopicPage.propTypes = {
  fetchTopicArticles: PropTypes.func.isRequired,
  TopicArticles: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  voteOnTopicArticles: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);
