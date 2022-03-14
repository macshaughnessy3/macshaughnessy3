import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
const Projects = (props) => {
  props = {...props}
  return (
    <>
      <h2 className='header'>
        <Link to="/projects/1" >Projects</Link>
      </h2>
    </>
  );
};

export default Projects;

Projects.defaultProps = {name: 'macshaughnessy3'}
Projects.propTypes = { name: PropTypes.string.isRequired}