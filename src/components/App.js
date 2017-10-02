import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import 'bulma/css/bulma.css';
import '../css/App.css';

import Home from './Home';
import About from './About';
import TopicsHeader from './TopicsHeader';
import TopicPage from './TopicPage';
import Article from './Article';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div className="App">
      <TopicsHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/articles/:topic_slug" component={TopicPage} />
        <Route path="/article/:article_id" component={Article} />
      </Switch>
    </div>
  </Router>
);


App.propTypes = {
};

export default App;

