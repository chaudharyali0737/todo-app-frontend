import { styled } from '@mui/material/styles';
import { Button, Typography, Box, AppBar } from '@mui/material';

export const CustomButton = styled(Button)`
color: #D8D6BF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
  text-decoration: none;
  @media (max-width: 1250px) {
    font-size: 14px;
  }
`;

export const CustomButtonContact = styled(Button)`

 width: 100px;
height: 40px;
flex-shrink: 0;
border-radius: 20px;
border: 1px solid #D8D6BF;
color: #D8D6BF;
font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const NavbarMainName = styled(Typography)`
  width: 12.372px;
  height: 26.094px;
  flex-shrink: 0;
  fill: #fbfbfb;
`;

export const LogoBox = styled(Box)`

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomAppBar = styled(AppBar)`
padding: 1rem 10%;
  background: #000;
box-shadow: 0px 2px 10px 0px rgba(255, 255, 255, 0.25);
`;
export const DrawerWrapperBox = styled(Box)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
