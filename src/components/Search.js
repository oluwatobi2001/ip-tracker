import React from 'react';
import {FaGreaterThan} from "react-icons/fa"
import "./Search.css"
 
const SearchBox = ({setSearchValue, handleSubmit}) => {


    return (

        <div className="body">

            <h2 className="body-header">IP Address Tracker</h2>

            <form className="body-form" onSubmit={handleSubmit}>
                <input type="text" className="searchBox" placeholder="Search for any IP address or Domain"  onChange={e => {setSearchValue(e.target.value)}}/>
                <button type="submit" className="searchButton"> <strong> <FaGreaterThan /> </strong></button>
            </form>
        </div>
    )

}
export default SearchBox;
