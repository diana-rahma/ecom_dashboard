import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProducts from './AddProducts';
import UpdateProducts from './UpdateProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>E-Commerce Dashboard</h1>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/AddProducts">
          <AddProducts />
        </Route>
        <Route path="/UpdateProducts">
          <UpdateProducts />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
