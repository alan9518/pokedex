/* ==========================================================================
** Main App Component
** 13/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
  import React, { Component } from 'react';
  import {HomeView} from './views';
  import './App.css';


// --------------------------------------
// Create Component
// --------------------------------------
class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeView/>
      </div>
    );
  }
}


// --------------------------------------
// Export Component
// --------------------------------------
export default App;
