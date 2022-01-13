import React from 'react';

import { ReactComponent as GithubIcon } from 'assets/images/github.svg';

import './Navbar.css';

function Navbar() {
  return(
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>
            <a href="/" className="brand">
              DSMovie
            </a>
          </h1>
          <a href="https://github.com/eng-gabrielscardoso" className="developer">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/eng-gabrielscardoso</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
