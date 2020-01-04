import React from 'react';

const SearchBar = () => {
  return (
    <nav style={{ marginBottom: '50px' }} className="blue">
      <div className="nav-wrapper">
        <div className="input-field">
          <input id="search" type="search" required />
          <label htmlFor="search" className="label-icon">
            {' '}
            <i className="material-icons">search</i>{' '}
          </label>
          <i className="material-icons">close</i>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
