import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-heading">Want to hire me?</h2>
                                <hr className="my-4"></hr>
                                    <p className="mb-5">That's great! Give me a call or send me an email!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto text-center">
                                <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
                                <p>0629496852</p>
                            </div>
                            <div className="col-lg-4 mr-auto text-center">
                                <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
                                <p>
                                    <a href="mailto:bianca.besciu@gmail.com">bianca.besciu@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;