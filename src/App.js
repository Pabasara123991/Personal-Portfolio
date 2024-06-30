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
import Loader from './components/Loader'; // Import Loader component

function App() {
  const [loading, setLoading] = useState(true); // Set loading state initially to true

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false); // After 5 seconds, set loading to false
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader loading={loading} /> // Render Loader component when loading is true
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
