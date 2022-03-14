import PropTypes from 'prop-types';

const Skills = (props) => {
  return (
    <h2>Skills</h2>
  );
};

export default Skills;

Skills.defaultProps = {name: 'macshaughnessy3'}
Skills.propTypes = { name: PropTypes.string.isRequired}