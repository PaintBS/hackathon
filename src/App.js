import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      <h1>Hello There</h1>  
      <div className="row top-buffer">
        <div className="col">
            <div className="dropdown">
                <button 
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Dropdown
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#nogo">Item 1</a>
                    <a className="dropdown-item" href="#nogo">Item 2</a>
                    <a className="dropdown-item" href="#nogo">Item 3</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default App;
