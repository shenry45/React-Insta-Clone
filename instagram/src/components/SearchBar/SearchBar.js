import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <header>
      <div className="container">
        <div>
          <img id="logo" src="/uploads/logo.png" alt="Clone Instagram logo"/>
          <p className="separator"></p>
          <img className="logo-name" src="/uploads/Instagram-logo.png" alt="Instagram clone" />
        </div>
        <form onSubmit={props.searchHandler}>
          <input className="search" placeholder="Search"></input>
        </form>
        <nav>
          <button className="compass"></button>
          <button className="heart"></button>
          <button className="avatar"></button>
        </nav>
      </div>
    </header>
  )
}

export default SearchBar;