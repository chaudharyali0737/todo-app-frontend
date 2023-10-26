import { Grid } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import Atropos from "atropos/react";

import AboutImage from "../../assets/svg/aboutMainImg.svg";
import Lines from "../../assets/svg/animated/lines.svg";
import Dots from "../../assets/svg/animated/dots.svg";
import Arrow from "../../assets/svg/animated/arrow2.svg";
import {
  TopBottomAnimtedBox,
  LeftRightAnimtedBox,
} from "../../core/animation/index.styles";

import {
  MainTextAbout,
  TitleTextAbout,
  DescTextAbout,
  TextBoxAbout,
  WrapperBoxAbout,
  PlanButton,
} from "./about.styles";

const About = () => {
  return (
    <WrapperBoxAbout id="about" sx={{ position: "relative" }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <TopBottomAnimtedBox
            sx={{ left: "5%", display: { md: "block", xs: "none" } }}
          >
            <img src={Dots} alt="background" />
          </TopBottomAnimtedBox>
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeIn", duration: 0.8 }}
          >
            <TextBoxAbout>
              <MainTextAbout>About Us</MainTextAbout>
              <TitleTextAbout>Dedicated Estimator</TitleTextAbout>
              <DescTextAbout>
                We love to provide you a dedicated cost estimator. We can assign
                an expert individual for your commercial and residential
                construction projects and you can get benefits from our dedicate
                cost estimates. Feel free to get the quality estimating
                consultancy at a low price tag.Our aim to provide the high
                quality and accurate estimates.We use a combination of a cost
                database and our experience to price your projects based on the
                zip code of your project.Pricing for labor and material varies
                by area and zip code, so we make adjustments for local labor
                rates, material pricing, and even look at the area’s property
                value to determine accurate pricing.
              </DescTextAbout>
            </TextBoxAbout>
          </motion.div>
          <PlanButton>
            UPLOAD PLAN{" "}
            <LeftRightAnimtedBox sx={{ right: "-5rem", top: "0.2rem" }}>
              <img src={Arrow} alt="background" />
            </LeftRightAnimtedBox>
          </PlanButton>
        </Grid>
        <Grid
          item
          xl={4}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeIn", duration: 0.8 }}
          >
            <Atropos
              activeOffset={40}
              shadowScale={1.05}
              shadow={false}
              highlight={false}
            >
              <img
                src={AboutImage}
                style={{ height: "auto", maxWidth: "100%" }}
                alt="about-image"
              />
            </Atropos>
          </motion.div>
          <TopBottomAnimtedBox sx={{ top: "0", right: "5%" }}>
            <img src={Lines} alt="background" />
          </TopBottomAnimtedBox>
        </Grid>
      </Grid>
    </WrapperBoxAbout>
  );
};

export default About;
