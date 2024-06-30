import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { About } from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader loading={loading} /> 
      ) : (
        <>
          <CustomCursor />
          <NavBar />
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
