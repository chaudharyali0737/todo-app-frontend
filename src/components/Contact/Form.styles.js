import { styled } from '@mui/material/styles';
import { TextField, TextareaAutosize, Button, Box,Typography } from '@mui/material';

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: start;
justify-content: start;
  @media (max-width: 560px) {
    margin: 0;
  }
`;

export const StyledDiv = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledInput = styled(TextField)`
  width: 100%;
border-radius: 10px;
background: #343434;
color: white;
  margin-bottom: 1.5rem;
 
  box-shadow: -4px 4px 7px 5px rgba(0, 0, 0, 0.25) !important;

  label {
    color: white;
    font-family: Poppins;
  }
`;

export const StyledTextArea = styled(TextareaAutosize)`
  width: 100%;
  padding: 10px;
  color:white;
  border-radius: 10px;
background: #343434;
font-family: Poppins;
  box-shadow: -4px 4px 7px 5px rgba(0, 0, 0, 0.25) !important;
  &::placeholder {
    color: white;
  }
  
`;

export const StyledButton = styled(Button)`

height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: #D8D6BF;
box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.25);
color: #222;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 1rem;
@media (max-width:900px) {
  font-size: 14px;
}
:hover{
  background: #D8D6BF;
  color: #222;
}

`;
export const ContactWrapperBox = styled(Box)`
  padding: 4rem 10%;
 background-color:#222;
 position: relative;
 overflow: hidden;
`;
//

export const MainContainer = styled(Box)`
  border-radius: 20px;
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .call-box {
    justify-content: center;
  }
  .email-box {
    justify-content: end;
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    .call-box {
      justify-content: end;
    }
    .email-box {
      justify-content: start;
    }
  }
  ${(props) => props.theme.breakpoints.down('md')} {
    .call-box {
      justify-content: start;
    }
    .email-box {
      justify-content: start;
    }
  }
`;
export const CustomBox = styled(Box)`
  display: flex;
  gap: 0.3rem;
  width: 100%;
  padding: 0.5rem 0;
  @media (max-width: 770px) {
    margin: 0;
    justify-content: flex-start;
  }
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

export const InfoBox = styled(Box)`
display: flex;
flex-direction: column;
row-gap: 0.5rem;
`;

export const FirstTypography = styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const SecondTypography = styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const InfoLogoBox = styled(Box)`
  display: flex;
  justify-content: center;
  min-width: 5rem;
  flex-wrap: wrap;
  fill: ${(props) => props.theme.coloredText};
  @media (max-width: 350px) {
    min-width: 3rem;
    margin-right: 0.5rem;
  }
`;

export const Heading1Contact=styled(Typography)`
color: #FFF;
font-family: Salsa;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;

`
export const Heading2Contact=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const SubTextContact=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const HeadingBoxContact=styled(Box)`
text-align:center;
display: flex;
flex-direction: column;
row-gap: 1rem;
margin-bottom: 4rem;

`
export const MapBox=styled(Box)`
@media (max-width:900px) {
  margin-top: 2rem;
}
`