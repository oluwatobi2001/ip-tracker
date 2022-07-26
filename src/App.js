import React , { useState } from 'react';
import './App.css';


import axios from 'axios';
import SearchBox from './components/Search';
import Result from './components/Result';
import ReactMap from './components/Map';




function App() {

 const [result, setResult] = useState({});
const [searchValue, setSearchValue] = useState("");

const IpUrl = "https://geo.ipify.org/api/v2/country?apiKey=at_2pF1In4avaT5wFLlvOEtabs2xsIbL&ipAddress=" + searchValue;


const handleSubmit = async (e) => {

  e.preventDefault();
  
  const res  = await axios.get(IpUrl).then((res)=> res.data)

  console.log(res);
  setResult(res);
  
 

};
  return (
    <>
     <div className="container" >
    <div className="navBar">

<SearchBox  setSearchValue={setSearchValue} handleSubmit ={handleSubmit}/> 
      </div> 
      <Result  result={result}/>
      <div className="tobi">
        
<ReactMap />
      </div>





    </div>
    </>
  );
}

export default App;
