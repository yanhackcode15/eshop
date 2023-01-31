import React from 'react'
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"
import {useStateValue} from './StateProvider'

function Header(){
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className='header__logo'>
                <Link to="/"><StorefrontIcon className="header__logoImage" fontSize="large" /></Link>
                <Link to="/"><h2 className="header__logoTitle">eShop</h2></Link>
            </div>
            <div className='header__search'>
                <input type="text" className="header__searchInput" />
                <div className="searchIconBox"><SearchIcon className="header__searchIcon" /></div>
            </div>
            <div className='header__nav'>
                <div className='nav__item'>
                    <span className='nav__itemLineOne'>Hello guest</span>
                    <span className='nav__itemLineTwo'>Sign In</span>
                </div>
                <div className='nav__item'>
                    <span className='nav__itemLineOne'>Your</span>
                    <span className='nav__itemLineTwo'>Shop</span>
                </div>
                
                <div className='nav__item'>
                    <Link to="/checkout">
                        <ShoppingBasketIcon className="itemBasket" /></Link>
                        <Link to="/checkout"><span className='nav__itemLineTwo nav__basketCount'>{basket.length}</span></Link>
                    
                
                </div>
                

            </div>
        </div>
    )
}

export default Header
