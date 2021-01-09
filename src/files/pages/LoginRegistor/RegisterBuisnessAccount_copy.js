import React, { Component } from 'react';
import { Input, Radio } from 'antd';
class RegisterBuisnessAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { TextArea } = Input;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-2">
                        <p className="description">Email Address</p>
                    </div>
                    <div className="form-group col-lg-4">
                        <Input
                            name="email"
                            className="form-control"
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
                            className="form-control"
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
                            className="form-control"
                            placeholder="First Name"
                            onChange={this.onChangeInput}
                        />
                        <div className="validateText">{this.state.emailError}</div>
                    </div>
                    {/*  */}
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
                            className="form-control"
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
                            className="form-control"
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
                            className="form-control"
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
                            className="form-control"
                            placeholder="password"
                            onChange={this.onChangeInput}
                        />
                        <div className="validateText">{this.state.emailError}</div>
                    </div>
                </div>




                <button type="submit" className="blueButton">Create Account</button>


            </div>
        );
    }
}

export default RegisterBuisnessAccount;