import React, { Component } from 'react';


import '../../../assets/css/reactStyles.css'
import { Input, Radio } from 'antd';



import { validateEmail, validateName } from '../../services/ValidateFields';

class RegisterBusinessAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            mobileNo: '',
            firstName: '',
            lastName: '',
            password: '',
            rePassword: '',
            emailError: '',
            firstNameError: '',
            lastNameError: '',
            passwordError: '',
            rePasswordError: '',
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
                this.setState({
                    emailError: validateEmail(e.target.value)
                })
            case "firstName":
                this.setState({
                    firstNameError: validateName(e.target.value)
                })
        }


    }
    onCliclCreateAccount = ()=>{
        console.log(this.state)
    }

    render() {
        const { TextArea } = Input;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        let value = this.state.buisnessCategory
        return (
            <div>
                <section id="hero" className="about">
                    <div className="container fade-up"
                        data-aos="fade-up"
                    >
                        <div className="section-title">
                            <h2 className="headingText">Create a business Account</h2>
                            <p> Acces All your shops in one login</p>
                        </div>


                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Email Address</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="email"
                                    className="formInput"
                                    placeholder="Your Personal Email"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>
                            {/*  */}
                            <div className="col-lg-2">
                                <p className="description">Mobile Number</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="mobileNo"
                                    className="formInput"
                                    placeholder="7X XXX XXXX"
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
                                    className="formInput"
                                    placeholder="First Name"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.firstNameError}</div>
                            </div>
                            {/*  */}
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
                                <div className="validateText">{this.state.emailError}</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Create A Password</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input.Password
                                    name="password"
                                    className="formInput"
                                    placeholder="input password"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>
                            {/*  */}
                            <div className="col-lg-2">
                                <p className="description">Retype Your Password</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input.Password
                                    name="rePassword"
                                    className="formInput"
                                    placeholder="password"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Address</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <TextArea
                                    rows={4}
                                    name="address"
                                    className="formInput"
                                    placeholder="Your Home Address"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>


                            <div className="col-lg-2">
                                <p className="description">NIC Number</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input

                                    name="nic"
                                    className="formInput"
                                    placeholder="password"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>
                        </div>




                        <button type="submit" className="blueButton" onClick={this.onCliclCreateAccount}>Create Account</button>


                    </div>

                </section>

            </div>
        );
    }
}

export default RegisterBusinessAccount;