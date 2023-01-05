import React from "react";
import ImagesProps from "./ImagesProps";

import img1 from "../../images/students/1.jpg";
import img2 from "../../images/students/2.jpg";
import img3 from "../../images/students/3.jpg";
import img4 from "../../images/students/4.jpg";
import img5 from "../../images/students/5.jpg";
import img6 from "../../images/students/6.jpeg";
import img7 from "../../images/students/7.jpg";
import img8 from "../../images/students/8.jpg";
import img9 from "../../images/students/9.jpg";
import img10 from "../../images/students/10.jpg";
import img11 from "../../images/students/11.jpeg";
import img12 from "../../images/students/12.jpeg";

const Students = () => {
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
  ];
  return (
    <>
      <ImagesProps data={data} title="Our Students" />
    </>
  );
};

export default Students;
