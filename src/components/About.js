import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from 'react-router-dom';

import '../css/About.css';

const About = () => (
  <section className="container" id="about">
    <div className="columns is-centered">
      <div className="column is-8">
        <section className="box" id="about-box">
          <div className="columns is-centered">
            <div className="column is-10">
              <h1 className="title is-1">About</h1>
              <h4 className="title is-4">Northcoders News is a social news aggregation, web content rating, and discussion website, similar to <a href="https://www.reddit.com/" target="_blank">Reddit</a>.</h4>
              <ul>
                <li>The articles that make up this site are divided into topics: Football, Cooking and Coding.</li>

                <li>Each article has user curated ratings and can be up or down voted using the arrows.</li>

                <li>Users can add comments about an article and those comments can be up or down voted.</li>

                <li>A user can also add comments and remove comments, but only their own.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="columns is-centered">
              <div className="column is-10">
                <h2 className="title is-2">Objectives</h2>
                <h4 className="title is-4">Building this project was an exercise in learning and practising the following:</h4>
                <ul>
                  <li>1. Pulling together various skills and technologies to produce an interactive, functional application.</li>
                  <li>2. Working with <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" target="_blank">C.R.U.D</a> from a front end perspective.</li>
                  <li>3. Making advanced asynchronous API calls.</li>
                  <li>4. Utilising the various HTTP response codes and updating the UI accordingly.</li>
                  <li>5. Common HTTP request types `POST`, `PUT` & `DELETE`.</li>
                  <li>6. Interacting with a server using URL queries and request bodies.</li>
                </ul>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-10">
                <h2 className="title is-2">Built with...</h2>
                <h4 className="title is-4">Northcoder News is built on Node JS and the following:</h4>
                <ul>
                  <li><a href="https://reactjs.org/" target="_blank">REACT</a></li>
                  <li><a href="http://redux.js.org/" target="_blank">REDUX</a></li>
                  <li><a href="http://bulma.io/" target="_blank">BULMA</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
);

export default About;
