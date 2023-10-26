import React,{useState} from 'react';
import { Drawer, Switch, List, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

import DrawerIcon from '../../../assets/svg/navbarDrawerIcon.svg'

import { CustomIconButton, DrawerMainBox } from './drawer.styles';

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#2D353D'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme?.palette?.mode === 'dark' ? '#2D353D' : '#FBFBFB',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme?.palette?.mode === 'dark' ? '#FBFBFB' : '#2D353D',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#FBFBFB'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme?.palette?.mode === 'dark' ? '#2D353D' : '#FBFBFB',
    border: `1px solid ${theme?.palette?.mode === 'dark' ? '#FBFBFB' : '#2D353D'}`,
    borderRadius: 20 / 2,
  },
}));

function DrawerComp() {
  const [openDrawer, setOpenDrawer] =useState(false);

  const navLinks = [
    {
      id: "Home",
      secondaryId: "home",
    },
    {
      id: "About Us",
      secondaryId: "about",
    },
    {
      id: "Services",
      secondaryId: "services",
    },
    {
      id: "Portfolio",
      secondaryId: "portfolio",
    },
    {
      id: "Testimonial",
      secondaryId: "testimonial",
    },
  
  ];
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    console.log("hello",element)
  
    if (element) {
      const startPosition = window.pageYOffset;
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let startTimestamp;
      function step(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        window.scrollTo(
          0,
          easeInOutCubic(progress, startPosition, distance, duration)
        );
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }
      // Easing function for smoother animation
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }
      requestAnimationFrame(step);
    }
  };
  const handleNavLinkClick = (nav) => {
    if (document) {
      
      scrollToElement(nav.secondaryId);
    }
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor={'right'}
        sx={{ backgroundColor: 'transparent' }}
      >
        <DrawerMainBox>
          <List component="nav" aria-label="secondary mailbox folder">
            {navLinks.map((elem, index) => {
              return (
                <ListItemButton
                  key={index}
                  onClick={()=>handleNavLinkClick(elem)}
                >
                  <ListItemText primary={elem.id} />
                </ListItemButton>
              );
            })}

          </List>
        </DrawerMainBox>
      </Drawer>
      <CustomIconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <img src={DrawerIcon} alt='three lines icon' />
      </CustomIconButton>
    </>
  );
}

export default DrawerComp;
