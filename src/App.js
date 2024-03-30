import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div>
    <Container>
      <Row> OSU </Row>
      <Row> SPORTS NAME</Row>
      <Row> 
        <Dropdown align = "end">
          <Dropdown.Toggle align = 'end' variant="success" id="sort-dropdown">
            Sort By
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Most Viewed</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Least Viewed</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Newest</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Oldest</Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>
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
