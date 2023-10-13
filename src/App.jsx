// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Movie from './components/Movie';
import Filter from './components/Filter';
import {AnimatePresence, motion} from "framer-motion"

const App = () => {
  const [popular,setPopular]=useState([]);
  const [filtered,setFiltered]= useState([]);
  const [activeGenre,setActiveGenre]= useState(0);

  useEffect(() => {
    fetchPopular()
  },[])
  const fetchPopular= async () => {
    const api= await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US&page=1")
    const {results}= await api.json();
    // console.log(data);
    setPopular(results);
    setFiltered(results);

  }
  return (
    <div>
      <Filter filtered={filtered} setFiltered={setFiltered} activeGenre={activeGenre}
      setActiveGenre={setActiveGenre} popular={popular}/>
      <AnimatePresence>
      <motion.div layout className='flex flex-wrap gap-10 justify-center mt-20'>

      
{filtered.map((movie) => {
  return(
    <Movie key={movie.id} {...movie}/>
  )
})}</motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
