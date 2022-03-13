import React from "react";
import PropTypes from 'prop-types';

const Project = (props) => {
  return props.name;
};

export default Project;

Project.defaultProps = {name: 'macshaughnessy3'}
Project.propTypes = { name: PropTypes.string.isRequired}