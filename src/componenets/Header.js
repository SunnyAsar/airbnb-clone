import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__icon'
          src='https://dwglogo.com/wp-content/uploads/2015/12/Airbnb-Logo.png' alt='logo'
        />
      </Link>

      <div className='header__center'>
        <input type='text' />
        <SearchIcon />
        
      </div>

      <div className='header__right'>
        <p> Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  )
}

export default Header
