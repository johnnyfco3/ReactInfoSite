import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';

function App(){
    return (
        <>
            <NavBar />
            <MainContent />
            <Footer />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));