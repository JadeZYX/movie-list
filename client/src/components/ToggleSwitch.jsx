import React from "react";

var ToggleSwitch = function(props){
  return(
    <div>
    <button
    onClick={()=>props.filterWatched()}
    value={'Watched'}>{'Watched'}</button>
    <button
    onClick={()=>props.filterToWatch()}
    value={"To Watch"}>{'To Watch'}</button>
    </div>
  );
};

export default ToggleSwitch;