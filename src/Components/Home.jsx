import { Fragment, useState } from 'react';
import Searchbar from './Searchbar';
import SelectMenu from './SelectMenu';
import CountriesContainer from './CountriesContainer';
import { Route, Routes } from 'react-router-dom';

function Home() {
  const[search,setSearch] = useState('');

  return (
    <Fragment>

    <main>
    <div className='search-filter-container'>
       <Searchbar searchProps = {setSearch}/>
       
       <SelectMenu/>
     </div> 
     <Routes>
     <Route path='/' element={<CountriesContainer search={search}/>}/>


     {/* <CountriesContainer search={search}/> */}
     </Routes>
  </main> 
    </Fragment>
  )
}

export default Home
