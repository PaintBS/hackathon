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

    <div className='container1-lg' id='head-of-page'>
      <div className='row1'>
        <header>      
          <h1 className='text-center' id='header'>OSU Highlights</h1>
        </header>
      </div>

      <div className='row2'>
        <h2 className='text-center' id='sport-name'> Sports Name </h2>
      </div>

      <div className='row3'>
        <div className='sort-container'>
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
        </div>
      </div>
    </div>


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
