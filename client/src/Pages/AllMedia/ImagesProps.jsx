import React, { useState } from "react";
import "../../css/Gallery.css";
import "../../css/styles.css";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ImagesProps = ({ data, title }) => {
  const [modal, setModal] = useState(false);
  const [imgNumber, setImgNumber] = useState(0);

  const handleOpenModal = (index) => {
    setModal(true);
    setImgNumber(index);
  };

  const handlePrevImage = () => {
    if (imgNumber === 0) {
      setImgNumber(data.length - 1);
    } else {
      setImgNumber(imgNumber - 1);
    }
  };

  function handleNextImage() {
    if (imgNumber + 1 === data.length) {
      setImgNumber(0);
    } else {
      setImgNumber(imgNumber + 1);
    }
  }

  return (
    <>
      <main className="main-photo-page">
        <h2 className="green-underline">{title}</h2>
        <section className={modal ? "modal open" : "modal"}>
          {modal && (
            <div className="sliderWrap">
              <CloseIcon className="closeModal text-white" onClick={() => setModal(false)} />
              <ArrowForwardIosIcon className="text-white nextPicture" onClick={handleNextImage} />
              <ArrowBackIosNewIcon className="text-white prevPicture" onClick={handlePrevImage} />
              <div className="fullScreenImage">
                <img src={data[imgNumber].imgSrc} alt="" />
              </div>
            </div>
          )}
        </section>
        <section className="gallery">
          {data.map((item, index) => {
            return (
              <div className="pics" key={index} onClick={() => handleOpenModal(index)}>
                <img src={item.imgSrc} style={{ width: "98%" }} alt="photos" />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default ImagesProps;
