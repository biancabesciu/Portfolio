import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <section className="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">SKILLS</h2>
                            <span className="skills-span">MY KNOWLEDGE LEVEL IN&nbsp;SOFTWARE</span>
                            <hr className="my-4"></hr>
                        </div>
                    </div>
                </div>

                <div className="center">
                    <div className="skills-container">
                        <p>HTML</p>
                        <p>90%</p>
                        <div className="skills-bar">
                            <div className="progress-bar"></div>
                        </div>
                    </div>
                </div>

            </section>

        )
    }
}

export default Skills;