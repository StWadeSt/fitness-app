import { Box, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';
import ExerciseCard from './ExerciseCard';


const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {

  return (
    <Box
      sx={{mt: {lg: '100px', xs: '0'}}}
    >
      <Typography variant="h3" mb='75px'>
        Similar <span style={{color: '#ff2625', textTransform: 'capitalize'}}>target muscle</span> exercises
      </Typography>
      <Stack 
        direction="row" 
        sx= {{
              padding: '2',
              position: 'relative',
              mb: '50px'
            }}
      >
        {
          targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/> : <Loader />
        }
      </Stack>
      <Typography variant="h3" mb='75px'>
        Similar <span style={{color: '#ff2625', textTransform: 'capitalize'}}>equipment</span> exercises
      </Typography>
      <Stack 
        direction="row" 
        sx= {{
              padding: '2',
              mb: '50px',
              position: 'relative'
            }}
      >
        {
          equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/> : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises