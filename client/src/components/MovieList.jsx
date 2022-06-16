import React from "react";
import MovieListEntry from "./MovieListEntry.jsx"

var MovieList = (props)=>{
  return(
    <div>
      {
        props.movieslist.map((ele,index)=>(
          <MovieListEntry
          title={ele.title}
          key={index}
          handleClickEntry={props.handleClickEntry}/>
        ))
      }
    </div>
  )
}


export default MovieList;