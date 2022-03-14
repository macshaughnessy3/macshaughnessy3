import PropTypes from 'prop-types';

const Experiences = (props) => {
  return (
    <h2>Experiences</h2>
  );
};

export default Experiences;

Experiences.defaultProps = {name: 'macshaughnessy3'}
Experiences.propTypes = { name: PropTypes.string.isRequired}