import React from 'react'
import './navbar.css'
import logo from  '../../assets/netflix-logo.png'
import { Link } from 'react-router-dom'
import avatar2 from '../../assets/avatar2.jpg'
import { BsSearch,BsCaretDownFill,BsBell } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='navbar__container'>
        <div className="navbar-logo__container">
            <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links__container">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/series'>Series</Link></li>
                <li><Link to='/popular'>New and Popular</Link></li>
                <li><Link to='/mylist'>My List</Link></li>
            </ul>
        </div>
        <div className="navbar-right__container">
          <div className="navbar-searchbar">
            <input type="text" />
            <BsSearch className='search__icon'/>
          </div>
          <BsBell className='bell'/>
          <div className="navbar-auth__container">
            <div className="navbar-auth-avatar">
                <img src={avatar2} alt="" />
            </div>
            <div className="navbar-arrow__down">
               <BsCaretDownFill className='carret__down'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar