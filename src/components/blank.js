import React from 'react';
import NCnewsLogo from '../images/Northcoders_logo_black.png';
import NCnewsLogoHero from '../images/NC_logo_hero_b.png';

import '../css/Level.css';

const Level = () => (
  <section className="hero is-small">
    {/* Hero header will stick at the top */}
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
              Examples
            </a>
            <a className="nav-item">
              Documentation
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

    {/* Hero content: will be in the middle */}
    <div className="hero-body">
      <div className="container has-text-centered">
        <figure className="image">
          <img src={NCnewsLogoHero} alt="Northcoders NEWS" />
        </figure>
        {/* <h1 className="title">
        Title
        </h1> */}
        <h2 className="subtitle">
        choose your news...
        </h2>
      </div>
    </div>

    {/* Hero footer: will stick at the bottom */}
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className="is-active"><a>Most Popular</a></li>
            <li><a>Football</a></li>
            <li><a>Cooking</a></li>
            <li><a>Coding</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
);


export default Level;