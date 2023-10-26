import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

import Bubble from "../../assets/svg/animated/bubble.svg";
import DottedLine from "../../assets/svg/animated/dotted-line.svg";
import {
  LeftRightAnimtedBox,
  TopBottomAnimtedBox,
} from "../../core/animation/index.styles";

import {
  CustomProgressBar,
  FirstBox,
  MainBox,
  ProgressDiv,
  ProgressTypography,
  SecondBox,
  FirstTextExp,
  SecondTextExp,
  ThirdTextExp,
  TextBarWrapper,
  ValueText,
} from "./experience.styles";

const AnimatedCustomProgressBar = ({ value }) => {
  const progressBarRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!animationPlayed) {
            entry.target.classList.add("animated");
            setAnimationPlayed(true);
          }
        }
      });
    }, options);

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [animationPlayed]);

  return (
    <CustomProgressBar
      ref={progressBarRef}
      variant="determinate"
      value={value}
      color="success"
    />
  );
};

const Experience = () => {
  return (
    <MainBox>
      <Grid
        container
        spacing={2}
        sx={{
          zIndex: "-1",
          display: "flex",
          flexDirection: {
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          },
        }}
      >
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ position: "relative" }}
        >
          <LeftRightAnimtedBox
            sx={{
              top: { xl: "0" },
              left: "-8%",
              bottom: { sm: "0", xs: "-3rem" },
            }}
          >
            <img src={Bubble} alt="background" />
          </LeftRightAnimtedBox>

          <FirstBox>
            <ProgressDiv>
              <TextBarWrapper>
                <ProgressTypography>Construction Estimation</ProgressTypography>
                <ValueText>90%</ValueText>
              </TextBarWrapper>
              <AnimatedCustomProgressBar value={90} color="success" />
              <TextBarWrapper>
                <ProgressTypography>Commercial Estimation</ProgressTypography>
                <ValueText>80%</ValueText>
              </TextBarWrapper>
              <AnimatedCustomProgressBar value={80} color="success" />
              <TextBarWrapper>
                <ProgressTypography>Residential Estimation</ProgressTypography>
                <ValueText>85%</ValueText>
              </TextBarWrapper>
              <AnimatedCustomProgressBar value={85} color="success" />
              <TextBarWrapper>
                <ProgressTypography>Industrial Estimation</ProgressTypography>
                <ValueText>95%</ValueText>
              </TextBarWrapper>
              <AnimatedCustomProgressBar value={95} color="success" />
            </ProgressDiv>
          </FirstBox>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ position: "relative" }}
        >
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 1,
              delay: "0.5",
            }}
          >
            <SecondBox>
              <FirstTextExp>Our</FirstTextExp>
              <SecondTextExp>Experience</SecondTextExp>
              <ThirdTextExp>
                APS Estimation aim is to facilitate people with the best
                construction cost estimating services. Therefore, our skilled
                team of estimators assists our clients with precise estimations
                to win bids for every project.Our seasoned estimators are
                proficient enough to give you the exact estimates for material
                takeoff services.
              </ThirdTextExp>
            </SecondBox>
          </motion.div>
          <TopBottomAnimtedBox sx={{ right: "5%", top: "0" }}>
            <img src={DottedLine} alt="background" />
          </TopBottomAnimtedBox>
        </Grid>
      </Grid>
    </MainBox>
  );
};

export default Experience;
