import * as actions from '../actions/actions';
import * as fetchAllArticles from '../actions/fetchAllArticles';

describe('fetchAllArticles', () => {
  test('it is a function', () => {
    expect(typeof actions.fetchArticles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof fetchAllArticles.fetchArticlesRequest()).toEqual('object');
  });
});

