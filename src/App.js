import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header>
          <Header />
        </header>

        <main>
          <Route />
        </main>
      </div>
    );
  }
}

export default App;
