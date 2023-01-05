import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import axios from "axios"

function App() {
  const [red,setRed] = useState(false)
  const [green,setGreen] = useState(true)


  function redOff(){
    axios.get("https://parkingtestdeploy.fly.dev/redOff").then(setRed(false))
  }
  function redOn(){
    axios.get("https://parkingtestdeploy.fly.dev/redOn").then(setRed(true))
  }
  function greenOff(){
    axios.get("https://parkingtestdeploy.fly.dev/greenOff").then(setGreen(false))
  }
  function greenOn(){
    axios.get("https://parkingtestdeploy.fly.dev/greenOn").then(setGreen(true))
  }


  return (
    <div className="container-leds">
      {red?
        <div className="button-red-on" onClick={() => redOff()}></div>:
        <div className="button-red-off"onClick={() => redOn()}></div>
      }
      {green?
        <div className="button-green-on" onClick={() => greenOff()}></div>:
        <div className="button-green-off" onClick={() => greenOn()}></div>
      }
    </div>
  );
}

export default App;
