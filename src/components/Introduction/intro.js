import { Grid } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";

import Card from "../../core/card/index";
import Rocket from "../../assets/svg/icons/rocket.svg";
import Heart from "../../assets/svg/icons/heart.svg";
import Thumb from "../../assets/svg/icons/thumb.svg";
import Bubble from "../../assets/svg/animated/bubble.svg";
import ZigZag from "../../assets/svg/animated/zig-zag.svg";
import {
  TopBottomAnimtedBox,
  LeftRightAnimtedBox,
} from "../../core/animation/index.styles";

import {
  WrapperBoxIntro,
  FirstTypography,
  SecondTypography,
  ThirdTypography,
  TextBoxIntro,
  CardWrapperBox,
} from "./intro.styles";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const IntroData = [
  {
    icon: Rocket,
    name: "Fast Estimation",
    description:
      "We know that speed is absolutely of the essence, whilst ensuring absolute accuracy of your projects estimate.",
  },
  {
    icon: Heart,
    name: "Dedication",
    description:
      "We know that speed is absolutely of the essence, whilst ensuring absolute accuracy of your projects estimate.",
  },
  {
    icon: Thumb,
    name: "Accuracy",
    description:
      "We know that speed is absolutely of the essence, whilst ensuring absolute accuracy of your projects estimate.",
  },
];

const Intro = () => {
  return (
    <WrapperBoxIntro id="home" sx={{ position: "relative" }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          },
        }}
      >
        <Grid
          item
          xl={4}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ marginTop: { md: "0", sm: "2rem", xs: "2rem" } }}
        >
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
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
            {IntroData.map((elem, index) => {
              return (
                <CardWrapperBox>
                  <Card
                    icon={elem.icon}
                    title={elem.name}
                    description={elem.description}
                    key={index}
                  />
                </CardWrapperBox>
              );
            })}
          </Carousel>
          <LeftRightAnimtedBox sx={{ left: "5%" }}>
            <img src={ZigZag} width="40px" height="48px" alt="background" />
          </LeftRightAnimtedBox>
        </Grid>
        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <TopBottomAnimtedBox sx={{ top: "5%", right: "5%" }}>
            <img src={Bubble} alt="background" />
          </TopBottomAnimtedBox>
          <TextBoxIntro>
            <FirstTypography>Welcome To</FirstTypography>
            <SecondTypography>ZSJ Estimation</SecondTypography>
            <ThirdTypography>
              We provide unsurpassed professional estimating and takeoff
              services as well as cost validation, expert witness services and
              more. Our skilled team uses the latest software to provide the
              most accurate costs estimates. Our clients enjoy the fastest
              turnaround time in the industry at fees that are extremely
              competitive.
            </ThirdTypography>
          </TextBoxIntro>
        </Grid>
      </Grid>
    </WrapperBoxIntro>
  );
};

export default Intro;
