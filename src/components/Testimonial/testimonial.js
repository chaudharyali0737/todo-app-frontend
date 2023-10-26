import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";

import Bubble from "../../assets/svg/animated/bubble.svg";
import CardTestimonial from "../../core/cardTestimonial/card";
import {  TopBottomAnimtedBox,} from '../../core/animation/index.styles'

import {
  WrapperBoxTest,
  Text1Test,
  Text2Test,
  SubTextTest,
} from "./testimonial.styles";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  largeMobile: {
    breakpoint: { max: 680, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Testimonial = () => {
  return (
    <WrapperBoxTest id="testimonial" >
      <Box sx={{ marginLeft: "2rem" }}>
        <Text1Test>What client says?</Text1Test>
        <Text2Test>Testimonial</Text2Test>
        <SubTextTest>
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </SubTextTest>
      </Box>
      <Box sx={{ }}>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
        
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(( index) => {
            return (
            <Box sx={{paddingTop:"4rem"}} key={index}>
              <CardTestimonial/>
            </Box>
           
            )
          })}
        </Carousel>
        <TopBottomAnimtedBox sx={{ right: "5%" }}>
          <img src={Bubble} alt="bubble" />
        </TopBottomAnimtedBox>
      </Box>
    </WrapperBoxTest>
  );
};

export default Testimonial;
