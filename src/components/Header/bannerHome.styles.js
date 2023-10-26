import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomBox = styled('div')`
  background-image: url('./images/headerBackground.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 2px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 15rem;
  margin-top: -7rem;
  min-height: 50rem;
  display: flex;
  align-items: center;
  z-index: -1;
  overflow: hidden;
`;
export const CustomTypography = styled(Typography)`
color: #D8D6BF;
font-family: Salsa;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
${({theme})=>theme.breakpoints.down("sm")}{
font-size: 14px;
}
`;
export const DescriptionText = styled(Typography)`
 color: #FFF;
font-family: Poppins;
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height: normal;
${({theme})=>theme.breakpoints.down("sm")}{
font-size: 40px;
}
`;
export const StartedButton = styled(Button)`
 width: 160px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: #D8D6BF;
color: #222;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
position: relative;
line-height: normal;
:hover{
  background: #D8D6BF;
  color: #222;
}
`;
export const ChoiceTypography=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
${({theme})=>theme.breakpoints.down("sm")}{
font-size: 14px;
}
`
export const AnimateTypography=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: normal;
${({theme})=>theme.breakpoints.down("sm")}{
font-size: 24px;
}
`
export const TextBox=styled(Box)`
display: flex;
flex-direction: column;
row-gap: 1rem;
`
export const CustomSpan=styled('span')`
color: #D8D6BF;
font-family: Poppins;
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height: normal;
${({theme})=>theme.breakpoints.down("sm")}{
font-size: 40px;
}
`

//
export const MainImageBox=styled(Box)`
  /* perspective: 1000px; */

`
export const StyledMainImg=styled('img')`
  width: 200px;
  height: 200px;
  background-color: #3498db;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
  &:hover{
    transform: rotateY(45deg) translateZ(50px);
  }
`
export const ArrowBtn=styled(Box)`
@keyframes Animator {
0%{bottom:-5rem}
100%{bottom:5rem}
}

animation-name: Animator;
animation-duration: 1s;
background-color: #D8D6BF;
position: fixed;
bottom: 5rem;
right: 1%;
height: 3.5rem;
width: 3.5rem;
z-index: 1000;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
cursor: pointer;
`
export const WhatsAppBtn=styled(Box)`
background-color: #25d366;
position: fixed;
bottom: 5rem;
left: 1%;
height: 3.5rem;
width: 3.5rem;
z-index: 1000;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
cursor: pointer;

`