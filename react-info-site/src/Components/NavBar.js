import React from 'react'
import logo from '../images/logo.svg';

 export function NavBar(){
    return (
        <div className='navbar'>
                <nav>
                    <div className='image'>
                        <img src={logo} alt="React Logo"/>
                        <h1>ReactFacts</h1>
                    </div>
                    <h3>React Course - Project 1</h3>
                </nav>
        </div>
    )
}

export default NavBar;