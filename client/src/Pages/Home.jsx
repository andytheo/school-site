import React from 'react';
import Header from '../components/home/Header';

import AppNavBar from '../components/Navbar/Nav';
import About from '../components/home/About';
import Classes from '../components/home/Classes';
import WhyChooseUs from '../components/home/Why-Choose-Us';
import MissionVision from '../components/home/Mission-Vision';
import Footer from '../components/home/Footer';
import Events from '../components/home/Events';

function Home() {
  return (
    <div>
      <AppNavBar />
      <main>
      <Header />
      <About />
      {/* <Intro /> */}
      <Classes />
      <MissionVision />
      <WhyChooseUs />
      <Events />
      {/*<Motto />*/}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
