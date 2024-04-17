import PropTypes from 'prop-types';
import SkillsInfo from "./SkillsInfo";

const Skills = (props) => {
  return (
    <div>
      <h2>Skills</h2>
      <SkillsInfo 
        header={"Languages"}
        skills={[
          "VHDL","Verilog", "Vitis HLS", "Python", "MATLAB", "C and C++", "React","Ruby on Rails","CUDA", "Assembly", "Swift", "MATLAB"
        ]} 
      />
      <SkillsInfo
        header={"Extracurriculars"}
        skills={["Student Pilot", "Basketball", "Rowing"]}
      />
    </div>
  );
};

export default Skills;

Skills.defaultProps = {name: 'macshaughnessy3'}
Skills.propTypes = { name: PropTypes.string.isRequired}