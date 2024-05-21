import React, { Fragment, useEffect, useState } from 'react'
import './CountryDetails.css';
import { Link, useParams } from 'react-router-dom';


function CountryDetails() 
{
  const[countryData,setCountryData] = useState([])
  useEffect(()=>{
  
     fetch('https://restcountries.com/v3.1/all')
     .then((res)=>res.json())
     .then((data)=>{

         setCountryData(data)
         console.log(countryData)
         
        })
  },[])


  return (
    <Fragment>
        
   <main>
    
      <div className="country-details-container">
    
        <span className="back-button">
          <Link to={'/countriesCard'}><i className="fa-solid fa-arrow-left"></i>&nbsp; Back</Link>
          
        </span>
        <div className="country-details">
          <div className="details-text-container">
            {/* <h1>{name}</h1> */}
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population :{}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: </b>
                 <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <span className="languages"></span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
      
    </main>
      
    </Fragment>
  )
}

export default CountryDetails
