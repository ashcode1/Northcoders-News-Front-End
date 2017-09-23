import axios from 'axios';
import { ROOT } from '../config';
import * as fetchAllArticles from './fetchAllArticles';
import * as fetchAllTopicArticles from './fetchAllTopicArticles';

// FETCH ALL ARTICLES
export function fetchArticles() {
  return (dispatch) => {
    dispatch(fetchAllArticles.fetchArticlesRequest());
    axios.get(`${ROOT}/articles`)
      .then((res) => {
        dispatch(fetchAllArticles.fetchArticlesSuccess(res.data.articles));
      })
      .catch((err) => {
        dispatch(fetchAllArticles.fetchArticlesError(err));
      });
  };
}

// FETCH TOPICS ARTICLES
export function fetchTopicArticles(topicId) {
  return (dispatch) => {
    dispatch(fetchAllTopicArticles.fetchTopicArticlesRequest());
    axios.get(`${ROOT}/topics/${topicId}/articles`)
      .then((res) => {
        dispatch(fetchAllTopicArticles.fetchTopicArticlesSuccess(res.data.articles));
      })
      .catch((err) => {
        dispatch(fetchAllTopicArticles.fetchTopicArticlesError(err));
      });
  };
}
