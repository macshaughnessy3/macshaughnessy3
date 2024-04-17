import PropTypes from 'prop-types';
// import {Link} from "react-router-dom"
export const EducationInfo = (props) => {
  return (
    <div>
      <h3>{props.header}</h3>
      <p>{props.degree}</p>
      <p>{props.detail}</p>
    </div>
  );
};


export default EducationInfo;

EducationInfo.defaultProps = {header: 'Clemson University', degree: "Engineering", detail: "details"}
EducationInfo.propTypes = { name: PropTypes.string.isRequired}