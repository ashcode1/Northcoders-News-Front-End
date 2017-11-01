import * as types from './types';

export function fetchArticleRequest() {
  return {
    type: types.FETCH_ARTICLE_REQUEST,
  };
}

export function fetchArticleSuccess(article) {
  return {
    type: types.FETCH_ARTICLE_SUCCESS,
    data: article,
  };
}

export function fetchArticleError(error) {
  return {
    type: types.FETCH_ARTICLE_ERROR,
    data: error,
  };
}
