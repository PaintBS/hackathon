import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  return (
    <div>
      <h1>Hello There</h1>  
      <Dropdown>
      <Dropdown.Toggle variant="success" id="sort-dropdown">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Most View</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Least View</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Recent</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Oldest</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    
  );
}

export default App;
