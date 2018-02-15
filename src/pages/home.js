import React, { Component } from 'react';
//components
import Navigation from "../components/navigation";
import Header from "../components/header";
import About from '../pages/about';
import Skills from "../pages/skills";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";

//styles
import '../compiledCss/compiled.css';


class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Header/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </div>
        )
    }
}

export default Home;