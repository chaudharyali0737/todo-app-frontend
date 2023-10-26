import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
export const TopBottomAnimtedBox=styled(Box)`
@keyframes topBottom {
  0% {transform: translatey(0px);}
  50%{transform: translatey(10px);}
  100% {transform: translatey(0px);}
}
position: absolute;
animation-name: topBottom;
animation-duration: 3s;
transition: 0.5s;
animation-iteration-count: infinite;
z-index: 1;

`
export const LeftRightAnimtedBox=styled(Box)`
@keyframes leftRight {
  0% {transform: translateX(0px);}
  50%{transform: translateX(10px);}
  100% {transform: translateX(0px);}
}
position: absolute;
animation-name: leftRight;
animation-duration: 4s;
transition: 0.5s;
animation-iteration-count: infinite;

`