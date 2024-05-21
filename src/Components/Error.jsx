import React, { Fragment } from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const Error = useRouteError()
    console.log(Error)
  return (
    <Fragment>
        <h1 style={{color:'green', marginTop:'50px'}}>Some thing went wrong</h1>
      
    </Fragment>
  )
}

export default Error
