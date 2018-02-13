import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

//styles

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
    );
  }
}

export default App;
