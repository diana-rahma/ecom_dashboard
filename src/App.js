import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProducts from './AddProducts';
import UpdateProducts from './UpdateProducts';
import Protected from './Protected';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        {/* <Header /> */}
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/AddProducts">
          <Protected Cmp={AddProducts} />
          {/* <AddProducts /> */}
        </Route>
        <Route path="/UpdateProducts">
        <Protected Cmp={UpdateProducts} />
          {/* <UpdateProducts /> */}
        </Route>
        <Route path="/">
          <Protected Cmp={ProductList} />
          {/* <AddProducts /> */}
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
