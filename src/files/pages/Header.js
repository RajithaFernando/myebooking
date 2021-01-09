import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="header" className="fixed-top">
                <div className="container d-flex align-items-center main-header">

                    <p className="mr-auto"></p>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li className="login-user"><a href="#">Login/Register</a></li>

                        </ul>
                    </nav>
                    {/* <!-- .nav-menu --> */}

                    <h1 className="logo">my eBooking</h1>

                </div>
            </div>
        );
    }
}

export default Header;