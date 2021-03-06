import React, { Component } from 'react';


import { Input } from 'antd';
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
        console.log('Register')
    }
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        switch (e.target.name) {
            case "email":

                const error = validateEmail(e.target.value)

                this.setState({
                    emailError: error
                })
                break;
            default:
            // NOTHING
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
                                <p>Already Have an Account ? <a href="/Login">Login</a></p>
                                <br />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Email Address</p>
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
                                <p className="description">First Name</p>
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
                                <p className="description">Last Name</p>
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
                                <p className="description">Password</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input.Password
                                    name="password"
                                    className="formInput"
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
                                    className="formInput"
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