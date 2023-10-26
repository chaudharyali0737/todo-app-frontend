import { styled } from "@mui/material/styles";
import {Box,Typography} from '@mui/material';

export const WrapperBoxTest=styled(Box)`
background-image: url('./images/borderBottom.svg'),url('./images/borderTop.svg'),url('./images/introBackground.svg');
background-repeat: no-repeat;
background-size: 100vw,100vw,cover;
padding: 8rem 10%;
background-position: right  top,right bottom -1px  ,center;
background-color: black; 
overflow:hidden;
@media (max-width:900px) {
    padding: 4rem 10%;
}

`
export const Text1Test=styled(Typography)`
color: #FFF;
font-family: Salsa;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const Text2Test=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const SubTextTest=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const WrapperBoxCardTest=styled(Box)`
border-radius: 10px;
border: 3px solid #D8D6BF;
padding: 1.2rem 0 1.2rem 0;
margin: 2rem 2rem;

`
export const MainBoxCardTest=styled(Box)`

border-radius: 10px;
background: #222;
display: flex;
align-items: start;
flex-direction: column;
justify-content: center;
row-gap: 1.5rem;
padding: 2rem;

flex-wrap: wrap;
${({theme})=>theme.breakpoints.down("md")}{
    row-gap: 1rem;
    padding: 1.5rem;
}
${({theme})=>theme.breakpoints.down("sm")}{
    padding: 1rem;
}

`
export const ImgTextBoxTestCard=styled(Box)`

display: flex;
align-items: center;
column-gap: 1rem;
`
export const DescTextTestCard=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const PersonImg=styled(Box)`

`
export const TextBoxPerson=styled(Box)`

`
export const NameText=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const RankText=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
