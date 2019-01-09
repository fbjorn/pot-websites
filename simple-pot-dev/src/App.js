import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Developers from './pages/developers/developers';
import Home from './pages/home/home';

class App extends Component {
  state = {
    loading: true
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header  className="container" />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/developers" component={Developers} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
