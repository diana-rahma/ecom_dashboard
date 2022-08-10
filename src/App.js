import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>E-Commerce Dashboard</h1>
      <button>Simple HTML Button</button>
      <Button>Bootstrap button</Button>
    </div>
  );
}

export default App;
