import React, { Fragment, useEffect, useState } from 'react'
import './CountryDetails.css';
import { Link, useNavigate } from 'react-router-dom';


function CountryDetails() 
{
   const countryName = new URLSearchParams(window.location.search).get('name')
  const[countryData, setCountryData] = useState(null)
  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/countriesCard");
  };
  
  useEffect(()=>{
    
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res=>res.json())
      .then(([data]) => {
        console.log(data)
        setCountryData({

           area:data.area,
           name:data.name.common,
           nativeName:Object.values(data.name.nativeName)[0].common,
           population:data.population,
           region: data.region,
           subregion:data.subregion,
           capital:data.capital?.[0],
           flag:data.flags.svg,
           domain:data.tld,
           languages: Object.values(data.languages).join(' , '),
           currencies: Object.values(data.currencies)
           .map((currency) => currency.name)
           .join(','),
           Weak:data.startOfWeek


        })
        
      })  
  },[])

  return countryData===null?("Loading Page ..... ") : (  

    <Fragment>
        
   <main>
    
      <div className="country-details-container">
    
          <button className='back-button' onClick={handleClick}><i className="fa-solid fa-arrow-left"></i>&nbsp;Back</button>
          

        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name}flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name  &nbsp; : &nbsp;&nbsp;  {countryData.nativeName} </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Native Language  &nbsp; : &nbsp;&nbsp;  {countryData.languages} </b>
                <span className="native-name"></span>
              </p>
              < p>
                <b>
                  Population &nbsp; : &nbsp;&nbsp;{countryData.population.toLocaleString("en-IN")}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region &nbsp; : &nbsp;&nbsp;{countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b> Sub Region &nbsp; : &nbsp;&nbsp;{countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p> 
                <b>Capital &nbsp; : &nbsp;&nbsp;{countryData.capital} </b>
                 <span className="capital"></span>
              </p>
              <p>
                <b>Area &nbsp; : &nbsp;&nbsp;{countryData.area.toLocaleString("en-In")} </b>
                 <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain &nbsp; : &nbsp;&nbsp; {countryData.domain}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies &nbsp; : &nbsp;&nbsp; {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Start Of Weak &nbsp; : &nbsp;&nbsp; {countryData.Weak}</b>
                <span className="currencies"></span>
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
