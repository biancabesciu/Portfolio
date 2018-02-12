import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/page-top">BiancaB</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link js-scroll-trigger" to="/">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link js-scroll-trigger" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navigation;