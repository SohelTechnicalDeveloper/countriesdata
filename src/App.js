import logo from './logo.svg';
import { Fragment, useState } from 'react';
import Header from './Components/Header';
import './App.css';
import Searchbar from './Components/Searchbar';
import SelectMenu from './Components/SelectMenu';
import CountriesContainer from './Components/CountriesContainer';

function App() {
  const[search,setSearch] = useState('');
   
  return (
    <Fragment>
      <Header/>

      <main>
        <div className='search-filter-container'>
           <Searchbar searchProps = {setSearch}/>
           <SelectMenu/>
         </div>
         <CountriesContainer search={search}/>
      </main>

    </Fragment>
  );
}

export default App;
