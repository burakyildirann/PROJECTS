import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';
import { CiShoppingBasket } from "react-icons/ci";
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';
import { BiPointer } from 'react-icons/bi';
import Image from '../images/Image.png';
function Header() {
  
  const navigate = useNavigate();
  return (

    <div className='header-container'>
      <div className="logo-area">
        <img src={Image} width={70} height={70} />
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