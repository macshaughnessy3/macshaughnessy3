import PropTypes from 'prop-types';

const Education = (props) => {
  return (
    <h2>Education</h2>
  );
};

export default Education;

Education.defaultProps = {name: 'macshaughnessy3'}
Education.propTypes = { name: PropTypes.string.isRequired}