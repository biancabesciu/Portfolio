import React, { Component } from 'react';

//styles
import '../compiledCss/compiled.css';

class Portfolio extends Component {
    render() {
        return (
            <section className="p-0 bg-primary" id="portfolio">
                <div className="container-fluid p-0">
                    <div className="row no-gutters popup-gallery">
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/biancabesciu/Ravenous">
                                <img className="img-fluid" src={require('../images/thumbnails/ravenous.jpg')} alt={"ravenous"}/>
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
                            <a className="portfolio-box" href="https://biancabesciu.github.io/CauseProject/">
                                <img className="img-fluid" src={require("../images/thumbnails/causeProject.jpg")} alt={"causeProject"}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Html & JavaScript
                                            </div>
                                            <div className="project-name">
                                               CauseProject
                                            </div>
                                        </div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/biancabesciu/To-Do-List">
                                <img className="img-fluid" src={require("../images/thumbnails/toDoList.jpg")} alt={"project"}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                React
                                            </div>
                                            <div className="project-name">
                                                Simple To Do List
                                            </div>
                                        </div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/biancabesciu/Lessons/tree/master/%20Music">
                                <img className="img-fluid" src={require("../images/thumbnails/music.jpg")} alt={"project"}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Html & Css
                                            </div>
                                            <div className="project-name">
                                                Simple Page
                                            </div>
                                        </div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/biancabesciu/Jammming">
                                <img className="img-fluid" src={require("../images/thumbnails/jammming.jpg")} alt={"project"}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                React
                                            </div>
                                            <div className="project-name">
                                                Jamming
                                            </div>
                                        </div>
                                    </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/biancabesciu/Lessons/tree/master/%20newsarticle">
                                <img className="img-fluid" src={require("../images/thumbnails/newsArticle.jpg")} alt={"project"}/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Html & Css
                                            </div>
                                            <div className="project-name">
                                                News article
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