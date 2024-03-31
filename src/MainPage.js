import React from 'react';
import logo from './OsuLogoWhite.png'; // import the image
import './MainPage.css'; // import the css file
import { Link } from 'react-router-dom'; // import the Link component from react-router-dom



export default function MainPage(){
    return (
        <div> {/* Wrap the JSX elements inside a parent div */}
            <nav className="nav">
                <div id='logo'>
                    <img src={logo} alt="OSU Logo" /> {/* use the imported image */}
                </div>
                <div>
                <ul id='home-links'>
                    <li className='nav-list' id='Home'><Link to="/">Home</Link></li>
                    <li className='nav-list' id='Football' text-d><Link to="/Football">Football</Link></li>
                </ul>
                </div>
            </nav>
            
        </div>
    );
}
