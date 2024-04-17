import PropTypes from 'prop-types';
import EducationInfo from "./EducationInfo";

const Education = (props) => {
  return (
    <div className='right-padding'>
    <h2>Education</h2>
    <EducationInfo 
      header={"Clemson University"}
      location={"Clemson, South Carolina"}
      date={"2022-May 2024"}
      degree={"Master of Science in Computer Engineering"}
      detail={"Thesis: Analysis of CNN Performance utilizing JPEG Compressed Images Created on an FPGA"}
    />
    <EducationInfo 
      header={"Clemson University"}
      location={"Clemson, South Carolina"}
      date={"2017 - 2022"}
      degree={"Bachelor of Science in Computer Engineering with Minor in Mathematical Sciences"}
      detail={""}
    />
    <EducationInfo 
      header={"Clemson University"}
      location={"Clemson, South Carolina"}
      date={"2017 - 2022"}
      degree={"Bachelor of Science in Electrical Engineering"}
      detail={""}
    />
    <EducationInfo 
      header={"Study Abroad"}
      location={"Stuttgart and Munich, Germany"}
      date={"May - June 2018"}
      longLocation={true}
      degree={"CECAS Global Sophomore Program"}
      detail={"Studied Automotive Engineering and Manufacturing"}
    />
    </div>
  );
};

export default Education;

Education.defaultProps = {name: 'macshaughnessy3'}
Education.propTypes = { name: PropTypes.string.isRequired}