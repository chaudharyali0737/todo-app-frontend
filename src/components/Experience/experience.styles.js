
import { styled } from '@mui/material/styles';
import { Typography,Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export const CustomTypography = styled(Typography)`
  color: ${(props) => props.theme.primaryText};
  font-size: 2.5em;
  font-weight: Bold;
  text-align: center;
`;

export const MainBox = styled(Box)`
background-image:  url("./images/borderBottom.svg"),url('./images/borderTop.svg'),
url('./images/experienceBackground.svg');
padding:10rem 10%;
background-size: 100vw,100vw,cover;
background-position: right  top 0 ,right bottom -1px,center ;
background-repeat: no-repeat;
overflow: hidden;
@media (max-width:900px ){
    padding:3rem 10%;
}

`;

export const FirstBox = styled('div')`
  @media (max-width: 2560px) {
    width: 60%;
  }
  @media (max-width: 1440px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FirstTextExp = styled('h3')`
 color: #FFF;
font-family: Salsa;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media (max-width:900px) {
    font-size: 20px;
}
`;

export const SecondTextExp = styled('p')`
  color: #D8D6BF;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media (max-width:900px) {
    font-size: 32px;
}
`;
export const ThirdTextExp = styled('p')`
  color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media (max-width:900px) {
    font-size: 14px;
}
`;

export const SecondBox = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;

`;

export const ProgressDiv = styled('div')`
  margin: 20px 0px;
`;

export const CustomProgressBar = styled(LinearProgress)`
  width: 100%;
  height: 6px;
  margin: 10px 0;
  background-color: #ffffff;

  border-radius: 3px;
  overflow: hidden;
  .MuiLinearProgress-bar {
    background-color: #D8D6BF;
  }

  &.animated {
    & .MuiLinearProgress-bar {
      border-radius: 5px;
      animation: progressBarAnimation 4s linear;
      animation-fill-mode: forwards;
    }
  }

  @keyframes progressBarAnimation {
    0% {
      transform: scaleX(0);
    }
    85% {
      transform: scaleX(1);
    }
    0% {
      transform: scaleX(0);
    }
    85% {
      transform: scaleX(1);
    }
    0% {
      transform: scaleX(0);
    }
    85% {
      transform: scaleX(1);
    }
    0% {
      transform: scaleX(0);
    }
    85% {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    height: 8px;
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    height: 6px;
    margin: 10px 0;
  }

  @media (max-width: 320px) {
    height: 4px;
    margin: 5px 0;
  }
`;

export const ProgressTypography = styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;

`;
export const TextBarWrapper=styled(Box)`
display: flex;
justify-content: space-between;
`
export const ValueText=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`



