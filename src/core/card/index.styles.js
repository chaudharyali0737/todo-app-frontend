import { styled } from "@mui/material/styles";
import {Box,Typography} from '@mui/material'

export const TextBoxCard=styled(Box)`
display: flex;
align-items: start;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
row-gap: 2rem;
`
export const TitleText=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
${({theme})=>theme.breakpoints.down("md")}{
    font-size: 24px;
}
@media (max-width:1020px), (min-width:900px) {
     min-height: 95px;
}
@media (max-width:900px) {
    min-height: 75px;

}

`
export const DescText=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const MainBoxCard=styled(Box)`

border-radius: 10px;
background: #222;
display: flex;
align-items: start;
flex-direction: column;
justify-content: center;
row-gap: 1.5rem;
padding: 2rem;
z-index: 1;
flex-wrap: wrap;
flex-grow: 1;
${({theme})=>theme.breakpoints.down("md")}{
    row-gap: 1rem;
    padding: 1.5rem;
}
${({theme})=>theme.breakpoints.down("sm")}{
    padding: 1rem;
}
`
export const WrapperBoxCard=styled(Box)`
border-radius: 10px;
border: 3px solid #D8D6BF;
padding: 1.2rem 0 1.2rem 0;
flex-grow: 1;

`