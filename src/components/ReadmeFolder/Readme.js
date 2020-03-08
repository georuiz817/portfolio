import React from 'react';
import GOS from './GOS'
import GettingStarted from './GettingStarted'
import PreReq from './PreReq'
import Installing from './Installing'
import BuiltWith from './BuiltWith'
import Authors from './Authors'


const Readme = () => {
    return (
      <div>
        <GOS/>
        <GettingStarted/>
        <PreReq/>
        <Installing />
        <BuiltWith/>
        <Authors />
    </div>
    )
  }


export default Readme