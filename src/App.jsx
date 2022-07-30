import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Stack } from './components/Stack/Stack.jsx';
import { Projects } from './components/Projects/Projects';
import { About } from './components/About/About';
import { Footer } from './components/footer';
import Aos from 'aos';
import 'aos/dist/aos.css'

import React,{useEffect} from 'react';
import './style/App.css';

function App() {
  useEffect(() => {
    Aos.init({duration:1000})
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Stack />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
