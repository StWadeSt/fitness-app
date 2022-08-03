import React from 'react'
import { Typography, Stack, Box } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box
      mt='80px'
      bgcolor= '#fff3f4'
    >
      <Stack
        gap='40px'
        alignItems='center'
        paddingX='40px'
        paddingTop='24px'
      >
        <img src={Logo} alt="logo" width='200px' height='40px'/>
        <Typography variant='h5' paddingBottom='40px' marginTop='20px'>The Best Fitness App on the Internet</Typography>
      </Stack>
    </Box>
  )
}

export default Footer