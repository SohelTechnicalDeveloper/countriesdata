import React, { Fragment } from 'react'

function Header() {
  return (
    <Fragment>
         <header className='header-container'>
            <div className='header-content'>

            <h2 className='title'>
                    
                    <a href="/">Where in the world ? </a>
            </h2>

            <p className='theme-changer'>
            <i className="fa-regular fa-moon">&nbsp;&nbsp;&nbsp;Dark Mode</i>
            </p>
            </div>
        </header>
      
    </Fragment>
  )
}

export default Header
