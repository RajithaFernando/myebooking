import React, { Component } from 'react';
class Card1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in" data-aos-delay="200"
            // onClick=
            >
                <div className="icon-box">
                    <div className="icon"><i className={this.props.iconName}></i></div>
                    <h4 className="title"><a href="">{this.props.cardTitle}</a></h4>
                    <p className="description">{this.props.cardDiscription}</p>
                </div>
            </div>
        );
    }
}

export default Card1;