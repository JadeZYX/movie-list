import React from "react";

var Form = (props)=>{
  // console.log(document.getElementsByTagName("input")[0].value);
  //console.log(document.querySelector("#addInput"));
  return(
    <div>
        <input id={"addInput"} type={"text"} placeholder={"Add"}></input>
        <button
        onClick={()=>props.handleClickAdd(document.getElementById("addInput").value)}
        type={"text"}
        value={"Add"}>{"Add"}
        </button><br/>
        <div>
        <button value={'Watched'}>{'Watched'}</button>
        <button value={"To Watch"}>{'To Watch'}</button>
        </div>
        <input type={"text"} id='goInput' placeholder={"Search..."}></input>
        <button
        onClick={()=>{
          props.handleClickGo(document.getElementById("goInput").value)
         }}
        type={"text"}
        value={"Go!"}>{"Go!"}
        </button>

    </div>
  )
};

export default Form;
