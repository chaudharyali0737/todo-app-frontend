import { styled } from "@mui/material/styles";
import  {Box,Typography} from '@mui/material'

export const HeadingServices=styled(Typography)`
color: #FFF;
font-family: Salsa;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
`
export const SubHeadingServices =styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;
margin-bottom: 4rem;
`
export const WrapperBoxService=styled(Box)`
background-image: url('./images/borderBottom.svg'),url('./images/borderTop.svg'),url('./images/introBackground.svg');
background-repeat: no-repeat;
background-size: 100vw,100vw,cover;
padding: 8rem 10%;
background-position: right  top,right bottom -1px  ,center;
background-color: black;
position: relative;
overflow: hidden;
@media (max-width:900px) {
    padding: 4rem 10%;
}
@media (max-width:400px) {
    padding: 4rem 5% 4rem 15%;
}
`
