import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <header>
      <div className="container">
        <div>
          <img id="logo" src="/uploads/logo.png" alt="Clone Instagram logo"/>
          <p className="separator"></p>
          <img className="logo-name" src="/uploads/Instagram-logo.png" alt="Instagram clone" />
        </div>
        <input className="search" placeholder="Search"></input>
        <nav>
          <a href="#"><img src="/uploads/compass.png" alt="Find your way" /></a>
          <a href="#"><img src="/uploads/heart.png" alt="See your Likes" /></a>
          <a href="#"><img src="/uploads/avatar.png" alt="Go to Account" /></a>
        </nav>
      </div>
    </header>
  )
}

export default SearchBar;