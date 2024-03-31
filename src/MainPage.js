import React from 'react';
import logo from './OsuLogoWhite.png'; // import the image
import './MainPage.css'; // import the css file
import { Link } from 'react-router-dom'; // import the Link component from react-router-dom
import { Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from 'react-bootstrap/Col';



export default function MainPage(){
    return (
        <div> {/* Wrap the JSX elements inside a parent div */}
            <nav className="nav">
                <div id='logo'>
                    <img src={logo} alt="OSU Logo" /> {/* use the imported image */}
                </div>
                <div>
                <ul id='home-links'>
                    <li className='nav-list'  id='nav_link'><Link to="/">
                        Home</Link>
                    </li>
                    <li className='nav-list'  id='nav_link' text-d><Link to="/Football">
                        Football</Link>
                    </li>
        
        
                    
                    <Container>
                        <Row>
                            <Col>
                            <DropdownButton title="Football">
                                <Dropdown.Item id='sport_select_menu'> 
                                <Link to="/Football">Football 
                                </Link></Dropdown.Item>
                                <Dropdown.Item id='sport_select_menu'>Basketball</Dropdown.Item>
                            </DropdownButton>
                            </Col>
                        </Row>
                    </Container>
                   
                </ul>
                {/*
                
    */}

                </div>
            </nav>
            
        </div>
    );
}
