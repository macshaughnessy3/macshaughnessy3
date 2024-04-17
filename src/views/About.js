import PropTypes from 'prop-types';

const About = (props) => {
  return props.name;
};

export default About;

About.defaultProps = {name: 'macshaughnessy3'}
About.propTypes = { name: PropTypes.string.isRequired}