import React, { Component } from 'react';
import { Input } from 'antd';

import users from '../../data/users.json'

import { Checkbox, Row, Col } from 'antd';
class AddServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceName: '',
            serviceDescription: '',
            serviceCharge: '',
            serviceNameError: '',
            serviceChargeError: '',
        };
    }
    checkboxlog = (e) => {
        console.log(e);
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
                            <p>Add Services to your Business</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Service Name</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="serviceName"
                                    className="formInput"
                                    placeholder="Hair Cut, or Vehicle Full Service"
                                    onChange={this.onChangeInput}
                                />
                                {
                                    this.state.serviceNameError &&
                                    <div className="validateText">{this.state.serviceNameError}</div>
                                }

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Description</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="serviceDescription"
                                    className="formInput"
                                    placeholder="Describe the service"
                                    onChange={this.onChangeInput}
                                />
                                {
                                    this.state.serviceNameError &&
                                    <div className="validateText">{this.state.serviceNameError}</div>
                                }

                            </div>
                        </div>



                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Service Charge</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="serviceCharge"
                                    className="formInput"
                                    placeholder="Charge Amount of the Service IN LKR"
                                    onChange={this.onChangeInput}
                                    // addonAfter="RS"
                                    suffix=".00 RS"
                                // prefix='RS'
                                />
                                {
                                    this.state.serviceChargeError &&
                                    <div className="validateText">{this.state.serviceChargeError}</div>
                                }

                            </div>
                        </div>

                        <hr />
                        <p>Assign Employees</p>


                        {users.map((userDetails, index) => {
                            // return <h1>{userDetails.firstName}</h1>
                            return <div className="row">
                                <div className="form-group col-lg-4">
                                    <Checkbox value="BBB" onChange={this.checkboxlog}>{userDetails.firstName}</Checkbox>
                                </div>
                            </div>
                        })}

                        {/* <Checkbox.Group style={{ width: '100%' }} onChange={this.checkboxlog}>
                            <Row>
                                
                                    <Checkbox value="A">A</Checkbox>
                                    <Checkbox value="A">A</Checkbox>
                                    <Checkbox value="A">A</Checkbox>
                                    <Checkbox value="A">A</Checkbox>
                                
                            
                        </Checkbox.Group> */}




                    </div>
                </section>



            </div>
        );
    }
}

export default AddServices;