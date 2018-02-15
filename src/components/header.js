import React, { Component } from 'react';

import '../compiledCss/compiled.css';

class Home extends Component {
    render() {
        return (
            <header className="masthead text-center text-white d-flex">
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 className="text-uppercase">
                                <strong>Hi
                                    <span className="color">!</span>
                                    <br/>
                                    I
                                    <span className="color">'</span>
                                    m Bianca</strong>
                            </h1>
                            <hr></hr>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="text-faded mb-5">Junior Front End Developer</p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href={"/about"}>Find Out More</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Home;