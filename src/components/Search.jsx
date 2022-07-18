import React from 'react';
import "./Search.css"

const Search = ({randomArticle, setSearchValue, handleSubmit, searchArticles}) => {



    return (
       
            <main className="body">
                <form onSubmit ={handleSubmit}>
                    <input type="text"  className="form-input" autoFocus placeholder="Search InfoCycloPedia" onKeyUp={searchArticles} onChange = {e => setSearchValue(e.target.value)}/>
                    <div className="buttons">
                           <button className="form-button-1" type="submit" onSubmit={handleSubmit}>Search</button>
                    <button className="form-button-2" type="button"  onClick={randomArticle}>random article</button> 
                    </div>
                

                </form>
            </main>
           
    )
}

export default Search