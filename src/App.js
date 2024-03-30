import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  return (
    <div>

    <div className='container1-lg' id='head-of-page'>
      <div className='row'>
        <header>      
          <h1 className='text-center' id='header'>OSU Highlights</h1>
        </header>
      </div>

      <div className='row2'>
        <h2 className='text-center' id='sport-name'> Sports Name </h2>
      </div>

      <div className='row3'>
        <div className='sort-container'>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="sort-dropdown">
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

    <div className='container2-lg' id='body-of-page'>
      <div className='row1'>
        <div className='col1'>
          <h1 className='text-start'>Filter By</h1>
        </div>
        <div className='col2'>
          <h2 className='text-end'>VIDEOS HERE</h2>
        </div>
      </div>
    </div>

  </div>
  );
}

export default App;
