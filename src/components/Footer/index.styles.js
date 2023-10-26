import { styled } from '@mui/material/styles';
import { Box, Button, Grid, List, ListItem, TextField, Typography } from '@mui/material';
export const CustomList = styled(List)`
  & .MuiListItem-root {
  }
`;
export const FooterMainBox = styled(Box)`
  padding: 5rem 10% 2rem 10%;
  color: ${(props) => props.theme.footerText};
 background: #000;
  background-image: url('./images/borderBottom.svg');
  background-repeat: no-repeat;
  background-size: 100vw;
  background-position: right top 0;
  position: relative;
  overflow:hidden;

`;
export const FooterText = styled(Typography)`
  color: #FFF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const HeaderListItemText = styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const ChildListItemText = styled(Typography)`
  color: #FFF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const FooterLogoBox = styled(Box)`
  fill: ${(props) => props.theme.footerText};
  width: 15rem;
  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 13rem;
  }
  ${(props) => props.theme.breakpoints.down('md')} {
    width: 15rem;
    margin-bottom: -2rem;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 15rem;
    margin-bottom: 0;
  }
`;
export const FooterGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.theme.breakpoints.up('md')} {
    justify-content: center;
  }
  ${(props) => props.theme.breakpoints.down('md')} {
    justify-content: start;
    align-items: start;
  }
`;
export const FooterIconBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;

  ${(props) => props.theme.breakpoints.up('sm')} {
    gap: 30px;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    gap: 7px;
  }
`;
export const MainGrid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const FooterIconBoxDesktop = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-top: 2rem;
`;
export const CustomListItem = styled(ListItem)`
  padding-left: 0;
`;
export const ContactTypography=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const EmailTypography=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const FooterTextAbout=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 1rem;
`
export const PrivacyText=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const TermsText=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const CopyTypography=styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const SendButton=styled(Button)`
border-radius: 0px 8px 8px 0px;
background: #D8D6BF;
height: 40px;
flex-shrink: 0;
:hover{
  background: #D8D6BF;
}
`
export const CustomTextField=styled(TextField)`


`
export const HeaderListText=styled(Typography)`
color: #D8D6BF;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;

`

