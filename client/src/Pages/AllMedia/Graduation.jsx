import React from "react";
import ImagesProps from "./ImagesProps";

import img1 from "../../images/Pecuty-2/IMG-20211024-WA0015.jpg";
import img2 from "../../images/Pecuty-2/IMG-20211024-WA0018.jpg";
import img3 from "../../images/Pecuty-2/IMG-20211024-WA0022.jpg";
import img4 from "../../images/Pecuty-2/IMG-20211024-WA0028.jpg";
import img5 from "../../images/Pecuty-2/IMG-20211024-WA0034.jpg";
import img6 from "../../images/Pecuty-2/IMG-20211024-WA0036.jpg";

import img7 from "../../images/graduation/1.JPG";
import img8 from "../../images/graduation/2.JPG";
import img9 from "../../images/graduation/3.JPG";
import img10 from "../../images/graduation/4.JPG";
import img11 from "../../images/graduation/5.JPG";
import img12 from "../../images/graduation/6.JPG";
import img13 from "../../images/graduation/7.JPG";
import img14 from "../../images/graduation/8.JPG";
import img15 from "../../images/graduation/9.JPG";
import img16 from "../../images/graduation/10.JPG";
import img17 from "../../images/graduation/11.JPG";
import img18 from "../../images/graduation/12.JPG";
import img19 from "../../images/graduation/13.JPG";

const Graduation = () => {
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
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
  ];
  return (
    <>
      <ImagesProps data={data} title="Graduation Pictures" />
    </>
  );
};

export default Graduation;
