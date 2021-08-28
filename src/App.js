import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           현재 개발 모드 : <b>{process.env.NODE_ENV}</b>
        </p>
      </header>
    </div>
  );
}

export default App;
