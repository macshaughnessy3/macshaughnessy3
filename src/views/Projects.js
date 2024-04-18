import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import AllProjects from '../components/AllProjects';

const Projects = (props) => {
  props = {...props}
  return (
    <>
      <h2 className='header'>
        Projects
        {/* <Link to="/projects">Projects</Link> */}
      </h2>
      <AllProjects/>
    </>
  );
};

export default Projects;

Projects.defaultProps = {name: 'macshaughnessy3'}
Projects.propTypes = { name: PropTypes.string.isRequired}