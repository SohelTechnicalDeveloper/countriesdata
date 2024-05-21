import React, { Fragment, useState } from 'react'

function Header() {
  const [isDark,setIsDark] = useState(false)
 
  return (
    <Fragment>
         <header className='header-container'>
            <div className='header-content'>

            <h2 className='title'>
                    
                    <a href="/">Where in the world ? </a>
            </h2>

            <p className='theme-changer' onClick={()=>{
              document.body.classList.toggle('dark')
              setIsDark(!isDark)
              localStorage.setItem('isDarkMode',!isDark)
            }}>
            <i className={`fa-solid fa-${isDark ? 'sun':'moon'}`}>&nbsp;&nbsp;&nbsp;Dark Mode</i>
            </p>  
            </div>
        </header>
        
      
    </Fragment>
  )
}

export default Header
