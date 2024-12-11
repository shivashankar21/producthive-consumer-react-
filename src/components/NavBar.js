import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/NavBar.css';


//rafce shortcut
const NavBar = () => {
  return (
    <nav className='navbar'>
        <ul className='nav-list'>
            <li className='nav-item'>
                <Link to ='/'className='nav-link'>Home &nbsp;
                <span>
                    <FontAwesomeIcon icon="home"></FontAwesomeIcon>
                </span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to ='/products'className='nav-link'>Products &nbsp;
                <span>
                    <FontAwesomeIcon icon="bomb"></FontAwesomeIcon>
                </span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to ='/dealers'className='nav-link'>Dealer Profiles &nbsp;
                <span>
                    <FontAwesomeIcon icon="people-group"></FontAwesomeIcon>
                </span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to ='/about'className='nav-link'>About Us &nbsp;
                <span>
                    <FontAwesomeIcon icon="coffee"></FontAwesomeIcon>
                </span>
                </Link>
            </li>
            
           
        </ul>

    </nav>
    )
}

export default NavBar
