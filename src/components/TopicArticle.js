import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import '../css/TopicArticle.css';

export const TopicArticle = props => (
  <div className="box">
    <article className="media">
      <figure className="media-left">
        <figure className="image is-square">
          <img src={props.avatarUrl} alt="User Avatar" />
        </figure>
        <section className="voteSection">
          <a className="is-danger is-small" onClick={props.voteOnTopicArticles.bind(null, props.id, 'up')} >
            <i className="fa fa-arrow-up row" />
          </a>
          <span className="row tag is-medium bold">{props.votes}</span>
          <a className="is-danger is-small" onClick={props.voteOnTopicArticles.bind(null, props.id, 'down')} >
            <i className="fa fa-arrow-down row" />
          </a>
        </section>
      </figure>
      <div className="media-content">
        <div className="content">
          <NavLink to={`/article/${props.id}`} className="title is-3">{props.title}</NavLink>
        </div>
        <div>Created By: {props.article.created_by}</div>
        <div>Comments: {props.article.comments}</div>
        <div>Topic: {props.article.belongs_to}</div>
      </div>
    </article>
  </div>
);

TopicArticle.defaultProps = {
  avatarUrl: '',
  title: '',
  votes: 0,
  id: '',
  article: {},
  voteOnTopicArticles: () => ({
    value: 'default value',
  }),
};

export default TopicArticle;
