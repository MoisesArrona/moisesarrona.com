import { Route, Routes } from 'react-router-dom';

import Header from './app/components/template/Header';
import Lateral from './app/components/template/Lateral';

import Note from './app/components/note/Note';
import Terminal from './app/components/terminal/Terminal';

import Home from './app/landing/home/Home';
import About from './app/landing/About';
import Projects from './app/landing/projects/Projects';
import ProjectDetail from './app/landing/projectDetail/ProjectDetail';
import Error from './app/landing/Error';

import './assets/css/style.css';

function App() {
  return (
    <>
      <Header />

      <Lateral />

      <Note />

      <main>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:name' element={<ProjectDetail />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </main>

      <Terminal />
    </>
  );
}

export default App;
