import * as actions from '../actions/actions';
import * as fetchAllArticles from '../actions/fetchAllArticles';

describe('fetchAllArticles', () => {
  test('it is a function', () => {
    expect(typeof actions.fetchArticles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof fetchAllArticles.fetchArticlesRequest()).toEqual('object');
  });
  test('its success action returns an object', () => {
    expect(typeof fetchAllArticles.fetchArticlesSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = fetchAllArticles.fetchArticlesSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });
  test('its error action returns an object', () => {
    expect(typeof fetchAllArticles.fetchArticlesError()).toEqual('object');
  });
});
