import React from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/team">
            </Route>
        </Switch>
      </Router>
      
      <section className="landing">
      <Navbar />
        <Button variant="success">
          JOIN NOW
        </Button>
      </section>
    </div>
  );
}

export default App;
