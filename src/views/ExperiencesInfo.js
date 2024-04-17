import PropTypes from 'prop-types';
import {Link} from "react-router-dom"

const ExperiencesInfo = (props) => {
  return (
    <>
      My Experiences
    </>
  );
};

export default ExperiencesInfo;

ExperiencesInfo.defaultProps = {name: 'macshaughnessy3'}
ExperiencesInfo.propTypes = { name: PropTypes.string.isRequired}