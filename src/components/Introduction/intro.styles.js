import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const WrapperBoxIntro=styled(Box)`
background-image: url('./images/borderTop.svg'),url('./images/introBackground.svg');
background-repeat: no-repeat;
background-size: 100vw,cover;
padding: 8rem 10%;
background-position: right  bottom -2px ,center;
background-color: black;
overflow: hidden;
position:relative;
.react-multiple-carousel__arrow--right{
background-color: red;
bottom: 1.5rem;
left: 5rem;
right: auto;
border-radius: 5px;
border: 1px solid #D8D6BF;
background: #D8D6BF;
box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.25);

}
.react-multiple-carousel__arrow::before{
    color: black !important;
  
}
.react-multiple-carousel__arrow--left{
    background-color: red;
    bottom: 1.5rem;
    left: 20px;
    right: auto;
   border-radius: 5px;
background: #D8D6BF;
box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.25);

}

`
export const FirstTypography=styled(Typography)`
color: #FFF;
font-family: Salsa;
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const SecondTypography=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const ThirdTypography=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const TextBoxIntro=styled(Box)`
display: flex;
flex-direction: column;
row-gap: 2rem;
${({theme})=>theme.breakpoints.up("xl")}{
    width: 25rem;
}
`
export const ArrowIcon = styled('div')``;

export const CardWrapperBox=styled(Box)`

padding-bottom: 5rem;
margin: 0 2rem;

`
