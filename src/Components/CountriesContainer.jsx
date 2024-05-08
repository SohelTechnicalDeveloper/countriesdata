import React, { Fragment, useEffect, useState } from "react";
// import CountriesData from "./CountriesData";
import CountryCard from "./CountryCard";
import Searchbar from "./Searchbar";
function CountriesContainer({search}) 
{
  const[CountriesData,setCountriesData]= useState([])

  useEffect(()=>{

    fetch('https://restcountries.com/v3.1/all')
    .then((res)=> res.json())
    .then((data)=>{
      setCountriesData(data)
    })
  },[])
    
  return (  
    <Fragment>
      <div className="countries-container">{CountriesData.filter((country)=>  
          country.name.common.toLowerCase().includes(search)).map((country) => {
    return (
      <CountryCard
        area={country.area.toLocaleString("en-IN")}
        name={country.name.common}
        region={country.region}
        population={country.population.toLocaleString("en-IN")}
        flag={country.flags.svg}
        capital={country.capital?.[0]}
        />
      );
   })}
  </div>
  
    </Fragment>
  );
}

export default CountriesContainer;


