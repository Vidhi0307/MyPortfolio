import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BottomNavigation,BottomNavigationAction } from '@mui/material';


const Footer = () => {
  return (
    <BottomNavigation>
  <BottomNavigationAction label="github"  href='https://github.com/Vidhi0307' icon={<GitHubIcon />} />
  <BottomNavigationAction label="Favorites" href='https://www.linkedin.com/in/vidhi-sharma-0559b9a0/' icon={<LinkedInIcon />} />

</BottomNavigation>
  )
}

export default Footer
