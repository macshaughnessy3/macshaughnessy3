import {useEffect} from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Project from "./components/Project";
import useLocalStorage from 'use-local-storage'

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
  const isDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [mode, setMode] = useLocalStorage('theme', isDefaultDark ? 'dark' : 'light');

  const onSelectMode = ((mode) => {
    setMode(mode)
    if (mode === 'dark')
      document.body.classList.add('dark-mode')
    else
      document.body.classList.remove('dark-mode')
  }, [mode]);

  useEffect(() => {
    // Add event listener to determine preferred color
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));

    // Setup dark/light mode on refresh
    onSelectMode(mode)

    // Remove event listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {});
    }
  }, [mode, onSelectMode]);

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