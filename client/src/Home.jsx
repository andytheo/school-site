import React from 'react';
import Header from './components/home/Header';
import Nav from './components/home/Nav';
// import Intro from './components/home/Intro';

import AppNavBar from './components/Navbar/Nav';
import About from './components/home/About';
import Classes from './components/home/Classes';
import WhyChooseUs from './components/home/Why-Choose-Us';
import MissionVision from './components/home/Mission-Vision';
// import Motto from './components/home/Motto';
import Footer from './components/home/Footer';
import Events from './components/home/Events';


// import './css/bootstrap.min.css';
// import './css/style.css';

function Home() {
  return (
    <div>
      <AppNavBar />
      <Header />
      <About />
      {/* <Intro /> */}
      <Classes />
      <MissionVision />
      <WhyChooseUs />
      <Events />
      {/*<Motto />*/}
      <Footer />
    </div>
  );
}

export default Home;
