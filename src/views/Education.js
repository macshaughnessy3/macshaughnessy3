import PropTypes from 'prop-types';
import EducationInfo from "./EducationInfo";

const Education = (props) => {
  return (
    <div>
    <h2>Education</h2>
    <EducationInfo 
      header={"Clemson University"}
      degree={"Master of Science in Computer Engineering"}
      detail={"Thesis: Analysis of CNN Performance utilizing JPEG Compressed Images Created on an FPGA"}
    />
    <EducationInfo 
      header={"Clemson University"}
      degree={"Bachelor of Science in Computer Engineering with Minor in Mathematical Sciences"}
      detail={""}
    />
    <EducationInfo 
      header={"Clemson University"}
      degree={"Bachelor of Science in Electrical Engineering"}
      detail={""}
    />
    <EducationInfo 
      header={"Study Abroad"}
      degree={"CECAS Global Sophomore Program"}
      detail={"Studied Automotive Engineering and Manufacturing"}
    />
    </div>
  );
};

export default Education;

Education.defaultProps = {name: 'macshaughnessy3'}
Education.propTypes = { name: PropTypes.string.isRequired}