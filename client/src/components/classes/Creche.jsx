import React from 'react';
import HeaderImage from "../props/classes/Header-image";
import Intro from "../props/classes/Intro";
// import Nav from '../home/Nav';
import Footer from '../home/Footer';

const Creche = () => {
    return (
        <div>
          {/* <Nav /> */}
          <HeaderImage
            headerStyling='p-5 text-center bg-image creche-header-image'
          classTitle="CRECHE"/>
          <Intro
          title="Creche"
          firstParagraph="Sed sit amet euismod arcu. Maecenas tincidunt at nibh sit amet porttitor.
          Etiam fermentum malesuada ex, non facilisis ligula tempor ut. Proin tincidunt accumsan faucibus.
          Phasellus consequat nulla rhoncus vulputate volutpat. Nam rutrum ultrices tellus.
          Ut sodales sapien nec eros pulvinar, at placerat elit ullamcorper. "
          secondParagraph="Ut et viverra risus. Maecenas eu dui non ligula porta auctor non vitae metus.
          Fusce vitae mollis augue, a ultricies tellus. Donec in tortor sapien."
        />
        <Footer />
        </div>
    )
}

export default Creche;
