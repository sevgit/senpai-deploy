import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import User from './Components/User';
import Blog from './Components/Blog';
import Contacto from './Components/Contacto';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><Link to="/">Usuario</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <User />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
