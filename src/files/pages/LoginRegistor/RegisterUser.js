import React, { Component } from 'react';


import { Input, Radio } from 'antd';
// import Card3 from '../../components/Card3';
import { validateEmail } from '../../services/ValidateFields';
class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            rePassword: '',
            emailError: '',
            firstNameError: '',
            role: '',

        };
    }
    // componentDidMount() {
    //     store.subscribe(() => { console.log("Store Changed", store.getState()) })
    // }

    userLogin = () => {
        console.log('Login')
    }
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state)
        })
        switch (e.target.name) {
            case "email":

                const error = validateEmail(e.target.value)

                this.setState({
                    emailError: error
                })
        }


    }
    render() {
        return (
            <div>
                <section id="hero" className="about">
                    <div className="container fade-up"
                        data-aos="fade-up"
                    >
                        <div className="row">
                            <div className="col-lg-1">
                            </div>
                            <div className="col-lg-6">
                                <p>Alredy Have an Account ? <a href="/Login">Login</a></p>
                                <br/>
                            </div>

                        </div>

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
                                <p className="description">First Name</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="firstName"
                                    className="form-control"
                                    placeholder="First Name"
                                    onChange={this.onChangeInput}
                                />
                                {/* <div className="validateText">{this.state.emailError}</div> */}
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Last Name</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Last Name"
                                    onChange={this.onChangeInput}
                                />
                                {/* <div className="validateText">{this.state.emailError}</div> */}
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Password</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input.Password
                                    name="password"
                                    className="form-control"
                                    placeholder="input password"
                                    onChange={this.onChangeInput}
                                />
                                {/* <div className="validateText">{this.state.emailError}</div> */}
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Re Type Password</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input.Password
                                    name="rePassword"
                                    className="form-control"
                                    placeholder="Retype Password"
                                    onChange={this.onChangeInput}
                                />
                                {/* <div className="validateText">{this.state.emailError}</div> */}
                            </div>

                        </div>



                        <button type="submit" className="blueButton" onClick={this.userLogin}>Register</button>
                        <br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                </section>

            </div>
        );
    }
}

export default RegisterUser;