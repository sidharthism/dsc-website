import React from 'react';
import { Button } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
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
