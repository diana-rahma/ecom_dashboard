import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import Header from './Header';
import {BrowserRouter, Route} from 'react-router-dom';
import login from './login';
import register from './register';
import AddProducts from './AddProducts';
import UpdateProducts from './UpdateProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <h1>E-Commerce Dashboard</h1>
      <Route path="/login">
        <login/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
