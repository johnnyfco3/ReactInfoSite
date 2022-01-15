import React from 'react'

 export function NavBar(){
    return (
        <>
            <header>
                <nav>
                    <img src="./react-logo.png"></img>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar;