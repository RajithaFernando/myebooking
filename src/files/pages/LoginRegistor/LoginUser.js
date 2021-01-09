import React, { Component } from 'react';


import { Input, Radio } from 'antd';
import Card3 from '../../components/Card3';

class LoginUser extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    userLogin = ()=>{
        console.log('Login')
    }
    render() {
        return (
            <div>
                <section id="hero" className="about">
                    <div className="container fade-up"
                        data-aos="fade-up"
                    >


                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Email Address</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="email"
                                    className="form-control"
                                    placeholder="Your Email"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Email Address</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input.Password
                                    name="password"
                                    className="form-control"
                                    placeholder="input password"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>

                        </div>
                        <button type="submit" className="blueButton" onClick={this.userLogin}>Login</button>
                        <br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </section>

            </div>
        );
    }
}

export default LoginUser;