import * as types from '../actions/types';
import initialState from './initialState';


function reducer(prevState = initialState, action) {
  if (!action) return prevState;

  // FETCH ARTICLES
  if (action.type === types.FETCH_ARTICLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.articles = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.articles = [];
    newState.loading = false;
    return newState;
  }


  // FETCH TOPIC TITLES
  if (action.type === types.FETCH_TOPIC_TITLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_TITLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.topics = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_TITLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.topics = [];
    newState.loading = false;
    return newState;
  }


  // FETCH TOPIC ARTICLES
  if (action.type === types.FETCH_TOPIC_ARTICLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.topicArticles = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_ARTICLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.topicArticles = [];
    newState.loading = false;
    return newState;
}


  // FETCH ARTICLE
  if (action.type === types.FETCH_ARTICLE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_SUCCESS) {
    // console.log(action.data);
    const newState = Object.assign({}, prevState);
    newState.article = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.article = [];
    newState.loading = false;
    return newState;
  }

  return prevState;
}

export default reducer;
