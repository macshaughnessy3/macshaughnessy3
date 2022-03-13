import PropTypes from 'prop-types';

const Projects = (props) => {
  return props.name;
};

export default Projects;

Projects.defaultProps = {name: 'macshaughnessy3'}
Projects.propTypes = { name: PropTypes.string.isRequired}