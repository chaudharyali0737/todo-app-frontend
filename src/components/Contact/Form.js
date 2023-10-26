import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import Location from "../../assets/svg/icons/location.svg";
import Email from "../../assets/svg/icons/email.svg";
import Phone from "../../assets/svg/icons/phone.svg";
import DottedLine from "../../assets/svg/animated/dotted-line.svg";
import ZigZag from "../../assets/svg/animated/zig-zag.svg";

import { TopBottomAnimtedBox } from "../../core/animation/index.styles";

import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  ContactWrapperBox,
  MainContainer,
  InfoLogoBox,
  FirstTypography,
  SecondTypography,
  InfoBox,
  CustomBox,
  Heading1Contact,
  Heading2Contact,
  SubTextContact,
  HeadingBoxContact,
  MapBox,
} from "./Form.styles";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <ContactWrapperBox id="contact">
      <TopBottomAnimtedBox sx={{ right: "5%" }}>
        <img src={DottedLine} alt="background" />
      </TopBottomAnimtedBox>
      <HeadingBoxContact>
        <Heading1Contact>Get in Touch</Heading1Contact>
        <Heading2Contact>Let’s Work Together</Heading2Contact>
        <SubTextContact>
          We are using the market's latest tools and technologies for accurate
          and professional Services.
        </SubTextContact>
      </HeadingBoxContact>

      <Container maxWidth="xl">
        <MainContainer>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1 }}
              >
                <CustomBox>
                  <InfoLogoBox>
                    <img src={Location} alt="location icon" />
                  </InfoLogoBox>

                  <InfoBox>
                    <FirstTypography>Visit our Location</FirstTypography>
                    <SecondTypography>
                      Street 36, Silk Bank Plaza Lower Basement, MPCHS E-11/3
                      Islamabad 44000
                    </SecondTypography>
                  </InfoBox>
                </CustomBox>
              </motion.div>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1,delay:0.5 }}
              >
                {" "}
                <CustomBox className="call-box">
                  <InfoLogoBox>
                    <img src={Phone} alt="phone icon" />
                  </InfoLogoBox>

                  <InfoBox>
                    <FirstTypography>Give Us a Call</FirstTypography>
                    <SecondTypography>051-8312580</SecondTypography>
                  </InfoBox>
                </CustomBox>
              </motion.div>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1,delay:1 }}
              >
                <CustomBox className="email-box">
                  <InfoLogoBox>
         
                    <img src={Email} alt="email icon" />
                  </InfoLogoBox>

                  <InfoBox>
                    <FirstTypography>Send Us an Email</FirstTypography>
                    <SecondTypography>meissasoft@gmail.com</SecondTypography>
                  </InfoBox>
                </CustomBox>
              </motion.div>
            </Grid>
          </Grid>
        </MainContainer>
        <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: "0", opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1,delay:0.5 }}
              >
        <Grid
          container
          spacing={6}
          sx={{
            flexWrap: "wrap",
            flexDirection: { md: "row", xs: "column-reverse" },
          }}
        >
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
         
<StyledForm>
              <StyledInput
                label="Name:"
                name="Name"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />

              <StyledInput
                label="Email:"
                name="Email"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
              />
              <StyledTextArea
                placeholder="Your Message:"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  height: "12em",
                  resize: "none",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                  border: "none",
                }}
              />
              <StyledButton
                type="button"
                variant="outlined"
                onClick={handleSubmit}
                className="send-button"
              >
                Send Message
              </StyledButton>
            </StyledForm>
       
            
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        
                  <MapBox>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13606.386280231814!2d74.34701655!3d31.5077711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695897701623!5m2!1sen!2s"
                width="100%"
                height={320}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </MapBox>
  
          
          </Grid>
        </Grid>
        </motion.div>
      </Container>
      <TopBottomAnimtedBox sx={{ left: "5%" }}>
        <img src={ZigZag} alt="background" />
      </TopBottomAnimtedBox>
    </ContactWrapperBox>
  );
};

export default Form;
