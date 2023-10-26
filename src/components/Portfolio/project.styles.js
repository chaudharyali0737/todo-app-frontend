
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Typography } from '@mui/material';

export const ProjectMainBox = styled(Box)`
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 2rem;
`;
export const ProjectTitle = styled(Typography)`
  color: #e59c24;
  font-family: Sen;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 22px;
  }
`;
export const ProjectName = styled(Typography)`

  font-family: Sen;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`;
export const ProjectTechnology = styled(Box)`
  display: flex;
  column-gap: 15%;

`;
export const ProjectGridWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const LiveButton = styled(Button)`
  width: 150px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 8px;

  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.2);

  font-family: Sen;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 1rem;

  &:hover {
 
  }
`;
export const ImageBoxProject = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TechNameTypography = styled(Typography)`

  font-family: Sen;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const MainWrapperBox = styled(Box)``;
export const MaineGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  gap: 20px;

  justify-content: start;
  margin-bottom: 3rem;

  .react-multi-carousel-dot-list {
    bottom: 30px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:nth-of-type(odd) {
    margin-top: 2rem;
  
    .grid-col2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 2.5rem;
     
    }
  }
  &:nth-of-type(even) {
    margin-top: 2rem;
  
    .grid-col2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 4rem;
      
    }
  }
`;
export const GridCol2 = styled(Grid)``;
export const FeatureMainHeadingBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
text-align:center;
  margin-bottom: 2rem;
  margin-left: 10%;
  margin-right: 10%;
`;
export const HomeFeatureMainHeading = styled(Typography)`
 color: #FFF;
font-family: Salsa;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const HomeFeatureSubText = styled(Typography)`
 color: #D8D6BF;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;

`;
export const TextWrapperBox = styled(Box)``;
export const CustomButton = styled(Button)`
color: #FFF;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
background: transparent;
text-align: center;
height: 50px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid #D8D6BF;
width: 100%;
&:hover{
  background: #D8D6BF;
  color: #222;
  border: 2px solid #D8D6BF;
}
  
`;
export const BtnBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-right: 10%;
  color: white !important;
  margin-bottom: 20px;
  gap: 40px;

`;
export const StyledBoxProject = styled(Box)`
  width: 71px;
  height: 0.3rem;

  border-radius: 20px;
  margin-top: 1rem !important ;
  margin: auto;
  margin-bottom: 1rem !important ;
`;
export const StyledInnerBox = styled(Box)`
  text-align: center;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: all 0.6s;

  &:hover {
    opacity: 1;
  }
`;
export const CustomTypographyName = styled(Typography)`
 color: #D8D6BF;
text-align: center;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;


export const MainCustomBox = styled(Box)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  #image {
    scale: 1;
    transition: all 1s;
  }
  .animate {
    margin-top: 100px;
    transition: all 0.6s;
  }

  &:hover {
    #image {
      scale: 1.2;
      filter: blur(3px);
    }
    .animate {
      margin-top: 0px;
      transition: all 0.6s;
    }
  }
`;
export const ActiveTypography = styled(Typography)`

  padding: 0.5rem 1rem;
  color: white;
  width: fit-content;
  border: 1px solid darkyellow;
  border-left: none;
  border-top-right-radius: 5px;
  margin-top: 2rem;
  border-bottom-right-radius: 5px;
  font-family: Sen;
`;
