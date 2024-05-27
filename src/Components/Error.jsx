import React, { Fragment } from 'react'
import { Link, useRouteError } from 'react-router-dom'

function Error() {
  //  const Error = useRouteError()
    console.log(Error)
  return (
    <Fragment>
        <Link to={'/*'}> </Link>
           <h1 style={{color:'green', marginTop:'50px'}}>Some thing went wrong{Error.status}</h1>
       
    </Fragment>
  ) 
}

export default Error
