// import React from 'react'

import { useEffect } from "react"

const Filter = ({filtered,setFiltered,activeGenre,setActiveGenre,popular}) => {


  useEffect(() => {
    if(activeGenre===0){
      setFiltered(popular);
      return;
    }
    // eslint-disable-next-line react/prop-types
    const filterMovie= popular.filter(movie=> movie.genre_ids.includes(activeGenre));
    setFiltered(filterMovie)
  }
  ,[activeGenre])
  return (
    <div className=" flex justify-around mt-6">
      <button onClick={() => {
        setActiveGenre(0)
      }} className=" bg-gray-600 text-white rounded py-1 px-5 ">All</button>
      <button onClick={() => {
        setActiveGenre(28)
      }}  className=" bg-gray-600 text-white rounded py-1 px-5 ">Action</button>
      <button onClick={() => {
        setActiveGenre(35)
      }} className=" bg-gray-600 text-white rounded py-1 px-5 ">Comedy</button>

    </div>
  )
}

export default Filter
