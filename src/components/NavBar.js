import React from "react";
import PropTypes from 'prop-types';
import {ReactComponent as Sun} from "../images/Sun.svg"
import {ReactComponent as Moon} from "../images/Moon.svg"

const NavBar = (props) => {
  props = {...props}
  return (
    <div className="navbar">
      <div className="button">
        {props.mode === 'dark' ?
          <Sun alt="Sun" width={36.5} height={36.5} onClick={() => props.onSelectMode('light')}/>
          :
          <Moon alt="Moon" width={36.5} height={36.5} onClick={() => props.onSelectMode('dark')}/>
        }
      </div>
    </div>
  );
};

export default NavBar;

NavBar.defaultProps = {mode: 'dark'}
NavBar.propTypes = { mode: PropTypes.string.isRequired}