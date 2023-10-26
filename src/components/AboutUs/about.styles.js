import { styled } from "@mui/material/styles";
import { Box,Button,Typography } from "@mui/material";

export const MainTextAbout=styled(Typography)`
color: #FFF;
font-family: Salsa;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
${({theme})=>theme.breakpoints.down("md")}{
    font-size:18px ;
}
`
export const TitleTextAbout=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
${({theme})=>theme.breakpoints.down("md")}{
    font-size:32px ;
}
`
export const DescTextAbout=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
${({theme})=>theme.breakpoints.down("md")}{
    font-size:14px ;
}
`
export const TextBoxAbout=styled(Box)`
display: flex;
flex-direction: column;
justify-content: center;

row-gap: 1.5rem;
@media (max-width:900px) {
    row-gap: 0.5rem;
}
`
export const WrapperBoxAbout=styled(Box)`
background: #222;
padding: 5rem 10%;

z-index: 1;
background-origin: padding-box;
overflow: hidden;

@media (max-width:900px) {
    padding: 2rem 10%;
}

`
export const PlanButton=styled(Button)`
width: 160px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #D8D6BF;
color: #D8D6BF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 2rem;
position: relative;
@media (max-width:900px) {
  width: 150px;
height: 45px;
font-size: 14px;
}
`
