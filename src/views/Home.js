import PropTypes from 'prop-types';
import Education from "../views/Education";
import Experiences from "../views/Experiences";
import Projects from "../views/Projects";
import Skills from "../views/Skills";
import PersonalInfo from "../views/PersonalInfo";

const Home = (props) => {
  return (
    <div className=' home'>
      <div className='column'>
        <PersonalInfo/>
      </div>
      <div className='scrollable column'>
        <Education/>
        <Experiences/>
        <Projects/>
        <Skills />
      </div>
    </div>
  );
};

export default Home;

Home.defaultProps = {name: 'macshaughnessy3'}
Home.propTypes = { name: PropTypes.string.isRequired}