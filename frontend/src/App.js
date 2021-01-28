import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Nav from "./components/Nav";
import Routes from "./components/Routes";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
