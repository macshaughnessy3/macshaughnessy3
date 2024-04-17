import PropTypes from 'prop-types';
import '../App.scss';

const Aboutme = (props) => {
  return (
    <>
    <p>
      I am currently a graduate student at Clemson University in Clemson, South Carolina, while finishing my Masters in Computer Engineering (May 2024).  In my free time, I enjoy playing basketball, flying in pursuit of my private pilot's license, traveling, reading, and working on various computer projects.  I am also a big Clemson football and Formula 1 fan.
    </p>
    <p>Feel free to reach out to me via <a href="mailto:tmacshaughnessy@gmail.com">email</a>.</p>
    </>
    );
};

export default Aboutme;

Aboutme.defaultProps = {name: 'macshaughnessy3'}
Aboutme.propTypes = { name: PropTypes.string.isRequired}