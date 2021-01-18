import React, { Component } from 'react';

import { Input } from 'antd';

import { validateEmail } from '../../services/ValidateFields';

class AddEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            mobile: '',
            password: '',
            rePassword: '',
            emailError: '',
            firstNameError: '',
            role: '',
        };
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

    addEmployee = () => {
        console.log('ADDED');
    }
    render() {
        return (
            <div>
                <section id="hero" className="about">
                    <div className="container fade-up"
                        data-aos="fade-up"
                    >
                        <div className="section-title">
                            <h2 className="headingText">Configure Your Business</h2>
                            <p>Add Employees to your Business</p>
                        </div>


                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Employee Email Address</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="email"
                                    className="formInput"
                                    placeholder="Your Email"
                                    onChange={this.onChangeInput}
                                />
                                {
                                    this.state.emailError &&
                                    <div className="validateText">{this.state.emailError}</div>
                                }

                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Employee First Name</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="firstName"
                                    className="formInput"
                                    placeholder="First Name"
                                    onChange={this.onChangeInput}
                                />
                                {/* <div className="validateText">{this.state.emailError}</div> */}
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Employee Last Name</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="lastName"
                                    className="formInput"
                                    placeholder="Last Name"
                                    onChange={this.onChangeInput}
                                />
                                {/* <div className="validateText">{this.state.emailError}</div> */}
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Employee Mobile</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="mobile"
                                    className="formInput"
                                    placeholder="7XXXXXXX"
                                    onChange={this.onChangeInput}
                                />
                                {/* <div className="validateText">{this.state.emailError}</div> */}
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Create a Password</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input.Password
                                    name="password"
                                    className="formInput"
                                    placeholder="Type password"
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
                                    className="formInput"
                                    placeholder="Retype Password"
                                    onChange={this.onChangeInput}
                                />
                                {/* <div className="validateText">{this.state.emailError}</div> */}
                            </div>

                        </div>

                        <button type="submit" className="blueButton" onClick={this.addEmployee}>Add Employee</button>




                    </div>
                </section>
            </div>
        );
    }
}

export default AddEmployees;