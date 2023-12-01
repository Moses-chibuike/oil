import React, {useState } from 'react'
import './imageslider.css'
import Slider from 'react-slick'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image1 from '../../../assets/img1.jpg'
import Image2 from '../../../assets/img2.jpg'
import Image3 from '../../../assets/img3.jpg'
import Image4 from '../../../assets/img4.jpg'
import Image5 from '../../../assets/img5.jpg'
import Image6 from '../../../assets/img6.jpg'
import Image7 from '../../../assets/img7.jpg'
import Image8 from '../../../assets/img8.jpg'
import Image9 from '../../../assets/img9.jpg'
import Image10 from '../../../assets/img10.jpg'
import Image11 from '../../../assets/img11.jpg'
import Image12 from '../../../assets/img12.jpg'
import Image13 from '../../../assets/img13.jpg'

const Images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13]

const ImageSlider = () => {
    const NextArrow = ({ onClick }) => {
        return (
    <div className="arrow next" onClick={onClick}>
    <FaArrowRight />
  </div>
);
};

const PrevArrow = ({ onClick }) => {
return (
  <div className="arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);
};

const [imageIndex, setImageIndex] = useState(0);

const settings = {
  infinite: true,
  lazyLoad: true,
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  beforeChange: (current, next) => setImageIndex(next),
};

return (
  <div className="slider">
    <Slider {...settings}>
      {
      Images.map((img, idx) => (
        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
          <img src={img} alt={img} />
        </div>
      ))}
    </Slider>
        </div>
    )
}

export default ImageSlider
