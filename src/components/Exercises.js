import React, {useEffect, useState} from 'react'
import { Box, Stack, Typography, Pagination } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData} from '../utils/fetchData'

const Exercises = ({exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  // Here we are calculating which exercises to display depending on the current page
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) =>{
    setCurrentPage(value);
    window.scrollTo({top: 1800, behavior: 'smooth'})
  }

  return (
    <Box 
      id="exercises"
      sx={{mt: {lg: '110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      {/* This Stack holds the Pagination so the user and...
      navigate through the different pages from the top */}
      <Stack mt='100px' alignItems='center' mb="70px">
          {exercises.length > exercisesPerPage && (
            <Pagination 
              color = 'standard'
              shape= 'rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / 9)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )}
      </Stack>

      {/* This Stack displays the different exercises...
      for the selected muscle group */}
      <Stack
        direction='row'
        sx={{gap: {lg: '110px', xs: '50px'}}}
        flexWrap='wrap'
        justifyContent= 'center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise= {exercise}/>
        ))}
      </Stack>

      {/* This Stack holds the Pagination so the user and...
      navigate through the different pages from the bottom */}
      <Stack mt='100px' alignItems='center'>
          {exercises.length > exercisesPerPage && (
            <Pagination 
              color = 'standard'
              shape= 'rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / 9)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises