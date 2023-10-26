import { Grid } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import Atropos from "atropos/react";

import FeatureImg from "../../assets/svg/featureImg.svg";
import Clock from "../../assets/svg/icons/clock.svg";
import Auction from "../../assets/svg/icons/auction.svg";
import Thumb from "../../assets/svg/icons/thumbBlack.svg";
import ZigZag from "../../assets/svg/animated/zig-zag.svg";
import DottedLine from "../../assets/svg/animated/dotted-line.svg";
import {  TopBottomAnimtedBox,
  LeftRightAnimtedBox,} from '../../core/animation/index.styles'

import {
  WrapperBoxFeat,
  MainHeading1,
  MainHeading2,
  SubText,
  IconTextBox,
  IconBoxFeat,
  TextBoxFeat,
  TitleTextFeat,
  DescTextFeat,
  GridCol1,
  GridCol2,

} from "./feature.styles";


const Feature = () => {
  return (
    <WrapperBoxFeat>
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
        <GridCol1 item xl={6} lg={6} md={6} sm={12} xs={12}>
          <LeftRightAnimtedBox sx={{ bottom: "0", left: "2rem" }}>
            <img src={DottedLine} alt="background" />
          </LeftRightAnimtedBox>
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            viewport={{once:true}}
            transition={{ duration: 1.2 }}
          >
            <Atropos
              activeOffset={40}
              shadowScale={1.05}
              shadow={false}
              highlight={false}
            >
              <img
                src={FeatureImg}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="feature-img"
              />
            </Atropos>
          </motion.div>
        </GridCol1>
        <GridCol2 item xl={6} lg={6} md={6} sm={12} xs={12}>
          <TopBottomAnimtedBox sx={{ top: "0", right: "0" }}>
            <img src={ZigZag} alt="background" />
          </TopBottomAnimtedBox>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            viewport={{once:true}}
            transition={{ duration: 1.2 }}
          >
            <MainHeading1>Why our</MainHeading1>
            <MainHeading2>Company?</MainHeading2>
            <SubText>
              Many contractors lose their money on an average of more than
              $250,000 per month because they don’t bid due to a lack of
              construction estimation resources and time.
            </SubText>
            <IconTextBox>
              <IconBoxFeat>
                <img src={Clock} alt="clock" />
              </IconBoxFeat>
              <TextBoxFeat>
                <TitleTextFeat>Fastest Turnaround Time</TitleTextFeat>
                <DescTextFeat>
                  We provide construction estimating services and quantity
                  takeoffs within the fast turnaround time of 24 to 48 hours.
                </DescTextFeat>
              </TextBoxFeat>
            </IconTextBox>
            <IconTextBox>
              <IconBoxFeat>
                <img src={Thumb} alt="thumb" />
              </IconBoxFeat>
              <TextBoxFeat>
                <TitleTextFeat>Affordable Prices</TitleTextFeat>
                <DescTextFeat>
                  We maintain our construction estimates and quantity takeoffs
                  at competitive market rates. Resultantly, offering our
                  estimates and takeoffs at 200$ on average.
                </DescTextFeat>
              </TextBoxFeat>
            </IconTextBox>
            <IconTextBox>
              <IconBoxFeat>
                <img src={Auction} alt="auction" />
              </IconBoxFeat>
              <TextBoxFeat>
                <TitleTextFeat>92% Bid-Hit Ratio</TitleTextFeat>
                <DescTextFeat>
                  The bid winning ratio of our estimates is more than 92% as per
                  our past contractor’s bids data.
                </DescTextFeat>
              </TextBoxFeat>
            </IconTextBox>
          </motion.div>
        </GridCol2>
      </Grid>
    </WrapperBoxFeat>
  );
};

export default Feature;
