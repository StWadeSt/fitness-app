import React, {useState, useEffect} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'

import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises, setBodyPart, bodyPart}) => {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async ()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    if(search){
       const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
       
       const searchEdExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        );

        setSearch('');
        setExercises(searchEdExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" padding="20px">
      <Typography 
        fontWeight={700} 
        sx={{fontSize: {lg: "44px", sx: "40px"}}}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> 
        Should Know
      </Typography>

      <Box position="relative" mb="72px">

        <TextField 
          sx={{ input: { fontWeight: '700', 
          border: 'none', 
          borderRadius: '4px' }, 
          width: { lg: '1170px', 
          xs: '350px' }, 
          backgroundColor: '#fff', 
          borderRadius: '40px' }}

          height="76px"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          placeholder="Search Exercises"
          type="text"
        />

        <Button className='search-btn'
          onClick={(e) => handleSearch()}
          sx={{ bgcolor: '#FF2625', 
          color: '#fff', 
          textTransform: 'none', 
          width: { lg: '173px', 
          xs: '80px' }, height: '56px', 
          position: 'absolute', 
          right: '0px', 
          fontSize: { lg: '20px', xs: '14px' } }} 
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{position: 'relative', width: "100%", padding: '20px'}}
      >
        <HorizontalScrollBar 
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises