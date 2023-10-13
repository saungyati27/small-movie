// import React from 'react'
import{motion} from "framer-motion"

const Movie = ({title,backdrop_path}) => {
  return (
    <div>
      <motion.div layout
      
      animate={{opacity:1,scale:1}}
      initial={{opacity:0,scale:1}}
      exit={{opacity:1,scale:0}}
      transition={{duration:0.5}}
      className="">
        <p className=" font-semibold">{title}</p>
        <img className=" rounded" src={"https://image.tmdb.org/t/p/w300"+backdrop_path} alt="" />
      </motion.div>
    </div>
  )
}

export default Movie
