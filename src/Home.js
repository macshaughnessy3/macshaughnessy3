import React from "react";
import PropTypes from 'prop-types';
import Sun from "./images/Sun.svg"
import Moon from "./images/Moon.svg"

const Home = (props) => {
  props = {...props}
  return (
    <div className="Home">
      {props.name}
      <div>
        {
          props.mode === 'dark' ?
          <img src={Sun} alt="Sun" width={33} viewBox="0 0 24 24" onClick={() => props.onSelectMode('light')}/>
          :
          <img src={Moon} alt="Moon" width={33} viewBox="0 0 24 24" onClick={() => props.onSelectMode('dark')}/>
        }
      </div>
    </div>
  );
};

export default Home;

Home.defaultProps = {name: 'macshaughnessy3'}
Home.propTypes = { name: PropTypes.string.isRequired}