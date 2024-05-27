import Header from './Components/Header';
import {  Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import CountryDetails from './Components/CountryDetails';
import Error from './Components/Error';
import CountriesContainer from './Components/CountriesContainer';

function App() {

   
  return (  
   <>
      <Header/>
          {/* <CountryDetails/> */}
      {/* <BrowserRouter> */}
        <Routes>

          <Route path='/*' element={<Error/>}  />
          <Route path='/countriesCard'  element={<Home/>}/>
          <Route path='/country'  element={<CountryDetails/>}/>

        </Routes> 
      {/* </BrowserRouter> */}
      {/* <Outlet/>
       <Home/> */}
      </>
  
  );
}

export default App;
