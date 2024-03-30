import './Football.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'react-bootstrap/Image';


function Football() {
  return (
    <div>

    <div id='header'>
      <Container id='header_container'>
        <div id='header2'>
      <Row id='row1' className='justify-content-center' width="200px"> 
        <Image rounded src="https://education.okstate.edu/site-files/images/marketing_communication/logos/osu_brand/osu-brand-primary-full.png"
        id='osu_logo' > 
        </Image>
      </Row>
      <Row id='row2' className='justify-content-center'> SPORTS NAME</Row>
      <Row id='row3' align = "end"> 
        <DropdownButton 
          id="dropdown-button-sort"
          variant="secondary"
          title="Sort"
          className="mt-2"
          data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1"> Highest View </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Lowest View</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Oldest</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Recent</Dropdown.Item>
        </DropdownButton>
      </Row>
      </div>
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
