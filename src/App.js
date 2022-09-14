import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Result_templates from './Components/Result_templates';
import LoadingBar from 'react-top-loading-bar'


function App() {
  const [result,updateResult] = useState("");
  const [bgMode,updateBGMode] = useState("light");
  const[loading,setLoading]=useState(0);
  const getMovies= async()=>{
        let query=document.getElementById("search").value;
        setLoading(10);
        let data= await fetch(`https://www.omdbapi.com/?apikey=1754851&t=${query}`);
        setLoading(30);
        let result=await data.json();
        setLoading(60);
        updateResult(result);
        setLoading(100);
        
        
  }
let validatekey=(event)=>{
  if (event.key === "Enter") {
    getMovies();
  }
}
const changeBgMode = () =>{
  console.log("triggerd")
    if (bgMode=="light") {
      document.body.style.backgroundColor="#000c2b";
      updateBGMode("dark")
      
    }else{
      document.body.style.backgroundColor="white";
      updateBGMode("light");
    }
}
  return (
    <>
        
      <Navbar changeBgMode={changeBgMode} bgMode={bgMode}/>
      <LoadingBar
        color='#f11946'
        height={5}
        progress={loading}
        onLoaderFinished={() =>setLoading(0)}
      />
        <div className="container-md my-5" >
              <div className="input-group mb-5 ps-md-5">
              <input type="search" placeholder="search movie/series name here" className={`form-control fs-5 ms-md-5 bg-${bgMode==='light' ? 'light':'dark'} text-${bgMode==='light' ? 'dark':'light'}`} id="search" style={{maxWidth:"1000px"}} onKeyDown={(e)=>validatekey(e)} />
              <label htmlFor="search" className="input-group-text fs-5 text-light bg-primary"><a onClick={getMovies}>search </a></label>
              </div>
              
              {result===""?console.log("search something..."):<Result_templates result={result} bgMode={bgMode} />}
              
        </div>
    </>
  );
}

export default App;
