import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function App() {
  return (
    <div>
    <Container>
      <Row id='row1'> OSU </Row>
      <Row id='row2'> SPORTS NAME</Row>
      <Row id='row3'> 
        <DropdownButton
          id="dropdown-button-sort"
          variant="secondary"
          title="Sort"
          className="mt-2"
          data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1" active> Highest View </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Lowest View</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Oldest</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Recent</Dropdown.Item>
        </DropdownButton>
      </Row>
    </Container>
    
    <Container>
      <Row>
        <Col>Filter By</Col>
        <Col>VIDEOS HERE</Col>
      </Row>
    </Container>

    </div>
  );
}

export default App;
