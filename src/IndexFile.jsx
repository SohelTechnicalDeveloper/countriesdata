import React, { Fragment } from 'react'
import App from './App';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Error from './Components/Error';
import CountryDetails from './Components/CountryDetails';


function Index() 
{
  return (
    <Fragment>
       
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<App/>}  errorElement={<Error/>} >
             <Route path='/'  element={<Home/>}/>
             <Route path='/:country'  element={<CountryDetails/>}/>
           </Route>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      
    </Fragment>
  )
}

export default Index
