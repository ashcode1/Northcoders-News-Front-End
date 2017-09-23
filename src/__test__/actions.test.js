import * as actions from '../actions/actions';
import * as fetchAllArticles from '../actions/fetchAllArticles';
import * as fetchAllTopicTitles from '../actions/fetchAllTopicTitles';

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
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = fetchAllArticles.fetchArticlesError(data);
    expect(test.data).toEqual('There was an Error');
  });
});

describe('fetchTopicTitles', () => {
  test('it is a function', () => {
    expect(typeof actions.fetchTopicTitles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof fetchAllTopicTitles.fetchTopicTitlesRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof fetchAllTopicTitles.fetchTopicTitlesSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = fetchAllTopicTitles.fetchTopicTitlesSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof fetchAllTopicTitles.fetchTopicTitlesError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = fetchAllTopicTitles.fetchTopicTitlesError(data);
    expect(test.data).toEqual('There was an Error');
  });
});
