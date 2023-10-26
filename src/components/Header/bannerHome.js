import {  Grid } from "@mui/material";
import React,{useState} from "react";
import Typewriter from "typewriter-effect";
import Atropos from "atropos/react";

import BannerImage from "../../assets/svg/bannerImage.svg";
import ZigZag from "../../assets/svg/animated/zig-zag.svg";
import Bubble from "../../assets/svg/animated/bubble.svg";
import Arrow from "../../assets/svg/animated/arrow.svg";
import UpArrow from '../../assets/svg/icons/up-arrow.svg'
import WhatsApp from '../../assets/svg/icons/whatsapp.svg'
// Initialize
import {  TopBottomAnimtedBox,
  LeftRightAnimtedBox,} from '../../core/animation/index.styles'

import {
  CustomBox,
  CustomTypography,
  DescriptionText,
  StartedButton,
  ChoiceTypography,
  AnimateTypography,
  TextBox,
  CustomSpan,
  ArrowBtn,
  WhatsAppBtn
} from "./bannerHome.styles";

export default function Header() {
  const [position,setposition]=useState(0)
  window.onscroll = function (e) {
  setposition(window.scrollY)// Value of scroll Y in px
};
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      const startPosition = window.pageYOffset;
      const distance = 1- startPosition;
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
      
      scrollToElement(nav);
    }
  };

  return (
    <CustomBox>
    
        <ArrowBtn sx={{display:position >400 ? 'flex':'none'}}  onClick={()=>handleNavLinkClick("top")}>
       <img src={UpArrow} alt="up-arrow" />
      </ArrowBtn>

      
      
      <WhatsAppBtn>
        <img src={ WhatsApp} alt="whatsApp icon" />
      </WhatsAppBtn>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <TopBottomAnimtedBox
            sx={{
              left: "5%",
              display: { lg: "block", md: "none", sm: "none", xs: "none" },
            }}
          >
            <img src={Bubble} alt="background" />
          </TopBottomAnimtedBox>
          <TextBox>
            <CustomTypography id="top">Hi, we are</CustomTypography>
            <DescriptionText>
              Cost <br />
              <CustomSpan> Estimation </CustomSpan>
            </DescriptionText>
            <ChoiceTypography>
              Perfect choice for your estimation projects...
            </ChoiceTypography>
            <AnimateTypography>
              <Typewriter
                options={{
                  strings: ["Commercial", "Industrial", "Material Takeoff"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </AnimateTypography>

            <StartedButton>Get Started   <LeftRightAnimtedBox sx={{top:"3rem",right:"90%"}} >
              <img src={Arrow} alt="background" />
            </LeftRightAnimtedBox></StartedButton>
          
          </TextBox>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sm={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              lg: "end",
              md: "end",
              sm: "center",
              xs: "center",
            },
          }}
        >
    
          <Atropos
              activeOffset={40}
              shadowScale={1.05}
              shadow={false}
              highlight={false}
            >
             <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={BannerImage}
                    alt="Home image"
                  />
            </Atropos>
  
          <TopBottomAnimtedBox sx={{ top: "8rem", right: "5%" }}>
            <img src={ZigZag} alt="animted image" />
          </TopBottomAnimtedBox>
        </Grid>
      </Grid>
    </CustomBox>
  );
}
