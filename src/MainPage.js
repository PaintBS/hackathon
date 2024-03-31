import React from 'react';
import logo from './OsuLogoWhite.png'; // import the image
import './MainPage.css'; // import the css file



export default function MainPage(){
    return (
        <div> {/* Wrap the JSX elements inside a parent div */}
            <nav className="nav">
                <div id='logo'>
                    <img src={logo} alt="OSU Logo" /> {/* use the imported image */}
                </div>
                <div>
                <ul id='home-links'>
                    <li id='Home'><a href="/">Home</a></li>
                    <li id='About'><a href="/players">About</a></li>
                    <li id='Sports' text-d><a href="/Football">Sports</a></li>
                </ul>
                </div>
            </nav>
            
        </div>
    );
}
