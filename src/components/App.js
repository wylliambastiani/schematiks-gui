import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from './Sidebar';
import Home from './Home';
import AddServerPage from './AddServer/AddServerPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="root-container">
          <Sidebar />
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/add-server" exact component={AddServerPage} />
          </main>
        </div>
      </Router>

    );
  }
}

export default App;
