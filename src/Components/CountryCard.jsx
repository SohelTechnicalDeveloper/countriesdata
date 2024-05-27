import React, { Fragment, useState } from 'react'
  import { Link } from 'react-router-dom'
function CountryCard({name,population,region,flag,capital,area,index}) {
   
  return (
    <Fragment>
      
      <div className='row'>
        <Link to={`/country?name=${name}`}>
        <div className="col-sm-4  country-card">
          <div className="card border-0 ">
              <img className='card-img-top' src={flag} alt={name +'flag'} />
              <div className="card-text">

             <div className="card-body p-0 ">  
               <div className="card-title">Country : {name}</div>      
               <p>
                  <b>Population : </b>{population}
               </p>   
               <p>
                 <b>Region : </b> {region}
               </p>
               <p>
                 <b>Captial :</b> {capital}
               </p>
               <p>
                <b>Area  :</b> {area}
                </p>
               
             </div>
              </div>
          </div>
        </div>
        </Link>
         </div>
         
    </Fragment>
  )
}

export default CountryCard
