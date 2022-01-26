import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Home';
import Contacts from './Contact';
import About from './About';
import Admissions from './Admissions';
import Portal from './Portal';
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import MyNotes from "./screens/MyNotes/MyNotes";
import LandingPage from "./screens/LandingPage/LandingPage";
import Aos from 'aos';
import 'aos/dist/aos.css';
import AdminLayout from "./layouts/Admin.js";

import { Routes, Route, Switch } from 'react-router-dom';

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
        {/* <Route exact path="/nav" element={<AppNavBar/>}/> */}
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/admissions" element={<Admissions/>}/>
        <Route exact path="/contact" element={<Contacts/>}/>
        <Route exact path="/portal" element={<Portal/>}/>
        <Route exact path="/login" element={<LoginScreen/>}/>
        {/* <Route exact path="/login" element={<LoginScreen/>}/> */}
        <Route
        exact
        path='/admin'
        render={props => <AdminLayout {...props} />}
      />
        <Route exact path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route exact path="/register" element={<RegisterScreen/>}/>
        <Route
          exact path="/mynotes"
          element={
            <MyNotes/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
