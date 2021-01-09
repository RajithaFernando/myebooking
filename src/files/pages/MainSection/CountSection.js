import React, { Component } from 'react';
class CountSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <section id="counts" className="counts section-bg">
                    <div className="container">

                        <div className="row justify-content-end">

                            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <span
                                    // data-toggle="counter-up"
                                    >65</span>
                                    <p>Happy Clients</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <span
                                    // data-toggle="counter-up"
                                    >85</span>
                                    <p>Projects</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <span
                                    // data-toggle="counter-up"
                                    >12</span>
                                    <p>Years of experience</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <span
                                    //  data-toggle="counter-up"
                                    >15</span>
                                    <p>Awards</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default CountSection;