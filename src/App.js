import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      <h1>Hello There</h1>  
      <div>
      <button className='button' type='button' id='menudrop'>
        Dropdown
      </button>
      <ul className='dropdown menu' aria-labelledby='menudrop'>
        this is a dropdown
      </ul>
      </div>
    </div>
    
  );
}

export default App;
