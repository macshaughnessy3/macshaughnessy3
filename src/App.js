import {useState, useEffect} from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Project from "./components/Project";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import {
//   navBar,
//   name,
//   mainBody,
//   about,
//   repos,
//   leadership,
//   skills,
//   getInTouch,
//   experiences
// } from "./config.js";

export default function App() {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));

    // Setup dark/light mode for the first time
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, []);

  const onSelectMode = (mode) => {
    setMode(mode)
    if (mode === 'dark')
      document.body.classList.add('dark-mode')
    else
      document.body.classList.remove('dark-mode')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>
              <Route exact path='/' element={<Home onSelectMode={onSelectMode} mode={mode} />}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/projects' element={<Projects/>}/>
              <Route path="projects/:id" element={<Project/>}/>
            </Routes>
        </Router>
      </header>
    </div>
  );
}

// function Home() {
//   return (
//     <><h2>Home</h2>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// const About = () => {
//   return <h2>About</h2>;
// }

// const Topics = () => {
//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`topics/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`topics/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// const Topic = () => {
//   const { id } = useParams();
//   return <h3>Requested topic ID: {id}</h3>;
// }