import React , { useState } from 'react';
import './App.css';

import  Results from './components/Results';
import Search from './components/Search';
import axios from 'axios';



const randomUrl = "https://en.wikipedia.org/wiki/Special:Random";
const wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=";

function App() {

 const [result, setResult] = useState([]);
const [searchValue, setSearchValue] = useState("");

const searchArticles =   () => {
  const wikilink = wikiUrl + searchValue + "&origin=*&format=json";
  axios.get(wikilink).then(response => setResult(response.data.query.search)).catch(err => console.log(err));
  
}
  
const randomArticle = (e) => {
  e.preventDefault();

  window.open(randomUrl, "_blank")
}




const handleSubmit = (event) => {
  event.preventDefault();
 
  searchArticles();
};
  return (
    <>
     <div className="container" >
    <div className="navBar">

<h2 className="navBar-header">Hello! Welcome to <span className="bold">INFOCYCLOPEDIA</span></h2>




    </div>
    </div>
    <div className ="container">
      <div className="search-component">
        <Search randomArticle={randomArticle} searchArticles={searchArticles} setSearchValue={setSearchValue} handleSubmit={handleSubmit}/>
      </div>
      
      <div className="result-component">
        <Results result ={result} />
      </div>
    </div>
    </>
  );
}

export default App;
