import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

import NCnewsLogo from '../images/NC_logo_black.png';
import NCnewsLogoHero from '../images/NC_logo_hero_b.png';


class TopicsHeader extends React.Component {
  componentDidMount() {
    this.props.fetchTopicTitles();
  }

  render() {
    return (
      <section className="hero is-fullheight">
        {/* HERO HEADER */}
        <div className="hero-head">
          <header className="nav">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item">
                  <img src={NCnewsLogo} alt="NORTHCODERS NEWS" />
                </a>
              </div>
              <span className="nav-toggle">
                <span />
                <span />
                <span />
              </span>
              <div className="nav-right nav-menu">
                <a className="nav-item is-active">
                Home
                </a>
                <a className="nav-item">
                About
                </a>
                <span className="nav-item">
                  <a className="button is-info is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </header>
        </div>

        {/* HERO CONTENT (LOGO IMAGE) */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <figure className="image">
              <img src={NCnewsLogoHero} alt="Northcoders NEWS" />
            </figure>
            <h2 className="subtitle">
              choose your news...
            </h2>
          </div>
        </div>

        {/* HERO FOOTER */}
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container" ref={(section) => { this.Container = section; }}>
              <ul>
                <NavLink
                  className="nav_tab"
                  to={'/'}
                  onClick={() =>
                    scrollToComponent(this.Container, { offset: 0, align: 'top', duration: 1500 })}
                >
                  <li className="is-active"><a>Most Popular</a></li>
                </NavLink>
                
                {this.props.topicsTitles
                  .map(topic => (
                    <NavLink
                      to={`/articles/${topic.slug}`}
                      key={topic._id}
                      onClick={() =>
                        scrollToComponent(this.Container, { offset: 0, align: 'top', duration: 1500 })}
                    >
                      <li><a>{topic.title}</a></li>
                    </NavLink>
                  ))
                }
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopicTitles: () => {
      dispatch(actions.fetchTopicTitles());
    },
  };
}

function mapStateToProps(state) {
  return {
    topicsTitles: state.topics,
  };
}

TopicsHeader.defaultProps = {
  topicsTitles: [],
  fetchTopicTitles: () => ({
    value: 'default value',
  }),
};

TopicsHeader.propTypes = {
  topicsTitles: PropTypes.array.isRequired,
  fetchTopicTitles: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsHeader);
