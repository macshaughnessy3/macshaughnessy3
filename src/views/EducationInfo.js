import PropTypes from 'prop-types';
// import {Link} from "react-router-dom"
export const EducationInfo = (props) => {
  return (
    <div>
      <span className={"ibox3"}>
        <h3>{props.header}</h3>
        <span className='bottom-padding'>
          <div className="location">{props.location}</div>
          <div className="location">{props.date}</div>
        </span>
      </span>
      <p className={"longLocation"}>{props.degree}</p>
      <p className={"longLocation"}>{props.detail}</p>
    </div>
  );
};


export default EducationInfo;

EducationInfo.defaultProps = {header: 'Clemson University', degree: "Engineering", detail: "details"}
EducationInfo.propTypes = { name: PropTypes.string.isRequired}