import React, { useState } from "react";
import { Box } from "@mui/material";
import Atropos from "atropos/react";

import Quote from "../../assets/svg/icons/quote.svg";
import Person from "../../assets/svg/personImgTestimonial.svg";

import {
  WrapperBoxCardTest,
  MainBoxCardTest,
  DescTextTestCard,
  ImgTextBoxTestCard,
  PersonImg,
  TextBoxPerson,
  NameText,
  RankText,
} from "./card.styles";

const CardTestimonial = () => {
  const [color, setcolor] = useState(false);
  return (
    <WrapperBoxCardTest sx={{ backgroundColor: color ? "#D8D6BF" : "" }}>
      <Atropos
        className="my-atropos"
        style={{ transform: "translateX(-25px)" }}
        onEnter={() => setcolor(true)}
        onLeave={() => setcolor(false)}
      >
        <MainBoxCardTest>
          <Box>
            <img src={Quote} alt="quote image" />
          </Box>
          <DescTextTestCard>
            We know that speed is absolutely of the essence, whilst ensuring
            absolute accuracy of your projects estimate.
          </DescTextTestCard>
          <ImgTextBoxTestCard>
            <PersonImg>
              <img src={Person} alt="profile image" />
            </PersonImg>
            <TextBoxPerson>
              <NameText>Sanajida Ema</NameText>
              <RankText>Home Seller,USA</RankText>
            </TextBoxPerson>
          </ImgTextBoxTestCard>
        </MainBoxCardTest>
      </Atropos>
    </WrapperBoxCardTest>
  );
};

export default CardTestimonial;
