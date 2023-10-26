import React from "react";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";

import BlueBeam from "../../assets/svg/toolIcon/bluebeam.svg";
import Vision from "../../assets/svg/toolIcon/vision.svg";
import Quest from "../../assets/svg/toolIcon/quest.svg";
import Maccromic from "../../assets/svg/toolIcon/maccromic.svg";
import Xactimate from "../../assets/svg/toolIcon/xactimate.svg";
import DottedLine from "../../assets/svg/animated/dotted-line.svg";
import { TopBottomAnimtedBox } from "../../core/animation/index.styles";

import {
  FirstBoxTech,
  Heading1Tech,
  Heading2Tech,
  SubTextTech,
  SecondBoxTech,
} from "./tools.styles";

const icons = [BlueBeam, Vision, Quest, Maccromic, Xactimate];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1200, min: 900 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Tools = () => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <FirstBoxTech>
        <TopBottomAnimtedBox sx={{ top: "0" }}>
          <img width="100%" height="auto" src={DottedLine} alt="background" />
        </TopBottomAnimtedBox>
        <Heading1Tech>Tools of the Trade</Heading1Tech>
        <Heading2Tech>Exploring Estimation & Design</Heading2Tech>
        <SubTextTech>
          We are using the market's latest tools and technologies for accurate
          and professional Services.
        </SubTextTech>
      </FirstBoxTech>
      <SecondBoxTech>
        <Carousel
          swipeable={false}
          draggable={false}
          arrows={false}
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {icons.map((elem, index) => {
            return <img src={elem} key={index} alt="tools icons" />;
          })}
        </Carousel>
      </SecondBoxTech>
    </Box>
  );
};

export default Tools;
