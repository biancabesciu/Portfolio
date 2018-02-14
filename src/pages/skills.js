import React, { Component } from 'react';

const htmlStyle = {
    width: '90%'
};

const CssStyle = {
    width: '70%'
};

const SassStyle = {
    width: '60%'
};

const JavaScriptStyle = {
    width: '50%'
};

const ReactStyle = {
    width: '55%'
};

class Skills extends Component {
    render() {
        return (
            <section className="skills">
                <div className="center">
                    <h2 className="section-heading">SKILLS</h2>
                    <span className="skills-span">MY KNOWLEDGE LEVEL IN&nbsp;SOFTWARE</span>
                    <hr className="my-4"></hr>
                    <div className="skills-container">
                        <div className="html">
                            <p>HTML</p>
                            <p>90%</p>
                            <div className="skills-bar">
                                <div className="progress-bar" style={htmlStyle}></div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-container">
                        <p>CSS</p>
                        <p>70%</p>
                        <div className="skills-bar">
                            <div className="progress-bar" style={CssStyle}></div>
                        </div>
                    </div>

                    <div className="skills-container">
                        <p>SASS</p>
                        <p>60%</p>
                        <div className="skills-bar">
                            <div className="progress-bar" style={SassStyle}></div>
                        </div>
                    </div>

                    <div className="skills-container">
                        <p>JAVASCRIPT</p>
                        <p>50%</p>
                        <div className="skills-bar">
                            <div className="progress-bar" style={JavaScriptStyle}></div>
                        </div>
                    </div>

                    <div className="skills-container">
                        <p>REACT</p>
                        <p>55%</p>
                        <div className="skills-bar">
                            <div className="progress-bar" style={ReactStyle}></div>
                        </div>
                    </div>
                </div>

            </section>

        )
    }
}

export default Skills;