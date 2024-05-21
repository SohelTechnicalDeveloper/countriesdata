import { Fragment, useState } from 'react';
import Header from './Components/Header';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import CountryDetails from './Components/CountryDetails';
import CountryCard from './Components/CountryCard';

function App() {
  const [isDark,setIsDark] = useState(false)

   
  return (  
   <>
      <Header/>
          {/* <CountryDetails/> */}
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/country' element={<CountryDetails/>}></Route>
          <Route path='/countriesCard' element={<Home/>}></Route>
        </Routes> 
      {/* </BrowserRouter> */}
      {/* <Outlet/>
       <Home/> */}
      </>
  
  );
}

export default App;
