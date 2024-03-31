import React from 'react';
import logo from './OsuLogoWhite.png'; // import the image
import './MainPage.css'; // import the css file
import { Dropdown } from 'bootstrap';
import { DropdownButton } from 'react-bootstrap';



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
                    
                </ul>
                {/*
                <DropdownButton>

                    <Dropdown.Item id='sport_select_menu'>Football</Dropdown.Item>
                    <Dropdown.Item id='sport_select_menu'>FILL</Dropdown.Item>
                    <Dropdown.Item id='sport_select_menu'>FILL</Dropdown.Item>
                    
                    </DropdownButton>
    */}

                </div>
            </nav>
            
        </div>
    );
}
