import React, { Component } from 'react';
//components
import Navigation from "../components/navigation";
import Header from "../components/header";
import About from '../pages/about';
import Skills from "../pages/skills";

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
            </div>
        )
    }
}

export default Home;