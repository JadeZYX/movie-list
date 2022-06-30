import React from 'react';

var MovieIntro=function(pros){
  return(
    <div>
      <p>{"Year: 1995"}</p>
      <p>{"Runtime:107min"}</p>
      <p>{"Metascore:46"}</p>
      <p>{"imdbRating:6.2"}</p>
     <form>
      <input type="radio" value='Watched' onChange={(event)=>{console.log(event.target.value)}}/>;
      <label for="watched">{'Watched'}</label>
     </form>
    </div>
  )
};

export default MovieIntro;