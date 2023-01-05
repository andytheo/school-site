import React from "react";
import ImagesProps from "./ImagesProps";

import img1 from "../../images/cultural/1.jpg";
import img2 from "../../images/cultural/2.jpg";
import img3 from "../../images/cultural/3.jpg";
import img4 from "../../images/cultural/4.jpg";
import img5 from "../../images/cultural/5.jpg";
import img6 from "../../images/cultural/6.jpg";
import img7 from "../../images/cultural/7.jpg";
import img8 from "../../images/cultural/8.jpg";
import img9 from "../../images/cultural/9.jpg";
import img10 from "../../images/cultural/10.jpg";
import img11 from "../../images/cultural/11.jpg";
import img12 from "../../images/cultural/12.jpg";
import img13 from "../../images/cultural/13.jpg";

const Cultural = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
  ];
  return (
    <>
      <ImagesProps data={data} title="Cultural Day Celebration" />
    </>
  );
};

export default Cultural;
