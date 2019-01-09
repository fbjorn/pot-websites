import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/home/home';
import Developers from './pages/developers/developers';
import Blog from './pages/blog/blog';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header  className="container" />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/developers" component={Developers} />
            <Route exact path="/blog" component={Blog} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
