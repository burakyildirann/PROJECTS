import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';
import { CiShoppingBasket } from "react-icons/ci";
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';
import { BiPointer } from 'react-icons/bi';
function Header() {
  
  const navigate = useNavigate();
  return (

    <div className='header-container'>
      <div className="logo-area">
        <img src={logo} width={25} height={25} />
        <p 
        onClick={() => navigate("/")} 
        style={{ cursor: "pointer" }}
      >
        BURAK A.Ş
      </p>
      </div>

      <nav>
        <Link to={'/'}>HOME</Link>
         <Link to={'/products'}>PRODUCTS</Link>
          <Link to={'/about'}>ABOUT</Link>
           <Link to={'/contact'}>CONTACT</Link>
      </nav>

      <div className="header-right">
        <input type="text" placeholder='searching'/>
        <CiShoppingBasket className='basket-icon'/>
        <Badge badgeContent={4} color="success">
      
    </Badge>
      </div>
      
    </div>
  )
}

export default Header