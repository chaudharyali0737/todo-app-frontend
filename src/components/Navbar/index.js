import React from "react";
import { Box, Toolbar, } from "@mui/material";

import DrawerComp from "./drawer/drawer";
import BrandLogo from "../../assets/svg/brandLogo.svg";

import {
  CustomButton,
  CustomButtonContact,
  LogoBox,
  CustomAppBar,
  DrawerWrapperBox,
} from "./index.styles.js";

const navLink = [
  {
    id: "Home",
    secondaryId: "home",
  },
  {
    id: "About Us",
    secondaryId: "about",
  },
  {
    id: "Services",
    secondaryId: "services",
  },
  {
    id: "Portfolio",
    secondaryId: "portfolio",
  },
  {
    id: "Testimonial",
    secondaryId: "testimonial",
  },

];
const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  console.log("hello",element)

  if (element) {
    const startPosition = window.pageYOffset;
    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTimestamp;
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration)
      );
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }
    // Easing function for smoother animation
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }
    requestAnimationFrame(step);
  }
};
const handleNavLinkClick = (nav) => {
  if (document) {
    
    scrollToElement(nav.secondaryId);
  }
};
const handleNavButtonClick = (nav) => {
  if (document) {
    
    scrollToElement(nav);
  }
};

const Navbar = () => {
  return (
    <CustomAppBar >

      <Toolbar sx={{ padding: "0px !important", marginRight: "1rem" }}>
        <LogoBox className="Logo">
          <img src={BrandLogo} alt="brand-logo" />
        </LogoBox>
        <DrawerWrapperBox
          sx={{
            display: {
              md: "flex",
              sm: "flex",
              xs: "flex",
              xl: "none",
              lg: "none",
            },
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <DrawerComp />
        </DrawerWrapperBox>
        <Box
          sx={{
            marginLeft: "auto",
            display: {
              xl: "flex",
              lg: "flex",
              md: "none",
              sm: "none",
              xs: "none",
            },
            gap: { xl: "30px", lg: "15px", md: "5px", sm: "5px" },
          }}
        >
          {navLink.map((elem) => {
            return (
              <CustomButton
                color="inherit"
                onClick={()=>handleNavLinkClick(elem)}
              >
                {elem.id}
              </CustomButton>
            );
          })}
          <CustomButtonContact
            color="inherit"
            onClick={()=>handleNavButtonClick("contact")}
          >
            Get in Touch
          </CustomButtonContact>
        </Box>
      </Toolbar>

    </CustomAppBar>
  );
};

export default Navbar;
