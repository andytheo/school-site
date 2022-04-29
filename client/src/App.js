import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Pages/Home';
import Contacts from './Pages/Contact';
import About from './Pages/About';
import Creche from './components/classes/Creche';
import Nursery from './components/classes/Nursery';
import Primary from './components/classes/Primary';
import Secondary from './components/classes/Secondary';
import Admissions from './Pages/Admissions';
import Media from './Pages/Media';
import Anthem from './Pages/Anthem';
import Portal from './Pages/Portal';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Routes, Route } from 'react-router-dom';

function App() {
  Aos.init();
  return (
    <div>
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path="/nav" element={<AppNavBar/>}/> */}
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/admissions" element={<Admissions/>}/>
        <Route exact path="/anthem" element={<Anthem/>}/>
        <Route exact path="/contact" element={<Contacts/>}/>
        <Route exact path="/media" element={<Media/>}/>

        {/* CLASSES */}
        <Route exact path="/creche" element={<Creche/>}/>
        <Route exact path="/nursery" element={<Nursery/>}/>
        <Route exact path="/primary" element={<Primary/>}/>
        <Route exact path="/secondary" element={<Secondary/>}/>


        <Route exact path="/portal" element={<Portal/>}/>
      </Routes>
    </div>
  );
}

export default App;