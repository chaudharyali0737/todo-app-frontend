import { styled } from "@mui/material/styles";
import {Box,Grid,Typography,} from '@mui/material'

export const WrapperBoxFeat=styled(Box)`
padding:8rem 10%;
background-color: #222;
overflow: hidden;
@media (max-width:900px) {
   padding: 3rem 10%;
}

`
export const MainHeading1=styled(Typography)`
color: #FFF;
font-family: Salsa;
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media (max-width:900px) {
    font-size: 24px;
}
`
export const MainHeading2=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 2rem;
@media (max-width:900px) {
    font-size: 32px;
}
`
export const SubText=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 2rem;
@media (max-width:900px) {
    font-size: 14px;
}
`
export const IconTextBox=styled(Box)`
display: flex;
column-gap: 1rem;
margin-bottom: 2rem;

`
export const IconBoxFeat=styled(Box)`
width: 50px;
height: 50px;
flex-shrink: 0;
background-color: #D8D6BF;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`
export const TextBoxFeat=styled(Box)`


`
export const TitleTextFeat=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media (max-width:900px) {
    font-size: 18px;
}
`
export const DescTextFeat=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media (max-width:900px) {
    font-size: 13px;
}
`
export const GridCol1=styled(Grid)`
display: flex;
align-items: center;
justify-content: center;
position: relative;
`
export const GridCol2=styled(Grid)`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
`
