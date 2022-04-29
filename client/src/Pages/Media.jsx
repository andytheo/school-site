import React, { useState } from 'react';
import AppNavBar from '../components/Navbar/Nav';
import TransparentHeader from '../components/props/TransparentHeader';
import Footer from '../components/home/Footer';


import "../css/Gallery.css"
import "../css/styles.css"

import img1 from '../images/Pecuty-2/IMG-20211024-WA0015.jpg';
import img2 from '../images/Pecuty-2/IMG-20211024-WA0018.jpg';
import img3 from '../images/Pecuty-2/IMG-20211024-WA0022.jpg';
import img4 from '../images/Pecuty-2/IMG-20211024-WA0028.jpg';
import img5 from '../images/Pecuty-2/IMG-20211024-WA0034.jpg';
import img6 from '../images/Pecuty-2/IMG-20211024-WA0036.jpg';

import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Media = () => {

    let data = [
        {
            id: 1,
            imgSrc: img1
        },
        {
            id: 2,
            imgSrc: img2
        },
        {
            id: 3,
            imgSrc: img3
        },
        {
            id: 4,
            imgSrc: img4
        },
        {
            id: 5,
            imgSrc: img5
        },
        {
            id: 6,
            imgSrc: img6
        }
]

const [modal, setModal] = useState(false);
const [tempImgSrc, setTempImgSrc] = useState('');

const getImg = (imgSrc) => {
  setTempImgSrc(imgSrc);
  setModal(true);
}

  return (
    <>
    <AppNavBar />
    <TransparentHeader text="Pictures" />
    <main className='main-photo-page'>
      <h2 className='green-underline'>Graduation Pictures</h2>
      <section className={modal ? "modal open" : "modal"}>
        <img src={tempImgSrc} alt="Graduation pictures" />
        <CloseIcon className="closeModal text-white" onClick={() => setModal(false)} />
        <ArrowForwardIosIcon className='text-white nextPicture' />
        <ArrowBackIosNewIcon className='text-white prevPicture' />

      </section>
      <section className='gallery'>
        {
          data.map((item, index) => {
            return(
              <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} style={{width: "100%"}} alt="photos" />
              </div>
            )
          })
        }
      </section>
      </main>
      <Footer />
    </>
  )
}

export default Media