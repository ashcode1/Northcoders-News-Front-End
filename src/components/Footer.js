import React from 'react';

const Footer = () => (
  <footer className="footer" id="footer-container">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>Northcoders News</strong> by <a>Ashley Hopkins</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php" target="_blank"> MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY NC SA 4.0</a>.
        </p>
        <p>
          <a className="icon" href="https://github.com/ashcode1" target="_blank">
            <i className="fa fa-github" />
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
