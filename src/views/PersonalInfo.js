import PropTypes from 'prop-types';
import ProfilePic from "./Profile.png";

const PersonalInfo = (props) => {
  props = {...props}
  return (
    <div className="personal-info">
      <img src={ProfilePic} alt="Profile"className="image"/>
      <div className="center">
        <h1>Hi, I'm <span style={{color: '#f06446'}}>{props.name}</span>.</h1>
        {/* <a href="mailto:tmacshaughnessy@gmail.com">Email Me</a> */}
      </div>
    </div>
  );
};

export default PersonalInfo;

PersonalInfo.defaultProps = {name: 'Mac Shaughnessy'}
PersonalInfo.propTypes = { name: PropTypes.string.isRequired}