import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import shortid from 'shortid';
// import css from './ContactForm.module.css';

class Searchbar extends Component {


  render() {
    return (
      <header class="searchbar">
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>


    );
  }
}

export default Searchbar;





