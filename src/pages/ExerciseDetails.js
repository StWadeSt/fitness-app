import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';

import { youtubeOptions, exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetails = () => {
const [exerciseDetail, setexerciseDetail] = useState({});
const [exerciseVideos, setExerciseVideos] = useState([]);
const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
const [equipmentExercises, setEquipmentExercises] = useState([])
const {id} = useParams();

useEffect(() => {
  const fetchExercisesData = async ()=>{

    const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
    setexerciseDetail(exerciseDetailData);

    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
    setExerciseVideos(exerciseVideosData.contents);
    
    const targetMuscleExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
    setTargetMuscleExercises(targetMuscleExercisesData);

    const equipmentExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
    setEquipmentExercises(equipmentExercisesData);
  }

  fetchExercisesData();
}, [id])


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos= {exerciseVideos}  name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetails