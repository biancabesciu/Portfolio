import React, { Component } from 'react';

import '../compiledCss/compiled.css';


class About extends Component {
    render() {
        return (
            <section className="bg-primary" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading text-white">ABOUT</h2>
                            <hr className="light my-4"></hr>
                                <p className="text-faded mb-4">With a passion to develop and design, I want to work as a Front-End Developer, where I could create digital magic and elevate user experience to the next level. I am looking for a junior position where I can develop my knowledge, developed over the past 7 months and where I can put my skills into practice.</p>
                                <a className="btn btn-light btn-xl js-scroll-trigger" href={"#skills"}>Get Started!</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;