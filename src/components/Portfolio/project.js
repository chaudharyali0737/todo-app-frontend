import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import PortfolioImage from "../../assets/svg/projectImg.svg";
import Dots from "../../assets/svg/animated/dots.svg";
import Bubble from "../../assets/svg/animated/bubble.svg";
import BlackDots from "../../assets/svg/animated/black-dots.svg";
import {
  TopBottomAnimtedBox,
  LeftRightAnimtedBox,
} from "../../core/animation/index.styles";

import {
  ProjectMainBox,
  MaineGrid,
  MainCustomBox,
  FeatureMainHeadingBox,
  HomeFeatureMainHeading,
  HomeFeatureSubText,
  CustomButton,
  StyledInnerBox,
  CustomTypographyName,
} from "./project.styles";

const api = [
  {
    id: 1,
    img: PortfolioImage,
    name: "Multi-Vendor ",
    category: "Commercial",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 2,
    img: PortfolioImage,
    name: "ID FLOW",
    category: "Residential",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 3,
    img: PortfolioImage,
    name: "Store Android App",
    category: "Industrial",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 4,
    img: PortfolioImage,
    name: "Multi-Vendore Android App",
    category: "Industrial",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 5,
    img: PortfolioImage,
    name: "ID FLOW",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 6,
    img: PortfolioImage,
    name: " Android App",
    category: "Residential",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 7,
    img: PortfolioImage,
    name: "ID FLOW",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 8,
    img: PortfolioImage,
    name: "Multi-Vendor ",
    category: "Industrial",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 9,
    img: PortfolioImage,
    name: "ID FLOW",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 10,
    img: PortfolioImage,
    name: "Multi-Vendor Store Android ",
    category: "Residential",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 11,
    img: PortfolioImage,
    name: "Multi-Vendor Android App",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 12,
    img: PortfolioImage,
    name: "ID FLOW",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 13,
    img: PortfolioImage,
    name: "Multi-Vendor  App",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 14,
    img: PortfolioImage,
    name: "Multi-Vendor  App",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 15,
    img: PortfolioImage,
    name: "ID FLOW",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 16,
    img: PortfolioImage,
    name: "Multi-Vendor  App",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 17,
    img: PortfolioImage,
    name: "ID FLOW",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
  {
    id: 18,
    img: PortfolioImage,
    name: "Multi-Vendor  App",
    category: "Quantity Takeoff",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries but also the leapinto electronic typesetting remaining essentially unchanged",
  },
];
const categoryButtons = [
  { name: "All Work" },
  { name: "Commercial" },
  { name: "Residential" },
  { name: "Industrial" },
  { name: "Quantity Takeoff" },
];
const Project = () => {
  const [data1, setData1] = useState(api.slice(0, 8));
  const [active, setActive] = useState("All Work");
  const [numProjectsToShow] = useState(8);
  const [filterProjects, setFilterProject] = useState(api.length);

  useEffect(() => {
    if (active === "All Work") {
      setData1(api.slice(0, numProjectsToShow));
      return;
    }
    const filteredProjects = api.filter((ele) => ele.category === active);
    const length1 = filteredProjects.length;
    setFilterProject(length1);
    setData1(filteredProjects.slice(0, numProjectsToShow));
  }, [active]);

  return (
    <Box
      sx={{
        background: " #222",
        paddingTop: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
      id="portfolio"
    >
      <FeatureMainHeadingBox className="navbarAnimation">
        <TopBottomAnimtedBox sx={{ right: "5%" }}>
          <img src={Dots} alt="background" />
        </TopBottomAnimtedBox>
        <HomeFeatureMainHeading> Portfolio</HomeFeatureMainHeading>
        <HomeFeatureSubText>Our Related Work</HomeFeatureSubText>
      </FeatureMainHeadingBox>
      <Grid
        container
        sx={{
          padding: { md: "0 10%", xs: "0 0" },
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {categoryButtons.map((button, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <CustomButton
              key={index}
              variant="outlined"
              onClick={() => setActive(button.name)}
              sx={{
                background: button.name == active ? "#D8D6BF" : "",
                color: button.name === active ? "black" : "",
              }}
            >
              {button.name}
            </CustomButton>
          </Grid>
        ))}
      </Grid>


      <ProjectMainBox sx={{ padding: { xs: "0 10%", md: "0 0", lg: "0 10%" } }}>
        <MaineGrid container sx={{ justifyContent: "center" }}>
          {data1.map((elem, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ cursor: "pointer" }}
                key={index}
              >
                <motion.div
                  key={elem.id}
                  initial={{ opacity: 0, y: 10, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 50, damping: 9 }}
                  layout
                >
                  <MainCustomBox>
                    <StyledInnerBox id="ani">
                      <Box className="animate">
                        <CustomTypographyName>
                          {elem.category}
                        </CustomTypographyName>
                      </Box>
                    </StyledInnerBox>
                    <Box sx={{ borderRadius: "50px" }}>
                      <img src={elem.img} sizes="100vw" id="image" alt="project-image" />
                    </Box>
                  </MainCustomBox>
                </motion.div>
              </Grid>
            );
          })}
          <TopBottomAnimtedBox sx={{ right: "5%", bottom: "10rem" }}>
            <img src={Bubble} alt="background" />
          </TopBottomAnimtedBox>
          <LeftRightAnimtedBox
            sx={{
              left: "5%",
              bottom: "10rem",
              display: { sm: "none", xs: "none" },
            }}
          >
            <img src={BlackDots} alt="background" />
          </LeftRightAnimtedBox>
        </MaineGrid>
        {data1.length !== filterProjects ? (
          <Box sx={{ textAlign: "center" }}></Box>
        ) : (
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontWeight: "bolder", textAlign: "center" }}>
              You have seen all projects!
            </Typography>
          </Box>
        )}
      </ProjectMainBox>

    </Box>
  );
};
export default Project;
