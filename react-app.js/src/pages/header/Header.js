import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {statecontext} from '../context/Context';

const Header = () => {
  const state = useContext(statecontext);
  console.log('state', state);



  
  return (
    <div>
     header
    </div>
  )
}

export default Header