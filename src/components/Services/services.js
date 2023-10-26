import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

import Cube from "../../assets/svg/icons/cube.svg";
import Map from "../../assets/svg/icons/map.svg";
import House from "../../assets/svg/icons/house.svg";
import Industrial from "../../assets/svg/icons/factory.svg";
import Bank from "../../assets/svg/icons/bank.svg";
import Calculator from "../../assets/svg/icons/calculator.svg";
import Building from "../../assets/svg/icons/building.svg";
import Person from "../../assets/svg/icons/person.svg";
import Card from "../../core/card";
import DottedLine from "../../assets/svg/animated/dotted-line.svg";
import Bubble from "../../assets/svg/animated/bubble.svg";

import {
  LeftRightAnimtedBox,
  TopBottomAnimtedBox,
} from "../../core/animation/index.styles";

import {
  HeadingServices,
  SubHeadingServices,
  WrapperBoxService,
} from "./services.styles";

const Data = [
  {
    icon: Cube,
    name: "Construction Estimation",
    description:
      "We provide all construction estimating services for our customers. Construction cost, design making expenditures, material cost, and all the other construction estimation services are valuable to mention here.",
  },
  {
    icon: Map,
    name: "Commercial Estimation",
    description:
      "We provide all construction estimating services for our customers. Construction cost, design making expenditures, material cost, and all the other construction estimation services are valuable to mention here.",
  },
  {
    icon: House,
    name: "Residential Estimation",
    description:
      "We provide all construction estimating services for our customers. Construction cost, design making expenditures, material cost, and all the other construction estimation services are valuable to mention here.",
  },
  {
    icon: Industrial,
    name: "Industrial Estimation",
    description:
      "We provide all construction estimating services for our customers. Construction cost, design making expenditures, material cost, and all the mother construction estimation services re valuable to mention here.",
  },
  {
    icon: Bank,
    name: "Quantity Estimation",
    description:
      "We provide all construction estimating services for our customers. Construction cost, design making expenditures, material cost, and all the other construction estimation services are valuable to mention here.",
  },
  {
    icon: Calculator,
    name: "Material Estimation",
    description:
      "We provide all construction estimating services for our customers. Construction cost, design making expenditures, material cost, and all the other construction estimation services are valuable to mention here.",
  },
  {
    icon: Building,
    name: "Building Estimation",
    description:
      "We provide all construction estimating services for our customers. Construction cost, design making expenditures, material cost, and all the other construction estimation services are valuable to mention here.",
  },
  {
    icon: Person,
    name: "Freelance Estimation",
    description:
      "We provide all construction estimating services for our customers. Construction cost, design making expenditures, material cost, and all the other construction estimation services are valuable to mention here.",
  },
  {
    icon: House,
    name: "Single Family Estimation",
    description:
      "We provide all construction estimating services for our customers. Construction cost, design making expenditures, material cost, and all the other construction estimation services are valuable to mention here.",
  },
];
const Services = () => {
  return (
    <WrapperBoxService id="services">
      <TopBottomAnimtedBox sx={{ right: "5%" }}>
        <img src={DottedLine} alt="background" />
      </TopBottomAnimtedBox>
      <HeadingServices>What we are offer?</HeadingServices>
      <SubHeadingServices>Our Services</SubHeadingServices>
      <Grid
        container
        spacing={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {Data.map((elem, index) => {
          const delay = index * 0.1;
          return (
            <Grid item xl={3} lg={4} md={6} sm={6} xs={12} key={index}>
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay }}
              >
                <Card
                  icon={elem.icon}
                  title={elem.name}
                  description={elem.description}
                />
              </motion.div>
            </Grid>
          );
        })}
        <LeftRightAnimtedBox sx={{ right: "5%", top: "50rem" }}>
          <img src={Bubble} alt="background" />
        </LeftRightAnimtedBox>
      </Grid>
    </WrapperBoxService>
  );
};

export default Services;
