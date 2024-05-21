import { Fragment, useState } from 'react';
import Searchbar from './Searchbar';
import SelectMenu from './SelectMenu';
import CountriesContainer from './CountriesContainer';

function Home() {
  const[search,setSearch] = useState('');

  return (
    <Fragment>

    <main>
    <div className='search-filter-container'>
       <Searchbar searchProps = {setSearch}/>
       <SelectMenu/>
     </div>
     <CountriesContainer search={search}/>
  </main> 
    </Fragment>
  )
}

export default Home
