import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = e => {
    searchLogs(text.current.value);
  };
  return (
    <nav style={{ marginBottom: '50px' }} className="blue">
      <div className="nav-wrapper">
        <div className="input-field">
          <input
            id="search"
            type="search"
            placeholder="Search logs..."
            ref={text}
            onChange={onChange}
            autoComplete="off"
          />
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

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);
