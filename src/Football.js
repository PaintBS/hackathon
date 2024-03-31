import './Football.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import MainPage from './MainPage';


function Football() {
  return (
    <div>
    <MainPage />
    <div id='header'>
      <Container id='header_container'>
      <Row id='row1' className='justify-content-center'>OSU Football</Row>
      <Row id='row2' align = "end"> 
        <DropdownButton 
          id="dropdown-button-sort"
          variant="secondary"
          title="Sort"
          className="mt-2"
          data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1" id='highView'> Highest View </Dropdown.Item>
          <Dropdown.Item href="#/action-2" id= 'lowView'>Lowest View</Dropdown.Item>
          <Dropdown.Item href="#/action-3" id='oldest'>Oldest</Dropdown.Item>
          <Dropdown.Item href="#/action-4" id='recent'>Recent</Dropdown.Item>
        </DropdownButton>
      </Row>
    </Container>
    </div>

    <div>
    <Container bg>
      <Row id='row4'>
        <Col id="col1">Filter By</Col>
        <Col id="col2" align="center">VIDEOS HERE</Col>
      </Row>
    </Container>
    </div>

    </div>
  );
}


export default Football;
