import React from "react";

import { Box, Grid, List, Divider } from "@mui/material";

import DottedLine from "../../assets/svg/animated/dotted-line.svg";
import ZigZag from "../../assets/svg/animated/zig-zag.svg";
import FacebookIcon from "../../assets/svg/icons/facebook.svg";
import LinkedInIcon from "../../assets/svg/icons/linkedIn.svg";
import PinterestIcon from "../../assets/svg/icons/pinterst.svg";
import TwitterIcon from "../../assets/svg/icons/twitter.svg";
import GoogleIcon from "../../assets/svg/icons/googlePlus.svg";
import Send from "../../assets/svg/icons/send.svg";
import BrandLogo from "../../assets/svg/brandLogo.svg";
import {
  LeftRightAnimtedBox,
  TopBottomAnimtedBox,
} from "../../core/animation/index.styles";

import {
  FooterText,
  HeaderListItemText,
  ChildListItemText,
  FooterMainBox,
  FooterLogoBox,
  FooterGrid,
  MainGrid,
  FooterIconBoxDesktop,
  CustomListItem,
  ContactTypography,
  EmailTypography,
  FooterTextAbout,
  PrivacyText,
  TermsText,
  CopyTypography,
  SendButton,
  CustomTextField,
  HeaderListText,
} from "./index.styles";

function Footer() {
  return (
    <FooterMainBox>
      <TopBottomAnimtedBox sx={{ right: "5%" }}>
        <img src={DottedLine} alt="dotted line" />
      </TopBottomAnimtedBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "1rem",
          flexDirection: { md: "row", sm: "row", xs: "column" },
        }}
      >
        <Box>
          <img
            src={BrandLogo}
            style={{ height: "auto", width: { xl: "100%", xs: "4rem" } }}
            alt="brand logo"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: { xs: "1rem" },
          }}
        >
          <ContactTypography>Contact Us: </ContactTypography>
          <EmailTypography>contact@realock.com</EmailTypography>
        </Box>
      </Box>
      <Divider
        light
        sx={{ border: "1px solid #7C7C7C", marginBottom: "0.5rem" }}
      />
      <MainGrid container>
        <Grid
          item
          xl={4}
          lg={4}
          md={12}
          xs={12}
          sm={12}
          sx={{ position: "relative" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FooterLogoBox>
              <FooterTextAbout>About</FooterTextAbout>
            </FooterLogoBox>

            <FooterText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </FooterText>
      
            <FooterIconBoxDesktop>
              <img src={FacebookIcon} alt="fb icon" />
              <img src={LinkedInIcon} alt="linknedIn icon" />
              <img src={PinterestIcon} alt="pinterst icon" />
              <img src={TwitterIcon} alt="twitter icon" />
              <img src={GoogleIcon} alt="google icon" />
            </FooterIconBoxDesktop>
       
          </Box>
        </Grid>
        <FooterGrid item xl={4} lg={2} md={2} xs={12} sm={3}>
          <Box>
            <List>
              <CustomListItem>
                <HeaderListItemText>Company</HeaderListItemText>
              </CustomListItem>
              <CustomListItem>
                <ChildListItemText>Home</ChildListItemText>
              </CustomListItem>
              <CustomListItem>
                <ChildListItemText>About</ChildListItemText>
              </CustomListItem>
              <CustomListItem>
                <ChildListItemText>Services</ChildListItemText>
              </CustomListItem>
              <CustomListItem>
                <ChildListItemText>Testimonial</ChildListItemText>
              </CustomListItem>
              <CustomListItem>
                <ChildListItemText>Experiences</ChildListItemText>
              </CustomListItem>
              <CustomListItem>
                <ChildListItemText>Todo</ChildListItemText>
              </CustomListItem>
            </List>
          </Box>
        </FooterGrid>
        <Grid
          item
          xl={4}
          lg={6}
          md={10}
          xs={12}
          sm={9}
          sx={{ paddingTop: "1rem" }}
        >
          <HeaderListText sx={{ textAlign: "left" }}>NewsLetter</HeaderListText>
          <Box sx={{ marginTop: "1rem", display: "flex" }}>
            <CustomTextField
              placeholder="Write a message"
              inputProps={{
                style: {
                  height: "0.5rem",
                  width: { lg: "5rem", xs: "2rem", sm: "2rem" },
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  background: "#D9D9D9",
                },
              }}
            />
            <SendButton>
              <img src={Send} alt="submit icon" />
            </SendButton>
          </Box>
        </Grid>
      </MainGrid>
      <Divider
        light
        sx={{
          border: "1px solid #7C7C7C",
          marginBottom: "0.5rem",
          marginTop: "0.5rem",
        }}
      />

      {/* // */}
      <Grid container spacing={1} sx={{ marginTop: "20px" }}>
        <Grid
          item
          xl={10}
          xs={12}
          sm={6}
          order={{ xs: 2, sm: 1 }}
          sx={{ textAlign: { sm: "start", xs: "center" } }}
        >
          <CopyTypography>
            Copyright©Realock 2022. All Rights Reserved.
          </CopyTypography>
        </Grid>
        <Grid
          item
          xl={2}
          xs={12}
          sm={6}
          order={{ xs: 1, sm: 2 }}
          sx={{ textAlign: { sm: "end", xs: "center" } }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <PrivacyText>Privacy Policy</PrivacyText>
            <TermsText>Terms & Conditions</TermsText>
          </Box>
        </Grid>
      </Grid>
      <LeftRightAnimtedBox
        sx={{
          bottom: "1rem",
          left: "5%",
          display: { lg: "block", md: "none", sm: "none", xs: "none" },
        }}
      >
        <img src={ZigZag} alt="background" />
      </LeftRightAnimtedBox>
    </FooterMainBox>
  );
}

export default Footer;
