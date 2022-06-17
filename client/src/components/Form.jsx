import React from "react";
import ToggleSwitch from "./ToggleSwitch.jsx";

var Form = function(props){
  // console.log(document.getElementsByTagName("input")[0].value);
  //console.log(document.querySelector("#addInput"));
  return(
    <div>
        <input id={"addInput"} type={"text"} placeholder={"Add"}></input>
        <button className="normalbutton"
        onClick={()=>props.handleClickAdd(document.getElementById("addInput").value)}
        type={"text"}
        value={"Add"}>{"Add"}
        </button><br/>
        <ToggleSwitch
        filterToWatch={props.filterToWatch}
        filterWatched={props.filterWatched}
        />
        <input
        type={"text"}
        id='goInput'
        placeholder={"Search..."}
        //onChange={()=>props.handleClickGoInput(document.getElementById("goInput").value.toLowerCase())}
        ></input>
        <button
        className="normalbutton"
        onClick={()=>props.handleClickGoInput(document.getElementById("goInput").value.toLowerCase())}
        type={"text"}
        value={"Go!"}>{"Go!"}
        </button>

    </div>
  )
};

export default Form;
