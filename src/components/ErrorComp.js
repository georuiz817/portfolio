import React from 'react'
import { Link } from 'react-router-dom';

const ErrorComp = () => {

  return (
      <div className='Error-Full'>
      <div className="Error-screen">
      <Link to='/menu'><p>Warning: Please reset, this page does not exsist.</p></Link>
    </div>
    </div>
   )
  }

export default ErrorComp