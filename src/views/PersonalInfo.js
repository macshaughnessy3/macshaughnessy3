import PropTypes from 'prop-types';
import ProfilePic from "./Profile.png";
import Aboutme from "./AboutMe";
const PersonalInfo = (props) => {
  props = {...props}
  return (
    <div className="personal-info">
      <img src={ProfilePic} alt="Profile"className="image"/>
      <div className="center">
        <h1>Hi, I'm <span style={{color: '#f06446'}}>{props.name}</span>.</h1>
      </div>
      <Aboutme/>
    </div>
  );
};

export default PersonalInfo;

PersonalInfo.defaultProps = {name: 'Mac Shaughnessy'}
PersonalInfo.propTypes = { name: PropTypes.string.isRequired}