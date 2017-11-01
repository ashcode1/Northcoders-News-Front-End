import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

import NCnewsLogo from '../images/NC_logo_black.png';
import NCnewsLogoHero from '../images/NC_logo_hero_b.png';

import '../css/TopicsHeader.css';

class TopicsHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchTopicTitles();
  }
  showSettings (event) {
    event.preventDefault();
  }


  render() {
    return (
      <div className="column is-mobile">
        <div className="column">
      <section className="hero is-fullheight">

        {/* HERO HEADER */}

        {/* LEFT */}
        <div className="hero-head">
          <header className="nav">
            <div className="container">
              <div className="nav-left">
                <NavLink to="https://northcoders.com/" target="_blank" className="nav-item">
                  <img src={NCnewsLogo} alt="NORTHCODERS NEWS" />
                </NavLink>
              </div>

              {/* RIGHT */}

              {/* burger menu */}                
              <div style={{position: 'relative'}}>
                  
                  <span onClick={() => this.setState({menuIsOpen: !this.state.menuIsOpen})} className="nav-toggle" aria-haspopup="true" aria-controls="dropdown-menu">
                      <span className="line"/>
                      <span className="line"/>
                      <span className="line"/>
                  </span>

                  {this.state.menuIsOpen && <div style={{position: 'absolute', top: '100%', right: 0}} className="dropdown-content">
                    <ul className="menu-list" >
                      <NavLink to={'/'} onClick={() =>
                          scrollToComponent(this.Container, { offset: 0, align: 'top', duration: 1500 })}>
                        <li>Home</li>
                      </NavLink>

                      <NavLink to={'/About'} onClick={() =>
                          scrollToComponent(this.Container, { offset: 0, align: 'top', duration: 1500 })}>
                        <li>About</li>
                    </NavLink>
                    </ul>
                  </div>}
              </div>

              {/* full screen */}
              <div className="nav-right nav-menu" id="full-navbar">
                <NavLink to={'/'} className="nav-item home" onClick={() =>
                    scrollToComponent(this.Container, { offset: 0, align: 'top', duration: 1500 })}>
                  Home
                </NavLink>

                <NavLink to={'/About'} className="nav-item about" onClick={() =>
                    scrollToComponent(this.Container, { offset: 0, align: 'top', duration: 1500 })}>
                  About
                </NavLink>

                <NavLink to="https://github.com/ashcode1" target="_blank" className="nav-item">
                  <a className="button is-info is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </NavLink>
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
        
        {/* mobile only */}
        <div className="container" ref={(section) => { this.Tile = section; }}>
          
          <div className="columns is-centered">
            <div className="column has-text-centered">
              <div className="menu">
                <ul>
                    <NavLink
                      to={'/'}
                      onClick={() =>
                        scrollToComponent(this.Tile, { offset: 0, align: 'top', duration: 1500 })}
                    >
                      <li><a>Most Popular</a></li>
                    </NavLink>

                  {this.props.topicsTitles
                    .map(topic => (
                        <NavLink
                          to={`/articles/${topic.slug}`}
                          key={topic._id}
                          onClick={() =>
                            scrollToComponent(this.Tile, { offset: 0, align: 'top', duration: 1500 })}
                        >
                          <li><a>{topic.title}</a></li>
                        </NavLink>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

        </div>
        
        {/* small tablet upwards */}
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
                      <li><a>Most Popular</a></li>
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
      </div>

      </div>

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
