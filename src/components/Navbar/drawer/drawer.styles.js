import { styled } from '@mui/material/styles';
import { MenuItem, Box } from '@mui/material';

export const CustomIconButton = styled(MenuItem)`
  fill: ${(props) => props.theme.navLink};
  margin-left: auto;
  margin-right: -2rem;
  font-family: Sen;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 400px) {
    width: 50px;
    height: 36px;
  }
`;
export const DrawerMainBox = styled(Box)`
  width: 10rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  column-gap: 2rem;
`;
