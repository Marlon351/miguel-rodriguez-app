import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../services/strapi";

const ImgSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    pauseOnHover: false,
  };

  const homePageData = useFetch("https://tranquil-citadel-56220-32a830561abf.herokuapp.com/api/home-page?populate=*")?.data;
  const sliderImagesData =  homePageData?.attributes?.Slider?.data;

  return (
    <Carousel {...settings}>
      {sliderImagesData?.map((image) => (
        <img src={`https://tranquil-citadel-56220-32a830561abf.herokuapp.com${image.attributes.url}`} alt={image.attributes?.name}/>
      ))}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

export default ImgSlider;
