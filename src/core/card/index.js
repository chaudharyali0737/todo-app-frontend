import React,{useState} from "react";
import { Box } from "@mui/material";
import Atropos from "atropos/react";

import {
  TextBoxCard,
  TitleText,
  DescText,
  MainBoxCard,
  WrapperBoxCard,
} from "./index.styles";

const Card = ({ icon, title, description }) => {
  const [color,setcolor]=useState(false)
  return (
    <WrapperBoxCard className="hover-card" sx={{backgroundColor:color ? '#D8D6BF':'',transition:'0.8s'}} >
      <Atropos
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => setcolor(true)}
        onLeave={() => setcolor(false)}
        style={{
        transform:"translateX(-25px)"
        }}
        
      >
        <MainBoxCard>
          <Box>
            <img src={icon} alt="icon-image" />
          </Box>
          <TextBoxCard>
            <TitleText>{title}</TitleText>
            <DescText>{description}</DescText>
          </TextBoxCard>
        </MainBoxCard>
      </Atropos>
    </WrapperBoxCard>
  );
};

export default Card;
