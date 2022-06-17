import React from "react";
import MovieListEntry from "./MovieListEntry.jsx"

var MovieList = (props)=>{
  // console.log(props);
   console.log(props.movieslist);
  return(
    <div>
      {
        props.movieslist.map((ele,index)=>(
          <MovieListEntry
          movie={ele}
          key={index}
          id={index}
          handleClickEntry={props.handleClickEntry}
          handleToggleClick={props.handleToggleClick}
         />
        ))
      }
    </div>
  )
}


export default MovieList;