import React from "react";
import ReactDOM from "react-dom";
//import MySearchBar from "./Atoms/SearchBar/MySearchBar.jsx";
import MyButton from "./Atoms/MyButton/MyButton";
import "./index.scss";

const App = () => {
   
  function hello(){
    alert('hell0')
  }

  return (
  <>
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: homepage</div>
    {/* <MySearchBar /> */}
    <MyButton Text='Bhavish' onClick={hello} Variant='blue' style={{color:'red'}}/>
  </div>
  </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
