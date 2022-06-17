
import React from "react";

var MovieListEntry=function(props){
  //console.log(document.getElementsByClassName("toggle").[props.key].value);
  return(
    <div>
      <div className="entry">{props.movie.title}
      <button
       className="toggle"
       onClick={()=>props.handleToggleClick(props.id)}
      >{props.movie.isWatched?"Watched":"To Watch"}</button>
      </div>
    </div>

  )
}

export default MovieListEntry;