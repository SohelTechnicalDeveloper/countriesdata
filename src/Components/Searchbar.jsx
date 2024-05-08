import React, { Fragment } from 'react'

function Searchbar({searchProps}) {
  return (
    <Fragment>
        <div className="search-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text"  onChange={(e) => searchProps(e.target.value.toLowerCase()) } placeholder='Search for a country...'/>

        </div>

      
    </Fragment>
  )
}

export default Searchbar
