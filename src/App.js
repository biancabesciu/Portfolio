import React, { Component } from 'react';
import {Route, HashRouter } from 'react-router-dom';

import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

//styles

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path="/" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </div>
            </HashRouter>
    );
  }
}

export default App;
