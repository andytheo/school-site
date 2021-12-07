import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Home';
import Contacts from './Contact';
import About from './About';
import Admissions from './Admissions';
import Portal from './Portal';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { Routes, Route} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


// import './css/bootstrap.min.css';
// import './css/style.css';

function App() {
  Aos.init();
  return (
    <div>
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/admissions" element={<Admissions/>}/>
        <Route exact path="/contact" element={<Contacts/>}/>
        <Route exact path="/portal" element={<Portal/>}/>
      </Routes>
    </div>
  );
}

export default App;
