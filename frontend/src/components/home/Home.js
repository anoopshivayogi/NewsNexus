import React from 'react'
import Hero from '../hero/Hero'

const Home = ({movies}) => {
  console.log("in home.js");
  console.log(movies);
  return (
       <Hero movies = {movies}/> 
  )
}

export default Home;