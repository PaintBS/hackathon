import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  return (
    <div>
      <body>
      <h1>Hello There</h1>  
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
    </body>
    <body>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="filter-dropdown">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Toggle variant="success" id='Year'>
          <Dropdown.Item href="#/action-1">Year1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Year2</Dropdown.Item>
        </Dropdown.Toggle>
        <Dropdown.Toggle variant="success" id='View'>
          <Dropdown.Item href="#/action-1">View1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">View2</Dropdown.Item>
        </Dropdown.Toggle>
      </Dropdown.Menu>
    </Dropdown>
    </body>

 </div>
 
  );
}

export default App;
