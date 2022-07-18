import React from 'react';
import Result from "./Result"
import "./Results.css"

const Results = ({ result }) => {

    return (
      <>
      <div className="header"><h3>Search Results</h3> </div>
      <div>
        {result.map( wikiData => (
          <Result wikiData={wikiData} />
        )
        )
      }
      </div>



      </>
    ) 
};

export default Results