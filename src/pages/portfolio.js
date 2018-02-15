import React, { Component } from 'react';

//styles
import '../compiledCss/compiled.css';

class Portfolio extends Component {
    render() {
        return (
            <section className="p-0" id="portfolio">
                <div className="container-fluid p-0">
                    <div className="row no-gutters popup-gallery">
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/biancabesciu/Ravenous">
                                <img className="img-fluid" src={require('../images/thumbnails/ravenous.jpg')}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                React
                                            </div>
                                            <div className="project-name">
                                                Ravenous
                                            </div>
                                        </div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/biancabesciu/Jammming">
                                <img className="img-fluid" src={require("../images/thumbnails/2.jpg")}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                React
                                            </div>
                                            <div className="project-name">
                                               Jammming
                                            </div>
                                        </div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="../images/fullsize/3.jpg">
                                <img className="img-fluid" src={require("../images/thumbnails/3.jpg")}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Category
                                            </div>
                                            <div className="project-name">
                                                Project Name
                                            </div>
                                        </div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="../images/fullsize/4.jpg">
                                <img className="img-fluid" src={require("../images/thumbnails/4.jpg")}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Category
                                            </div>
                                            <div className="project-name">
                                                Project Name
                                            </div>
                                        </div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/biancabesciu/Jammming">
                                <img className="img-fluid" src={require("../images/thumbnails/5.jpg")}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Category
                                            </div>
                                            <div className="project-name">
                                                Project Name
                                            </div>
                                        </div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="../images/fullsize/6.jpg">
                                <img className="img-fluid" src={require("../images/thumbnails/6.jpg")}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Category
                                            </div>
                                            <div className="project-name">
                                                Project Name
                                            </div>
                                        </div>
                                    </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

    )
    }
}

export default Portfolio;