import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About'


class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        <Home />
        <About />
        
      </div>
    );
  }
}

export default App;
