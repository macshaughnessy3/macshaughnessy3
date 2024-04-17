import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ProjectsInfo = (props) => {
  props = {...props}
  return (
    <>
      My Projects
    </>
  );
};

export default ProjectsInfo;

ProjectsInfo.defaultProps = {name: 'macshaughnessy3'}
ProjectsInfo.propTypes = { name: PropTypes.string.isRequired}