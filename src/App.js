import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  return (
    <div>
    <header>
      <h1>OSU Highlights</h1>
    </header>

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
  );
}

export default App;
