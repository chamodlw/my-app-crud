import './App.css';
import {useNavigate} from 'react-router-dom'

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome medi lab</h1>
        <button className="user-button" onClick={() => navigate('./Users')}>login</button>
      </header>
    </div>
  );
}

export default App;
