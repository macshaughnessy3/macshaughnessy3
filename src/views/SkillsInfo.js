import PropTypes from 'prop-types';
// import {Link} from "react-router-dom"
import "../App.scss";

const SkillsInfo = (props) => {
  return (
    <>
    <h3>{props.header}</h3>
    <ol style={{listStyleType: 'disc'}} className="ibox">
      {props.skills.map(
        (o, i) => 
        <li obj={o} key={i} className="item">
          {o}
        </li>
        )
      }
    </ol>
    </>
  );
};

export default SkillsInfo;

SkillsInfo.defaultProps = {name: 'macshaughnessy3'}
SkillsInfo.propTypes = { name: PropTypes.string.isRequired}