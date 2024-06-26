import {useEffect, useCallback} from 'react';
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import AllProjects from "./components/AllProjects";
import useLocalStorage from 'use-local-storage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import "./App.scss";

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
  const onSelectMode  = useCallback((mode) => {
    setMode(mode)
    if (mode === 'dark')
      document.body.classList.add('dark-mode')
    else
      document.body.classList.remove('dark-mode')
  }, [setMode]);

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
    <>
      <NavBar onSelectMode={onSelectMode} mode={mode} />
      <div className="App">
        <Router>
            <Routes>
              <Route exact path='/macshaughnessy3' element={<Home/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/projects' element={<Projects/>}/>
              <Route path="projects/:number" element={<AllProjects/>}/>
            </Routes>
        </Router>
      </div>
    </>
  );
}