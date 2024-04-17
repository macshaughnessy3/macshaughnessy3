import PropTypes from 'prop-types';
import '../App.scss';

const Aboutme = (props) => {
  return (
    <>
    <p>
      I currently live in Clemson, South Carolina, while finishing my Masters in Computer Engineering. I enjoy playing basketball, flying, reading and working on various computer projects in my free time. I am also a Clemson football and Formula 1 fan. 
    </p>
    <p>Feel free to reach out to me via <a href="mailto:tmacshaughnessy@gmail.com">email</a>.</p>
    </>
    );
};

export default Aboutme;

Aboutme.defaultProps = {name: 'macshaughnessy3'}
Aboutme.propTypes = { name: PropTypes.string.isRequired}