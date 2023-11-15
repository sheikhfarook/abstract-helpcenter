
import React from 'react'
import './Header.css'
import logo from '../../assets/icons/logo.svg';


export default function Footer(){
    return(
        <div className='header-container'>
<img src={logo} alt="logo" className='header-icon' />
            <div className="abc">|</div>
            <div className="ab">Help Center</div>
            <div className='buttons'>
                <button type="submit"  className="btn2" >Sign in</button> 
                <button className="btn1">Submit a request</button>
            </div>
        </div>
    )
}