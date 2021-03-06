import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import ArticleCard from './ArticleCard';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
    this.props.fetchUsers();
  }

  render() {
    console.log('&&&&&&&&&&&&&', this.props.articles)
    return (
      <section className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <div id="Home">
              {this.props.articles
                .sort((a, b) => b.votes - a.votes)
                .map(article =>
                  (<ArticleCard
                    article={article}
                    id={article._id}
                    title={article.title}
                    votes={article.votes}
                    key={article.id}
                    avatarUrl={this.props.users[article.created_by].avatar_url}
                    voteOnArticles={this.props.voteOnArticles}
                  />))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    },
    voteOnArticles: (articleId, vote) => {
      dispatch(actions.voteOnArticles(articleId, vote));
    },
    fetchUsers: () => {
      dispatch(actions.fetchUsers());
    },
  };
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    users: state.users,
  };
}

Home.defaultProps = {
  articles: [],
  users: {},
  fetchArticles: () => ({
    value: 'default value',
  }),
  voteOnArticles: () => ({
    value: 'default value',
  }),
  fetchUsers: () => ({
    value: 'default value',
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
